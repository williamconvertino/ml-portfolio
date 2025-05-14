import Navigator from './components/Navigator';
import AboutMe from './components/AboutMe';
import ContentSection from './components/ContentSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

const publications = [
  {
    title: 'Understanding Attention-Based In-Context Learning for Categorical Data',
    description: 'Led development of computer vision models for autonomous systems.',
    image: '/icml.png',
    links: [{ url: '#', label: 'Link' }],
  }
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
        id="publications"
        title="Publications"
        items={publications}
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
