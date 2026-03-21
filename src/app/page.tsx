import { Hero } from '@/components/sections/Hero';
import { Profile } from '@/components/sections/Profile';
import { Projects } from '@/components/sections/Projects';
import { Events } from '@/components/sections/Events';
import { News } from '@/components/sections/News';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <Projects />
      <Events />
      <News />
      <Contact />
    </>
  );
}
