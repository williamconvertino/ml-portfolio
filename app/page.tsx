import Navigator from './components/Navigator';
import AboutMe from './components/AboutMe';
import ContentSection from './components/ContentSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

const dummyExperience = [
  {
    title: 'Machine Learning Engineer',
    description: 'Led development of computer vision models for autonomous systems.',
    image: '/placeholder.jpg',
    links: [{ url: '#', label: 'Company Website' }],
  },
  {
    title: 'Research Scientist',
    description: 'Published papers on deep learning applications in healthcare.',
    image: '/placeholder.jpg',
    links: [{ url: '#', label: 'Research Paper' }],
  },
];

const dummyProjects = [
  {
    title: 'AI Image Recognition',
    description: 'Developed a state-of-the-art image recognition system.',
    image: '/placeholder.jpg',
    links: [
      { url: '#', label: 'GitHub' },
      { url: '#', label: 'Demo' },
    ],
  },
];

export default function Home() {
  return (
    <main>
      <Navigator />
      <AboutMe />
      <ContentSection
        id="experience"
        title="Work Experience"
        items={dummyExperience}
      />
      <ContentSection
        id="projects"
        title="Projects"
        items={dummyProjects}
      />
      <Contact />
      <Footer />
    </main>
  );
}
