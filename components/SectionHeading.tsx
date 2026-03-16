type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) => {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start';

  return (
    <div className={`flex max-w-3xl flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <span className='inline-flex rounded-full border border-emerald-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-900 shadow-sm'>
          {eyebrow}
        </span>
      ) : null}
      <h2 className='text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl'>
        {title}
      </h2>
      {description ? (
        <p className='text-base leading-7 text-slate-600 md:text-lg'>
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
