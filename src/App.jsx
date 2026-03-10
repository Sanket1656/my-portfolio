import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

// Loading fallback
const Loader = () => (
  <div className="flex justify-center items-center min-h-[40vh]">
    <div className="w-8 h-8 rounded-full border-b-2 border-l-2 border-violet-500 animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-50 font-sans antialiased selection:bg-cyan-500/30 overflow-x-hidden relative">
      
      {/* Universal Ambient Backing Glow */}
      <div className="fixed top-0 inset-x-0 h-screen w-screen -z-10 bg-neutral-950">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-blob animation-delay-4000"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <Navbar />
      
      <main className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-32 pb-24 md:pt-40">
        <Suspense fallback={<Loader />}>
          <Hero />
        </Suspense>
        
        <Suspense fallback={<Loader />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<Loader />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<Loader />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<Loader />}>
          <Contact />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  )
}

export default App;
