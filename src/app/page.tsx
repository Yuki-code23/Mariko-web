import { Hero } from '@/components/sections/Hero';
import { Profile } from '@/components/sections/Profile';
import { Projects } from '@/components/sections/Projects';
import { Events } from '@/components/sections/Events';
import { News } from '@/components/sections/News';
import { OshiIntro } from '@/components/sections/OshiIntro';
import { AmebloFeed } from '@/components/sections/AmebloFeed';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <Projects />
      <Events />
      <News />
      <OshiIntro />
      <AmebloFeed />
      <Contact />
    </>
  );
}
