type InfoListItemProps = {
  title: string;
  text: string;
  light?: boolean;
};

const InfoListItem = ({ title, text, light = false }: InfoListItemProps) => {
  return (
    <li
      className={`border-b pb-3 ${
        light ? 'border-white/15 text-slate-200' : 'border-slate-200 text-slate-600'
      }`}
    >
      <span className={light ? 'font-semibold text-white' : 'font-semibold text-emerald-900'}>
        {title}:
      </span>{' '}
      <span>{text}</span>
    </li>
  );
};

export default InfoListItem;
