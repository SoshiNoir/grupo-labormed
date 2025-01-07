"use client";

import Image from "next/image";
import React from "react";

interface SatisfactionProps {
  onClick: () => void;
}

const Satisfaction: React.FC<SatisfactionProps> = ({ onClick }) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <div className="hidden md:block">
        <Image
          src="/satisfaction.png"
          alt="Pesquisa de Satisfação"
          width={1271}
          height={143}
          layout="responsive"
          priority
        />
      </div>
      <div className="md:hidden">
        <Image
          src="/satisfactionmobile.png"
          alt="Pesquisa de Satisfação"
          width={659}
          height={278}
          layout="responsive"
          priority
        />
      </div>
    </div>
  );
};

export default Satisfaction;
