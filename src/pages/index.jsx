import React from 'react'
import Carousel from '../components/swiper'

const Index = () => {  
  return (
    <div className='index'>
      <section className='grid lg:grid-cols-2 pt-4 pb-28 px-10 lg:px-20 bg-[#020024]'>
        <header className='self-center'>
          <p className='text-6xl font-black pb-8'>Lorem <span className="">ipsum</span> dolor make</p>
          <p>Lörem ipsum euroskade tinat. Teras las SEM: kror.  Lörem ipsum euroskade tinat. Teras las SEM: kror.  kror. Lörem ipsum euroskade tinat. Teras las SEM: kror. Lörem ipsum euroskade tinat. Teras las SEM: kror. Lörem ipsum euroskade tinat. Teras las SEM: kror. Lörem ipsum SEM: kror. </p>
        </header>
        <svg className='' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#E92EFB" d="M44,-32.6C58.9,-16.4,74.2,2,72.5,19.5C70.9,36.9,52.3,53.4,30.3,64.7C8.3,75.9,-17,81.9,-32.4,72.5C-47.9,63.1,-53.5,38.3,-53.6,17.9C-53.7,-2.4,-48.3,-18.3,-38.5,-33.3C-28.6,-48.3,-14.3,-62.5,0.1,-62.6C14.5,-62.7,29.1,-48.7,44,-32.6Z" transform="translate(100 100)" />
        </svg>
      </section> 
      <section className='px-10 lg:px-20 py-32'>
        {/* <p className='title mb-12'>Lörem ipsum euroskade tinat. </p>
        <Carousel /> */}
      </section>
      <section className='bg-[#0F0E2B] py-40 w-2/3 mx-auto'>
        <div className="text-center">
          <p className='title mb-4'>Lörem ipsum euroskade tinat. </p>
          <p>Lörem ipsum euroskade tinat. Teras las SEM: kror.  Lörem ipsum euroskade tinat. Teras las SEM: kror. Lörem ipsum euroskade tinat. Teras las SEM: kror. Lörem ipsum euroskade tinat. Teras las SEM: kror. Lörem ipsum euroskade tinat. Teras las SEM: kror. Lörem ipsum euroskade tinat. Teras las SEM: kror. Lörem ipsum euroskade tinat. Teras las SEM: kror. Lörem ipsum euroskade tinat. Teras las SEM: kror. Lörem ipsum euroskade tinat. Teras las SEM: kror. Lörem ipsum SEM: kror. </p>
          <button className='btn-default mt-20'>Contact</button>
        </div>
      </section>
    </div>
  )
}

export default Index