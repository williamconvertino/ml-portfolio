import Section from './Section';

export default function AboutMe() {
  return (
    <Section id="about">
      <div className="flex items-center justify-end py-60">
        <div className="w-[40%] pr-20">
          <p className="text-white text-lg leading-relaxed">
            My name is William Convertino and I'm a PhD student at Duke University. My focus is on improving the interpretability of the transformer for language and vision. I've had a paper accepted at ICML and look forward to furthering my research in the field.
          </p>
        </div>
      </div>
    </Section>
  );
} 