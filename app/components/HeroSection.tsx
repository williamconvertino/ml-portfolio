'use client';

import { useState, useEffect } from 'react';

interface HeroSectionProps {
  backgroundImage: string;
  backgroundPosition?: string;
  content: string;
}

export default function HeroSection({
  backgroundImage,
  backgroundPosition = '60% center',
  content
}: HeroSectionProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="hero" className="relative min-h-[200vh]">
      <div 
        className="fixed inset-0 w-full h-full z-[-2]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition,
          backgroundAttachment: 'fixed',
          transform: 'scale(1.2) translateX(6%) translateY(-2%)',
        }}
      />
      <div className="fixed inset-0 w-full h-full bg-black opacity-50 z-[-1]" />
      
      <div className="min-h-[100vh] relative flex items-center">
        <div className="section-container relative flex justify-end -translate-y-[4vh]">
          <div 
            className={`w-[45%] p-8 rounded-xl border transition-all duration-300 ${
              isScrolled 
                ? 'bg-white border-gray-100' 
                : 'bg-white/1 backdrop-blur-sm border-white'
            }`}
          >
            <p className={`text-lg leading-relaxed transition-colors duration-300 ${
              isScrolled ? 'text-text-primary' : 'text-white'
            }`}>
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 