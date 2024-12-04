interface ListItemProps {
  title: string;
  text: string;
  titleColor?: string;
  textColor?: string;
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  text,
  titleColor = "text-green-500",
  textColor = "text-gray-700",
}) => {
  return (
    <li className="border-b border-gray-300 pb-2">
      <span className={`font-bold ${titleColor}`}>{title}:</span>{" "}
      <span className={textColor}>{text}</span>
    </li>
  );
};

export default ListItem;
