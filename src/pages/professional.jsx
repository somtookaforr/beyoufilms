import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from 'react-router-dom';
import {bodyData, headerData} from '../data'

const Passion = () => {    
    const { id } = useParams();

    // const pathname = window.location.pathname.slice(23) + '_header'
    // var header = pathname.toLocaleLowerCase()
    // if(header){
        
    // }


    // const professional = [
    //     {
    //         text: 'Tiktok ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson.',
    //         image: '#',
    //         pathname: 'Tiktok'
    //     },
    //     {
    //         text: 'Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson.',
    //         image: '#',
    //         pathname: 'BBC'
    //     },
    //     {
    //         text: 'Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson.',
    //         image: ncbn1,
    //         pathname: 'NCBN'
    //     },
    //     {
    //         text: 'Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson.',
    //         image: ncbn2,
    //         pathname: 'NCBN'
    //     },
    //     {
    //         text: 'Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson.',
    //         image: '#',
    //         pathname: 'Trace'
    //     },
    //     {
    //         text: 'Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson.',
    //         image: '#',
    //         pathname: 'PSA'
    //     },
    //     {
    //         text: 'Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson.',
    //         image: '#',
    //         pathname: 'Mdundo'
    //     },
    //     {
    //         text: 'Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson.',
    //         image: '#',
    //         pathname: 'Ads'
    //     },
    //     {
    //         text: 'Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson.',
    //         image: '#',
    //         pathname: 'LSE'
    //     }
    // ]

    


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
        <header className='bg-gray-400 video-background max-h-[1600px]'>
        {headerData.map((x,key) =>
        <div key={key}>
        {/* <video autoPlay muted loop>
            <source src={tikok_header} type='video/mp4' />
        </video> */}
        {x.pathname === id ? 
        <>
        <img src={x.image} className="w-full h-full projectImg" alt="" />
        <div className="grid lg:grid-cols-12 content px-20">
            <span className='col-span-9'>
                <p className='font-bold text-4xl tracking-wider pt-2 pb-8'>{id} - ({x.role})</p>
                <p>{x.text}</p>
            </span>
        </div>
        </>
        : ''}
        </div>
        )}
        </header>

        <section className='mt-40 mb-20 grid lg:grid-cols-2'>
            {bodyData.map((x,key) =>
            <div key={key} className='grid justify-items-center'>
                {x.pathname === id ? 
                <>
                <img src={x.image} data-aos={`${(key%3 === 1) ? 'fade-up-right' : 'fade-up'}`}  className={`rounded border-2 border-solid border-white w-72 h-60 neonPurple ${(key%3 === 1) ? 'lg:h-60 lg:mt-40 lg:w-80 neonPeach' : 'lg:h-96 lg:w-96'}`} />

                <p data-aos={`${(key%3 === 1) ? 'fade-up-right' : 'fade-up'}`} className={`py-12 px-12 md:px-36 text-center lg:text-left ${(key%3 === 1) ? 'lg:mb-20' : ''}`}>{id + ' ' + x.text}</p>
                </>
                : ''}
            </div>
            )}
        </section>
    </div>
  )
}

export default Passion