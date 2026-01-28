
import React, { useState, useEffect, useCallback } from 'react';
import { Presentation } from './components/Presentation';
import { Header } from './components/Header';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize, 
  Minimize,
  Keyboard
} from 'lucide-react';

const TOTAL_SLIDES = 10;

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < TOTAL_SLIDES - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [nextSlide, prevSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(e => console.error(e));
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden select-none">
      {/* HUD Superior condicional */}
      {!isFullscreen && <Header />}
      
      <main className="w-full h-full">
        <Presentation slideIndex={currentSlide} />
      </main>

      {/* Navegação Flutuante Moderna */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 px-8 py-4 glass-panel rounded-full z-50 border-white/5 shadow-2xl">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-2 rounded-full hover:bg-white/5 text-white/40 hover:text-white transition-all disabled:opacity-10"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="flex gap-2 px-2">
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-700 ${
                i === currentSlide ? 'w-10 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'w-2 bg-white/10 hover:bg-white/30'
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          disabled={currentSlide === TOTAL_SLIDES - 1}
          className="p-2 rounded-full hover:bg-white/5 text-white/40 hover:text-white transition-all disabled:opacity-10"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Controles Utilitários */}
      <div className="fixed bottom-10 right-10 flex gap-4 z-50">
        <div className="hidden lg:flex items-center gap-2 px-4 py-2 glass-panel rounded-full text-[10px] font-bold tracking-widest text-white/30 uppercase border-white/5">
          <Keyboard className="w-3 h-3" />
          USE AS SETAS
        </div>
        <button 
          onClick={toggleFullscreen}
          className="p-3 glass-panel rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-all border-white/5"
        >
          {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
        </button>
      </div>

      {/* Info de Progresso condicional */}
      <div className="fixed bottom-12 left-12 text-[11px] font-black tracking-[0.4em] text-white/20 z-50 flex items-center gap-4">
        {!isFullscreen && <span>ESTRATÉGIA MODELUX 2026</span>}
        {!isFullscreen && <div className="w-8 h-[1px] bg-white/10" />}
        <span className="text-white/40">{String(currentSlide + 1).padStart(2, '0')}</span>
      </div>
    </div>
  );
};

export default App;
