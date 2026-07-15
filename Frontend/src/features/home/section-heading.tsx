export function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow?: string;
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        {eyebrow ? (
          <p className="text-sm font-semibold text-primary">{eyebrow}</p>
        ) : null}
        <h2 className="mt-1 text-2xl font-black md:text-3xl">{title}</h2>
      </div>
      {action}
    </div>
  );
}
