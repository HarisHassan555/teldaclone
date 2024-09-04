import React from 'react'
import forbes from '../assets/forbesLogo.png'
import tc from '../assets/techCrunchLogo.png'
import bb from '../assets/bloombergLogo.png'
import bi from '../assets/businessInsiderLogo.png'
import yf from '../assets/yahooFinanceLogo.png'
import ep from '../assets/enterpriseLogo.png'


export default function features() {
  return (
    <div className='bg-white flex flex-row justify-evenly text-center py-8'>
      <p className='flex font-light tracking- items-center'>FEATURED ON</p>
      <img
        className="h-[0.8rem] lg:h-[1.5rem] self-center"
        src={forbes}
        alt="Forbes Logo"
      />
      <img
        className="h-[0.8rem] lg:h-[1.5rem] self-center"
        src={tc}
        alt="Logo"
      />    
      <img
        className="h-[0.8rem] lg:h-[1.5rem] self-center"
        src={bb}
        alt="Logo"
      />
      <img
        className="h-[0.8rem] lg:h-[1.5rem] self-center"
        src={bi}
        alt="Logo"
      />
      <img
        className="h-[0.8rem] lg:h-[1.5rem] self-center"
        src={yf}
        alt="Logo"
      />
      <img
        className="h-[0.8rem] lg:h-[1.5rem] self-center"
        src={ep}
        alt="Logo"
      />
    </div>
  )
}
