import Image from 'next/image';
import React from 'react';

const Satisfaction = () => {
  return (
    <>
      <div className='hidden md:block'>
        <Image
          src="/Satisfaction.png"
          alt="Pesquisa de Satisfação"
          width={1270}
          height={141}
          layout="responsive"
          priority
        />
      </div>
      <div className='md:hidden'>
        <Image
          src="/Satisfactionmobile.png"
          alt="Pesquisa de Satisfação"
          width={659}
          height={278}
          layout="responsive"
          priority
        />
      </div>
    </>
  );
};

export default Satisfaction;
