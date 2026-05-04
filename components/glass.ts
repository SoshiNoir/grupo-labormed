import { cn } from '@/lib/cn';

export const glassSurfaceClass = cn(
  'relative overflow-hidden rounded-[2rem] border border-white/70',
  'bg-[linear-gradient(180deg,rgba(255,255,255,0.84)_0%,rgba(241,245,249,0.66)_100%)]',
  'shadow-[0_26px_80px_-44px_rgba(15,23,42,0.5)]',
  'backdrop-blur-xl',
  'before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/80 before:content-[""]',
  'after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.55),transparent_38%)] after:content-[""]'
);

export const glassSurfaceSoftClass = cn(
  'relative overflow-hidden rounded-[1.75rem] border border-white/65',
  'bg-[linear-gradient(180deg,rgba(255,255,255,0.76)_0%,rgba(241,245,249,0.56)_100%)]',
  'shadow-[0_20px_60px_-38px_rgba(15,23,42,0.45)]',
  'backdrop-blur-lg',
  'before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-white/75 before:content-[""]'
);

export const glassInsetClass = cn(
  'rounded-[1.5rem] border border-white/70',
  'bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(248,250,252,0.58)_100%)]',
  'shadow-[inset_0_1px_0_rgba(255,255,255,0.78)]'
);

export const glassIconClass = cn(
  'inline-flex items-center justify-center rounded-lg',
  'bg-[linear-gradient(135deg,rgba(29,93,67,0.36),rgba(29,93,67,0.22))]',
  'text-white',
  'shadow-[0_14px_30px_rgba(29,93,67,0.2)]',
  'ring-1 ring-white/35',
  'backdrop-blur',
  'transition hover:bg-[linear-gradient(135deg,rgba(29,93,67,0.48),rgba(29,93,67,0.3))]',
  'hover:shadow-[0_16px_34px_rgba(29,93,67,0.24)]'
);
