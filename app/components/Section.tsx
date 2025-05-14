interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="relative py-3">
      <div className="absolute inset-0 bg-background" />
      <div className="relative section-container">
      {title && (
        <div className="mb-4">
            <h2 className="text-3xl font-bold text-center font-['Poppins'] text-text-primary">
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