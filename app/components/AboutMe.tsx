import Section from './Section';

export default function AboutMe() {
  return (
    <Section id="about" title="About Me">
      <div className="flex gap-8 items-start">
        <div className="w-64 h-64">
          {/* Image placeholder */}
          <div className="w-full h-full bg-gray-200" />
        </div>
        <div className="flex-1">
          <p className="text-lg">
            {/* Placeholder text - replace with actual content */}
            I am a machine learning engineer with a passion for developing innovative solutions.
            My expertise includes deep learning, computer vision, and natural language processing.
            I am currently seeking new opportunities where I can apply my skills to solve challenging problems.
          </p>
        </div>
      </div>
    </Section>
  );
} 