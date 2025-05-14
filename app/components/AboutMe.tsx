import Section from './Section';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <Section id="about">
      <div className="flex flex-col mt-30 mb-10 md:flex-row gap-20 items-center justify-center">
        <div className="w-52 h-52 rounded-full overflow-hidden shadow-lg flex-shrink-0 relative">
          <div className="absolute inset-0">
            <Image
              src="/headshot2.JPEG"
              alt="Profile picture"
              fill
              style={{ 
                objectFit: 'cover', 
                objectPosition: 'calc(26%) calc(100% + -30px)',
                transform: 'scale(3.3)'
              }}
              priority
              className="hover-effect"
            />
          </div>
        </div>
        <div className="flex-1 max-w-2xl">
          <p className="text-lg text-text-secondary leading-relaxed">
            My name is William Convertino and I'm a PhD student at Duke University. My focus is on improving the interpretability of the transformer for language and vision. I've had a paper accepted at ICML and look forward to furthering my research in the field.
          </p>
        </div>
      </div>
    </Section>
  );
} 