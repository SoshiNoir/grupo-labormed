import React from 'react';

const cards = [
  {
    id: 1,
    background: "bg-green-90",
    title: "Dúvidas Frequentes",
    size: "h-36 w-full",
    width: "w-1/3",
  },
  {
    id: 2,
    background: "bg-yellow-50",
    title: "Coleta em Domicílio",
    size: "h-36 w-full",
    width: "w-1/3",
  },
  {
    id: 3,
    background: "bg-green-90",
    title: "Orientações de Coleta",
    size: "h-36 w-full",
    width: "w-1/3",
  },
];

const Doubts = () => {
  return (
    <div className="flex gap-4 mt-8">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`${card.background} ${card.size} ${card.width} rounded-lg p-4 flex items-center justify-center`}
        >
          <h3 className="text-white text-lg font-bold text-center">{card.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Doubts;
