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
  const alignment =
    align === 'center' ? 'items-center text-center' : 'items-start';

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span className='inline-flex rounded-md bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-700 border border-emerald-100'>
          {eyebrow}
        </span>
      )}
      <h2 className='text-3xl font-bold tracking-tight text-slate-900 md:text-5xl leading-tight'>
        {title}
      </h2>
      {description && (
        <p className='text-base leading-relaxed text-slate-500 md:text-lg'>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
