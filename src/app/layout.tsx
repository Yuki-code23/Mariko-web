import type { Metadata } from 'next';
import { Zen_Kaku_Gothic_New, Jost } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const zenKaku = Zen_Kaku_Gothic_New({
  variable: '--font-zen-kaku',
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const jost = Jost({
  variable: '--font-jost',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: '【公式】きっかけ番長☆てんつくマン オフィシャルサイト',
    template: '%s | きっかけ番長☆てんつくマン',
  },
  description: 'お笑い芸人から路上詩人、映画監督、社会活動家へ。てんつくマンが「きっかけ」を届けるプロジェクトを通じて、笑いと行動で人と社会をつなぎます。',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: '【公式】きっかけ番長☆てんつくマン オフィシャルサイト',
    description: 'お笑い芸人から路上詩人、映画監督、社会活動家へ。',
    url: 'https://tentsukuman.onaka-hoiku.net/',
    siteName: 'きっかけ番長☆てんつくマン',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tentsukuman',
    creator: '@tentsukuman',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${zenKaku.variable} ${jost.variable} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
