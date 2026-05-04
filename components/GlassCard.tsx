import { glassSurfaceSoftClass } from './glass';

type GlassCardProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

const GlassCard = ({ title, children, className = '' }: GlassCardProps) => {
  return (
    <section className={`${glassSurfaceSoftClass} p-6 ${className}`}>
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
