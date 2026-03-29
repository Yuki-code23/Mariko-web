import type { Metadata } from 'next';
import { ProfileClient } from './ProfileClient';

export const metadata: Metadata = {
  title: 'プロフィール',
  description: 'マリコ☆バタフライのプロフィールについて掲載しています。',
};

export default function ProfilePage() {
  return <ProfileClient />;
}
