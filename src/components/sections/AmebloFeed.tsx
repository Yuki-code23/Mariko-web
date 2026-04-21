import Link from 'next/link';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import type { AmebloPost } from '@/types/ameblo';

// ノートパッドアイコン（サムネなし時のフォールバック）
function NoteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-10 h-10 text-brand-pink/40"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}

function formatDate(pubDate: string): string {
  try {
    const date = new Date(pubDate);
    return format(date, 'yyyy年M月d日', { locale: ja });
  } catch {
    return pubDate;
  }
}

async function getAmebloFeed(): Promise<AmebloPost[]> {
  try {
    // ローカル開発時は絶対URLが必要
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ??
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

    const res = await fetch(`${baseUrl}/api/ameblo-rss`, {
      next: { revalidate: 0 }, // ※一時的にキャッシュを無効化（修正確認用）
    });

    if (!res.ok) return [];
    return (await res.json()) as AmebloPost[];
  } catch {
    return [];
  }
}

export async function AmebloFeed() {
  const posts = await getAmebloFeed();

  return (
    <section
      id="ameblo-feed"
      className="py-24 bg-background text-foreground overflow-hidden relative"
    >
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-pink/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* セクションタイトル */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-widest text-brand-pink uppercase mb-2">
            Latest Blog Posts
          </p>
          <h2 className="text-4xl font-heading font-bold tracking-tight">
            マリコ☆バタフライのブログ
          </h2>
          <p className="mt-3 text-foreground/60 text-sm">アメブロの最新投稿をお届けします</p>
        </div>

        {posts.length === 0 ? (
          /* フォールバック: 取得失敗時 */
          <div className="text-center py-16">
            <p className="text-foreground/50 mb-4">現在、投稿を取得できません。</p>
            <Link
              href="https://ameblo.jp/batahurai88/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-pink text-white font-bold px-6 py-3 rounded-full hover:opacity-90 transition-all"
            >
              アメブロを見る →
            </Link>
          </div>
        ) : (
          <>
            {/* カードグリッド */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {posts.map((post, index) => (
                <Link
                  key={post.link}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-2xl overflow-hidden border border-brand-pink/20 bg-background hover:border-brand-pink/50 hover:shadow-lg hover:shadow-brand-pink/10 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {/* サムネイル */}
                  <div className="relative aspect-[16/9] bg-brand-pink/5 overflow-hidden">
                    {post.thumbnail ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full">
                        <NoteIcon />
                      </div>
                    )}
                    {/* ピンクオーバーレイ */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-pink/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* テキストエリア */}
                  <div className="flex flex-col flex-1 p-4 gap-2">
                    {/* 投稿日 */}
                    <time
                      dateTime={post.pubDate}
                      className="text-xs text-foreground/50 font-medium"
                    >
                      {formatDate(post.pubDate)}
                    </time>

                    {/* タイトル */}
                    <h3 className="text-sm font-bold leading-snug line-clamp-2 group-hover:text-brand-pink transition-colors duration-200">
                      {post.title}
                    </h3>

                    {/* 概要 */}
                    {post.description && (
                      <p className="text-xs text-foreground/60 leading-relaxed line-clamp-3 flex-1">
                        {post.description}
                      </p>
                    )}

                    {/* 読むボタン */}
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-brand-pink group-hover:gap-2 transition-all duration-200">
                      記事を読む
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-3.5 h-3.5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* アメブロへのリンク */}
            <div className="text-center mt-10">
              <Link
                href="https://ameblo.jp/batahurai88/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-brand-pink text-brand-pink font-bold px-8 py-3.5 rounded-full hover:bg-brand-pink hover:text-white transition-all duration-200 text-sm"
              >
                <span>📝</span>
                アメブロをもっと見る
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
