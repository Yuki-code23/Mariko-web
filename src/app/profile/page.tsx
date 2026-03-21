import type { Metadata } from 'next';
import { ProfileClient } from './ProfileClient';

export const metadata: Metadata = {
  title: 'プロフィール',
  description: 'てんつくマンのプロフィールについて掲載しています。',
};

export default function ProfilePage() {
  return <ProfileClient />;
}
