import Link from "next/link";

const cards = [
  {
    id: 1,
    background: "bg-green-90",
    title: "Dúvidas Frequentes",
    size: "h-36",
    href: "/faq",
  },
  {
    id: 2,
    background: "bg-yellow-50",
    title: "Coleta em Domicílio",
    size: "h-36",
    href: "/pickup",
  },
  {
    id: 3,
    background: "bg-green-90",
    title: "Direitos e Deveres",
    size: "h-36",
    href: "/RightsAndDuties",
  },
  {
    id: 4,
    background: "bg-yellow-50",
    title: "Código de Conduta Ética",
    size: "h-36",
    href: "/ethics",
  },
];

const Doubts = () => {
  return (
    <div className="grid gap-4 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Link
          key={card.id}
          href={card.href}
          className={`${card.background} ${card.size} rounded-lg p-4 flex items-center justify-center`}
        >
          <h3 className="text-white text-lg font-bold text-center">
            {card.title}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default Doubts;
