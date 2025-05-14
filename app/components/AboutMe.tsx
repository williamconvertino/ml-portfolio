import Section from './Section';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <Section id="about">
      <div className="flex flex-col mt-20 mb-10 md:flex-row gap-20 items-center md:items-start">
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg flex-shrink-0 relative">
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
            I am a machine learning engineer with a passion for developing innovative solutions.
            My expertise includes deep learning, computer vision, and natural language processing.
            I am currently seeking new opportunities where I can apply my skills to solve challenging problems.
          </p>
        </div>
      </div>
    </Section>
  );
} 