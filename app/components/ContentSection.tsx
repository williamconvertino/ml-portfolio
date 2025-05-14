import Section from './Section';

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
      <div className="grid gap-8">
        {items.map((item, index) => (
          <div key={index} className="card p-8 flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-48 h-48 flex-shrink-0">
              {/* Image placeholder */}
              <div className="w-full h-full rounded-lg bg-background-alt" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-text-primary mb-4 font-['Poppins']">
                {item.title}
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                {item.description}
              </p>
              {item.links && (
                <div className="flex flex-wrap gap-4">
                  {item.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary-dark hover-effect"
                    >
                      {link.label}
                      <svg
                        className="w-4 h-4 ml-1"
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