import Navigator from './components/Navigator';
import AboutMe from './components/AboutMe';
import ContentSection from './components/ContentSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

const publications = [
  {
    title: 'Understanding Attention-Based In-Context Learning for Categorical Data',
    subtitle: 'ICML 2025',
    description: 'As second author on this paper, I led the development of the language modeling component, extending the theoretical foundations of in-context learning (ICL) from continuous to categorical domains. Our work introduces a novel framework that enables attention-based models to perform gradient descent-style learning over categorical data, laying the groundwork for more interpretable and adaptable ICL behavior in language models. This contribution bridges theoretical insights with practical advances in transformer-based NLP systems.',
    image: '/icml.png',
  }
];

const dummyProjects = [
  {
    title: 'Deepfake Detection',
    subtitle: 'Pytorch',
    description: 'This project focused on detecting deepfake manipulations using deep learning models. We benchmarked the performance and generalizability of several classifiers, including Vision Transformers (ViT), EfficientNet, and XceptionNet, across varied datasets and frame sampling strategies. I was responsible for designing and building the core training and evaluation pipelines, and for modifying and fine-tuning the Vision Transformer model.',
    image: '/faceforensics.png',
  },
];

export default function Home() {
  return (
    <main className="main">
      <div className="absolute inset-0 bg-black opacity-50" />
      <Navigator />
      <AboutMe />
      <div className="content-wrapper">
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
      </div>
      <Footer />
    </main>
  );
}
