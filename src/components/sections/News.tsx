import Link from 'next/link';
import { MOCK_NEWS } from '@/constants/data';
import { formatDate } from '@/lib/utils';

export function News() {
  const news = MOCK_NEWS;

  return (
    <section id="news" className="py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-heading font-bold mb-12 text-center tracking-tight">ニュース</h2>
        
        {news.length === 0 ? (
          <p className="text-center opacity-70 py-10">現在ニュースはありません。</p>
        ) : (
          <div className="flex flex-col border-t border-foreground/10">
            {news.map((item) => (
              <article key={item.id} className="border-b border-foreground/10 group">
                <Link href="#" className="flex flex-col md:flex-row gap-4 py-6 md:items-center hover:bg-brand-pink/5 transition-colors md:px-4 md:-mx-4 rounded-lg">
                  <div className="flex flex-row items-center gap-4 md:w-1/3 shrink-0">
                    <time className="font-mono text-sm opacity-80">{formatDate(item.date)}</time>
                    <span className="text-xs font-bold px-3 py-1 bg-brand-pink/10 text-brand-pink rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg group-hover:text-brand-pink transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </Link>
              </article>
            ))}
          </div>
        )}
        <div className="mt-12 text-center">
          <Link href="#" className="inline-block border-2 border-brand-pink text-brand-pink rounded-full px-8 py-3 hover:bg-brand-pink hover:text-white transition-colors font-bold">
            一覧を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
