export function PageHeading({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-heading container">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <div className="page-heading-bottom">
        <p>{description}</p>
        {children}
      </div>
    </section>
  );
}
