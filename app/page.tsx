import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import ThemeToggle from '@/components/ThemeToggle';

// This page is server-rendered by default in Next.js 16 App Router
// Client components are marked with 'use client' directive
export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-300">
      <ThemeToggle />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
