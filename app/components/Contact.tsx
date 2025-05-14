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
      <div className="flex flex-col items-center gap-4">
        <div>
          <p>Email: {contactInfo.email}</p>
          <p>Phone: {contactInfo.phone}</p>
        </div>
        <div className="flex gap-4">
          {contactInfo.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
} 