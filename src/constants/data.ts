import { News, Event } from '@/types';

export const MOCK_NEWS: News[] = [
  {
    id: 'n1',
    title: 'マリコ☆バタフライの新プロジェクト「MIRAI COOOL VILLAGE」がスタートします！',
    date: '2026-03-15T00:00:00Z',
    category: 'お知らせ',
    content: '国境も言葉も関係なく、みんなが笑顔になれる新しいアートプロジェクトが始動しました。',
    slug: 'mirai-warai-start',
  },
  {
    id: 'n2',
    title: 'NEW ERA VOYAGEツアーの全日程が決定しました',
    date: '2026-03-01T00:00:00Z',
    category: 'イベント案内',
    content:
      '全国各地を回るツアーのスケジュールが公開されました。お近くの会場にぜひお越しください。',
    slug: 'new-era-voyage-schedule',
  },
  {
    id: 'n3',
    title: '「おなかの中から保育園」入園説明会のお知らせ',
    date: '2026-02-20T00:00:00Z',
    category: 'お知らせ',
    content: '妊娠中からサポートを受けられる新しい形の保育園、第一期生の募集を開始します。',
    slug: 'onaka-hoikuen-briefing',
  },
];

export const MOCK_EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'NEW ERA VOYAGEツアー 幕開け公演 in 東京',
    date: '2026-04-15T18:00:00Z',
    location: '東京都渋谷区 〇〇ホール',
    description: '希望をテーマにした日本横断ツアーの初日を飾る特別公演。ゲストも多数出演予定。',
    imageUrl:
      'https://tentsukuman.onaka-hoiku.net/wp-content/uploads/2026/03/650656147_18537601456069805_2626661418232450334_n-300x300.jpg',
    link: '/events/new-era-voyage-tokyo',
  },
  {
    id: 'e2',
    title: 'MIRAI WARAI 村づくりワークショップ',
    date: '2026-05-03T10:00:00Z',
    location: '沖縄県〇〇市',
    description:
      '多世代交流拠点となる村のDIYワークショップ。一緒にペンキ塗りや畑作りを体験できます。',
    imageUrl:
      'https://tentsukuman.onaka-hoiku.net/wp-content/uploads/2025/09/service_coool_village.jpg',
    link: '/events/workshop-okinawa',
  },
];
