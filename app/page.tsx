// src/app/page.tsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Strategy from '../components/Strategy';
import Results from '../components/Results';
import Process from '../components/Process';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="selection:bg-blue-100">
      <Navbar />
      <Hero />
      <Strategy />
      <Results />
      <Process />
      <Footer />
    </main>
  );
}