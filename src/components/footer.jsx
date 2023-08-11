import React from 'react'

const Footer = () => {
  return (
    <footer className='h-max w-full'>
      <div className="grid md:grid-cols-12 py-16">
        <div className='col-span-6 pb-10 md:pb-0'>
          <h1 className='w-60 text-3xl font-semibold pb-2'>Barbra Okafor</h1>
          <p className='w-80'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias animi ipsam quos facere modi explicabo id tempora.</p>
          <button className='btn-outline mt-8'>Contact</button>
        </div>
        
        <div className='col-span-3 grid gap-y-2'>
          <p className='gray-text'>Pages</p>
        </div>
        
        <div className='col-span-3 grid gap-y-2'>
          <p className='gray-text'>Socials</p>
          <a href="">Instagram</a>
          <a href="">TikTok</a>
          <a href="">Twitter</a>
          <a href="">Facebook</a>
        </div>
      </div>
      <hr className='border-[#475467]'/>
      <div className='gray-text py-8'><p>&copy; 2023 Be You Films. All rights reserved.</p></div>
    </footer>
  )
}

export default Footer