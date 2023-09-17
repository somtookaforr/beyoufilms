import React from 'react'
import vector from '../assets/vector.svg'


const Courses = () => {
  return (
    <div className='pageBody mb-20'>
        <div className="grid lg:grid-cols-12 text-center lg:text-left">
            <div className='lg:col-span-4 mt-12 lg:mt-0 self-center'>
                <p className='text-5xl font-bold'>Be You Films</p>
                <p className='pt-2 pb-8'>We’re coming soon, expect us!</p>
                <img className='mx-auto lg:mx-0' src={vector} alt="" />
            </div>
            <div className='lg:block lg:col-span-1 lg:justify-self-start hidden'>
                <div className='w-3 h-full rounded-t-full bg-white neonWhite'></div>
                <div className='w-3 h-2/3 rounded-full -mt-32 bg-[#E92EFB] neonPurple'></div>
            </div>
            <div className='lg:col-span-6 justify-start mt-12 lg:mt-0'>
                <p className='text-2xl font-bold'>Coming Soon</p>
                <p className='pb-8 pt-2'>We’re coming soon, expect us!</p>
                <div className='grid grid-cols-4 gap-x-10'>
                    <div className='px-6 py-20 bg-gray-500'></div>
                    <div className='px-6 py-20 bg-gray-500'></div>
                    <div className='px-6 py-20 bg-gray-500'></div>
                    <div className='px-6 py-20 bg-gray-500'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses