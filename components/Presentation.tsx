
import React from 'react';
import { 
  Slide1_Opening, 
  Slide2_Problem, 
  Slide3_Behavior, 
  Slide4_Concept, 
  Slide5_XP_Conversion, 
  Slide6_Performance, 
  Slide7_Authority, 
  Slide8_TrafficCrisis, 
  Slide9_Strategy, 
  Slide10_GrandFinale 
} from './Slides';

interface PresentationProps {
  slideIndex: number;
}

export const Presentation: React.FC<PresentationProps> = ({ slideIndex }) => {
  const slides = [
    Slide1_Opening,
    Slide2_Problem,
    Slide3_Behavior,
    Slide4_Concept,
    Slide5_XP_Conversion,
    Slide6_Performance,
    Slide7_Authority,
    Slide8_TrafficCrisis,
    Slide9_Strategy,
    Slide10_GrandFinale
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {slides.map((SlideComponent, index) => (
        <div 
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] p-12 lg:p-24 ${
            index === slideIndex 
              ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto blur-0' 
              : index < slideIndex 
                ? 'opacity-0 -translate-y-24 scale-90 pointer-events-none blur-lg'
                : 'opacity-0 translate-y-24 scale-110 pointer-events-none blur-lg'
          }`}
        >
          <SlideComponent active={index === slideIndex} />
        </div>
      ))}
    </div>
  );
};
