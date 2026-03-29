import { getNewsList } from '@/lib/microcms';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';

export const metadata = {
  title: 'ニュース一覧 | マリコ☆バタフライ オフィシャルサイト',
  description: '最新のニュースや更新情報の一覧です。',
};

export default async function NewsPage() {
  const data = await getNewsList({ limit: 100 });
  const news = data.contents;

  return (
    <main className="min-h-screen pt-32 pb-24 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">ニュース一覧</h1>
          <p className="opacity-80">最新のお知らせや活動報告</p>
        </header>

        {news.length === 0 ? (
          <p className="text-center opacity-70 py-10">現在ニュースはありません。</p>
        ) : (
          <div className="flex flex-col border-t border-foreground/10 mb-16">
            {news.map((item) => (
              <article key={item.id} className="border-b border-foreground/10 group">
                {/* 詳細ページを実装するまでの間は一覧画面の表示のみとします */}
                <div className="flex flex-col md:flex-row gap-4 py-6 md:items-center hover:bg-brand-pink/5 transition-colors md:px-4 md:-mx-4 rounded-lg">
                  <div className="flex flex-row items-center gap-4 md:w-1/3 shrink-0">
                    <time className="font-mono text-sm opacity-80">
                      {item.publishedAtDate
                        ? formatDate(item.publishedAtDate)
                        : formatDate(item.publishedAt || item.createdAt)}
                    </time>
                    <span className="text-xs font-bold px-3 py-1 bg-brand-pink/10 text-brand-pink rounded-full">
                      {item.category || 'お知らせ'}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-brand-pink transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="text-center">
          <Link
            href="/#news"
            className="inline-block border-2 border-brand-pink text-brand-pink rounded-full px-8 py-3 hover:bg-brand-pink hover:text-white transition-colors font-bold"
          >
            トップページへ戻る
          </Link>
        </div>
      </div>
    </main>
  );
}
