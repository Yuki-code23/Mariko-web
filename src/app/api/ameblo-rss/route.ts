import { NextResponse } from 'next/server';
import { XMLParser } from 'fast-xml-parser';
import type { AmebloPost } from '@/types/ameblo';

const RSS_URL = 'https://rssblog.ameba.jp/batahurai88/rss20.xml';
const POSTS_COUNT = 4;

/**
 * アメブロの本文HTMLからサムネイル画像URLを抽出する
 * <description>のCDATAにimgタグが含まれる場合に取得
 */
function extractThumbnail(description: string): string | null {
  const match = description.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
}

/**
 * HTMLタグとCDATAを除去してプレーンテキストに変換
 */
function stripHtml(html: string): string {
  return html
    .replace(/<!\[CDATA\[|\]\]>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim();
}

export async function GET() {
  try {
    const response = await fetch(RSS_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Mariko-web/1.0; +https://mariko-web.vercel.app)',
        Accept: 'application/rss+xml, application/xml, text/xml',
      },
      next: { revalidate: 3600 }, // 1時間キャッシュ
    });

    if (!response.ok) {
      throw new Error(`RSS fetch failed: ${response.status}`);
    }

    const xmlText = await response.text();

    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '@_',
      cdataPropName: '__cdata',
      parseAttributeValue: true,
      allowBooleanAttributes: true,
    });

    const parsed = parser.parse(xmlText);
    const items = parsed?.rss?.channel?.item ?? [];
    const itemArray = Array.isArray(items) ? items : [items];

    const posts: AmebloPost[] = itemArray.slice(0, POSTS_COUNT).map((item) => {
      const rawTitle: string = item.title?.__cdata ?? item.title ?? '';
      const rawDesc: string = item.description?.__cdata ?? item.description ?? '';
      const link: string = item.link ?? '';
      const pubDate: string = item.pubDate ?? '';
      const thumbnail = extractThumbnail(rawDesc);

      return {
        title: stripHtml(rawTitle),
        link,
        pubDate,
        description: stripHtml(rawDesc).slice(0, 120),
        thumbnail,
      };
    });

    return NextResponse.json(posts, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    });
  } catch (error) {
    console.error('[AmebloRSS] Failed to fetch or parse RSS:', error);
    return NextResponse.json([], { status: 200 });
  }
}
