import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>
    </main>
  );
}
