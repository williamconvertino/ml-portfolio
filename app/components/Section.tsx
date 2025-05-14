interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="min-h-screen py-20">
      <h2 className="text-3xl font-bold text-center mb-10">{title}</h2>
      {children}
    </section>
  );
} 