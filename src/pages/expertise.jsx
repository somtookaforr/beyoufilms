import React from 'react'

const Expertise = () => {
    const data = [
        {
            title: 'Lorem misu to',
            text: 'Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson.',
            image: '#'
        },

        {
            title: 'Lorem misu to',
            text: 'Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson.',
            image: '#'
        },
        
        {
            title: 'Lorem misu to',
            text: 'Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson.',
            image: '#'
        }
    ]


  return (
    <div className='grid'>
        {data.map((x,key) =>
            <section className={`grid lg:grid-cols-2 gap-y-12 py-24 px-[64px] lg:px-[64px] ${key%2 !== 0 ? 'bg-[#020024]' : ''}`} key={key}>
                <div className={`${key%2 !== 0 ? 'lg:order-1' : ''} lg:px-8`}>
                    <p className='title pb-8'>{x.title}</p>
                    <p>{x.text}</p>
                </div>
                <div className=''>
                    <div className='bg-gray-400 w-full lg:w-8/12 h-56 neonWhite'></div>
                </div>
            </section>
        )}
    </div>
  )
}

export default Expertise