type GlassCardProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

const GlassCard = ({ title, children, className = '' }: GlassCardProps) => {
  return (
    <section
      className={`rounded-[1.75rem] border border-white/70 bg-white/72 p-6 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.55)] backdrop-blur-xl ${className}`}
    >
      {title ? (
        <h2 className='text-2xl font-semibold tracking-tight text-slate-950'>
          {title}
        </h2>
      ) : null}
      <div className={title ? 'mt-4' : ''}>{children}</div>
    </section>
  );
};

export default GlassCard;
