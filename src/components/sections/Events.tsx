import Link from 'next/link';
import Image from 'next/image';
import { MOCK_EVENTS } from '@/constants/data';
import { formatDate } from '@/lib/utils';
import type { Event } from '@/types';

export function Events() {
  const events = MOCK_EVENTS;

  return (
    <section id="events" className="py-24 bg-brand-orange-light/5 text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold mb-12 text-center tracking-tight text-brand-teal">開催予定のイベント</h2>
        
        {events.length === 0 ? (
          <p className="text-center opacity-70 py-10 bg-background rounded-2xl shadow-sm">
            現在開催予定のイベントはありません。
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function EventCard({ event }: { event: Event }) {
  return (
    <article className="bg-background rounded-2xl overflow-hidden shadow-lg flex flex-col group hover:-translate-y-2 transition-transform duration-300 border border-foreground/5">
      <div className="relative aspect-[4/3] w-full bg-foreground/5 shrink-0 overflow-hidden">
        {event.imageUrl ? (
          <Image 
            src={event.imageUrl} 
            alt={`${event.title}のイメージ画像`} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500" 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full opacity-30 font-bold tracking-widest text-sm">NO IMAGE</div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow gap-4">
        <div className="flex flex-col gap-1 text-sm font-bold text-brand-orange-dark">
          <time>{formatDate(event.date)}</time>
          <span className="opacity-80 text-foreground">{event.location}</span>
        </div>
        <h3 className="font-bold font-heading text-xl leading-tight text-balance group-hover:text-brand-orange-dark transition-colors">{event.title}</h3>
        <p className="text-sm opacity-70 flex-grow">{event.description}</p>
        <Link href="#" className="mt-4 text-brand-teal font-bold hover:opacity-70 transition-opacity self-start inline-flex items-center gap-1">
          詳細を見る <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </article>
  );
}
