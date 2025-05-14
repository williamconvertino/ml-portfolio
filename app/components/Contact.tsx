import Section from './Section';

const contactInfo = {
  email: 'your.email@example.com',
  phone: '+1 (123) 456-7890',
  socialLinks: [
    { label: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
    { label: 'GitHub', url: 'https://github.com/yourusername' },
  ],
};

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="max-w-2xl mx-auto">
        <div className="card p-8 text-center">
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-2 text-text-secondary hover:text-primary hover-effect">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${contactInfo.email}`} className="text-lg">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-text-secondary hover:text-primary hover-effect">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-lg">{contactInfo.phone}</span>
            </div>
          </div>
          <div className="flex justify-center gap-6">
            {contactInfo.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary hover-effect text-lg font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
} 