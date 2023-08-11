import React from 'react'


const Contact = () => {
  return (
    <div className='pageBody'>
        <div className="grid lg:grid-cols-2">
            <div className="grid grid-cols-2 max-w-xl justify-items-center lg:justify-items-start items-center my-20 lg:my-0 contactCards">
                <div className='bg-gray-400 w-40 h-40 one'></div>
                <div className='bg-gray-400 w-40 h-40 two'></div>
                <div className='bg-gray-400 w-40 h-40 three'></div>
                <div className='bg-gray-400 w-40 h-40 four'></div>
                <div className='bg-gray-400 w-40 h-40 five'></div>   
            </div>

            <div className="pb-20 lg:pb-0 px-10">
                <form className="">
                    <p className='pb-8'>
                    Lörem ipsum prerad ajongen prede Anita Ahmed. Patrik Dahlberg Claes Lundgren nöbel. Lörem ipsum prerad ajongen prede Anita Ahmed. Patrik Dahlberg Claes Lundgren nöbel. Lörem ipsum prerad ajongen prede Anita Ahmed. Patrik Dahlberg Claes Lundgren nöbel. 
                    </p>

                    <div className="grid gap-y-8">
                        <div className='grid lg:flex gap-x-8 gap-y-8'>
                            <input type="text" placeholder='Name' />
                            <input type="email" placeholder='Email' />
                        </div>
                        <textarea name="" id="" cols="30" rows="8" placeholder='Additional Comments' className='p-4'></textarea>
                    </div>
                    
                    <button className='btn-default w-full mt-8'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact