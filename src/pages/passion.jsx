import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from 'react-router-dom';

const Passion = () => {    
    const { id } = useParams();

    const projects = [
        {
            text: 'Tiktok ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson.',
            image: '#',
            pathname: 'Documentaries'
        },
        {
            text: 'Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson.',
            image: '#',
            pathname: 'Podcast'
        },
        {
            text: 'Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson.',
            image: '#',
            pathname: 'Travel'
        },
        {
            text: 'Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson.',
            image: '#',
            pathname: 'Weddings'
        },
        {
            text: 'Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson.',
            image: '#',
            pathname: 'Maternity'
        }
    ]

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
        });
        AOS.refresh(1024);
    }, []);


  return (
    <div className=''>
        <header className='bg-gray-400 px-20 py-52'>
            <div className="grid lg:grid-cols-2">
                <span>
                    <p className='font-bold text-4xl tracking-wider pt-2 pb-8'>{id}</p>
                    <p>Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. . Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Lörem ipsum noling byber, Alice Blomqvist töhet.</p>
                </span>
            </div>
        </header>

        <section className='mt-40 mb-20 grid lg:grid-cols-2'>
            {projects.map((x,key) =>
            <div key={key} className='grid justify-items-center'>
                {x.pathname === id ? 
                <>
                <div data-aos={`${(key === 1 || key === 2) ? 'fade-up-right' : 'fade-up'}`}  className={`bg-gray-400 w-80 h-96 neonPurple ${(key === 1 || key === 2) ? 'h-60 lg:mt-40 neonPeach' : ''}`}></div>
                <p data-aos={`${(key === 1 || key === 2) ? 'fade-up-right' : 'fade-up'}`} className={`py-12 px-12 md:px-36 text-center lg:text-left ${(key === 1 || key === 2) ? 'lg:mb-20' : ''}`}>{id + ' ' + x.text}</p>
                </>
                : ''}
            </div>
            )}
        </section>
    </div>
  )
}

export default Passion