import Image from 'next/image'
import React from 'react'

const Satisfaction = () => {
  return (
    <>
      <div className='hidden md:block'>
        <Image src="/Satisfaction.png" alt="Pesquisa de Satisfação" width={1270} height={141} />
      </div>
      <div className='md:hidden'>
        <Image src="/Satisfactionmobile.png" alt="Pesquisa de Satisfação" width={1270} height={141} />
      </div>
    </>
  )
}

export default Satisfaction
