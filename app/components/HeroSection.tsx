'use client';

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
  return (
    <div className="relative min-h-[200vh]">
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
        <div className="relative w-full flex justify-end translate-y-[-15vh] mr-20 ml-20">
          <div className="w-[40%] mr-[10%]">
            <p className="text-white text-lg leading-relaxed">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 