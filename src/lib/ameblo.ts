import { XMLParser } from 'fast-xml-parser';
import type { AmebloPost } from '@/types/ameblo';

const RSS_URL = 'https://rssblog.ameba.jp/batahurai88/rss20.xml';
const POSTS_COUNT = 4;

function extractThumbnail(description: string): string | null {
  const matches = [...description.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)];

  for (const match of matches) {
    const src = match[1].replace(/&amp;/g, '&');
    if (src.includes('user_images') || src.includes('/user_images/')) {
      return src;
    }
  }
  return null;
}

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

export async function fetchAmebloRSS(): Promise<AmebloPost[]> {
  try {
    const response = await fetch(RSS_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Mariko-web/1.0; +https://mariko-web.vercel.app)',
        Accept: 'application/rss+xml, application/xml, text/xml',
      },
      next: { revalidate: 3600 }, // 1時間に1回キャッシュを更新
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

    const posts: AmebloPost[] = itemArray
      .slice(0, POSTS_COUNT)
      .map((item: Record<string, unknown>) => {
        // 型アサーションを使ってアクセス
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const itemTitle = item.title as any;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const itemDesc = item.description as any;

        const rawTitle: string = itemTitle?.__cdata ?? itemTitle ?? '';
        const rawDesc: string = itemDesc?.__cdata ?? itemDesc ?? '';
        const link: string = (item.link as string) ?? '';
        const pubDate: string = (item.pubDate as string) ?? '';
        const thumbnail = extractThumbnail(rawDesc);

        return {
          title: stripHtml(rawTitle),
          link,
          pubDate,
          description: stripHtml(rawDesc).slice(0, 120),
          thumbnail,
        };
      });

    return posts;
  } catch (error) {
    console.error('[AmebloRSS] Failed to fetch or parse RSS:', error);
    return [];
  }
}
