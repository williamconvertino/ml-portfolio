import Section from './Section';
import Image from 'next/image';

interface ContentItem {
  title: string;
  description: string;
  image: string;
  links?: { url: string; label: string }[];
}

interface ContentSectionProps {
  id: string;
  title: string;
  items: ContentItem[];
}

export default function ContentSection({ id, title, items }: ContentSectionProps) {
  return (
    <Section id={id} title={title}>
      <div className="grid gap-6">
        {items.map((item, index) => (
          <div key={index} className="card overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-40 h-40 flex-shrink-0 relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{ objectFit: 'cover' }}
                className="hover-effect"
              />
            </div>
            <div className="flex-1 py-5 px-6">
              <h3 className="text-xl font-semibold text-text-primary mb-2 font-['Poppins']">
                {item.title}
              </h3>
              <p className="text-text-secondary mb-3 leading-relaxed text-sm">
                {item.description}
              </p>
              {item.links && (
                <div className="flex flex-wrap gap-3">
                  {item.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary-dark hover-effect text-sm"
                    >
                      {link.label}
                      <svg
                        className="w-3 h-3 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
} 