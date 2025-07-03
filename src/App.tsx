import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Workflow } from '@/components/Workflow';
import { Stats } from '@/components/Stats';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { LaunchBanner } from '@/components/LaunchBanner';
import { WaitlistBanner } from '@/components/WaitlistBanner';
import { Footer } from '@/components/Footer';
import { InteractiveBackground } from '@/components/InteractiveBackground';
import { Toaster } from '@/components/ui/sonner';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-custom-gray-50 text-custom-gray-800 relative overflow-x-hidden">
      <InteractiveBackground />
      <div className="relative z-10 w-full max-w-full">
        <Header />
        <main className="w-full max-w-full overflow-x-hidden">
          <Hero />
          <Features />
          <Workflow />
          <Stats />
          <Pricing />
          <FAQ />
          <LaunchBanner />
          <WaitlistBanner />
        </main>
        <Footer />
        <Toaster />
      </div>
    </div>
  );
}

export default App;