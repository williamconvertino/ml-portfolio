interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="relative">
      <div className="absolute inset-0 bg-background" />
      <div className="relative section-container">
      {title && (
        <div>
            <h2 className="text-3xl mb-6 font-bold text-center font-['Poppins'] text-text-primary">
            {title}
            </h2>
        </div>
        )}
        <div className="relative">
          {children}
        </div>
      </div>
    </section>
  );
} 