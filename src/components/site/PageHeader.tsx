export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 text-center fade-up">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">{title}</h1>
        <div className="gold-rule mx-auto mt-6 w-24" />
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
