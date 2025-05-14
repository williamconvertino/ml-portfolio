interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-24 bg-background">
      <div className="section-container">
        <h2 className="text-4xl font-bold text-center mb-16 font-['Poppins'] text-text-primary">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
} 