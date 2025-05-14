interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

export default function Section({ id, title, children, fullWidth }: SectionProps) {
  return (
    <section id={id} className="relative">
      {!fullWidth && <div className="absolute inset-0 bg-background" />}
      <div className={fullWidth ? "" : "relative section-container"}>
        {title && (
          <div>
            <h2 className="text-3xl mb-6 font-bold text-center font-['Poppins'] text-text-primary">
              {title}
            </h2>
          </div>
        )}
        <div className={fullWidth ? "w-full h-full" : "relative"}>
          {children}
        </div>
      </div>
    </section>
  );
} 