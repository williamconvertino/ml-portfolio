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
      <div className="grid gap-6">
        {items.map((item, index) => (
          <div key={index} className="flex gap-4 p-4">
            <div className="w-24 h-24">
              {/* Image placeholder */}
              <div className="w-full h-full bg-gray-200" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p>{item.description}</p>
              {item.links && (
                <div className="flex gap-4 mt-2">
                  {item.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      className="text-blue-600 hover:underline"
                    >
                      {link.label}
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