import Section from './Section';

export default function AboutMe() {
  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg flex-shrink-0">
          {/* Image placeholder */}
          <div className="w-full h-full bg-background-alt" />
        </div>
        <div className="flex-1 max-w-2xl">
          <p className="text-lg text-text-secondary leading-relaxed">
            {/* Placeholder text - replace with actual content */}
            I am a machine learning engineer with a passion for developing innovative solutions.
            My expertise includes deep learning, computer vision, and natural language processing.
            I am currently seeking new opportunities where I can apply my skills to solve challenging problems.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2 text-primary">Skills</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>Machine Learning</li>
                <li>Deep Learning</li>
                <li>Computer Vision</li>
                <li>Natural Language Processing</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2 text-primary">Education</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>Ph.D. in Computer Science</li>
                <li>M.S. in Machine Learning</li>
                <li>B.S. in Computer Science</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
} 