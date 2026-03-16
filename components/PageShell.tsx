import Image from 'next/image';
import SectionHeading from './SectionHeading';

type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
};

const PageShell = ({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  children,
}: PageShellProps) => {
  return (
    <div className='space-y-8 pb-8'>
      <section className='grid gap-5 rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.55)] backdrop-blur md:p-8 lg:grid-cols-[1.15fr_auto] lg:items-center'>
        <div className='flex items-center'>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </div>
        <div className='mx-auto w-full max-w-[320px] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)] shadow-[0_24px_60px_-40px_rgba(15,23,42,0.32)] lg:mx-0 lg:justify-self-end'>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={640}
            height={640}
            className='h-auto w-full object-cover'
          />
        </div>
      </section>
      {children}
    </div>
  );
};

export default PageShell;
