import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Keyboard,FreeMode,Autoplay } from 'swiper/modules';
import images from '../assets/ncbn/ncbn4.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Carousel () {
    const data = [
        {
            title: "Tik Tok",
            img: images,
            text: "Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Alice Blomqvist töhet. Madade Ulla Svensson."
        },
        {
            title: "Instagram",
            img: images,
            text: "Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Alice Blomqvist töhet. Madade Ulla Svensson."
        },
        {
            title: "Adventures",
            img: images,
            text: "Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Alice Blomqvist töhet. Madade Ulla Svensson."
        },
        {
            title: "NCBN",
            img: images,
            text: "Lörem ipsum noling byber, Alice Blomqvist töhet. Madade Ulla Svensson. Alice Blomqvist töhet. Madade Ulla Svensson."
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
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        loop={true}
        keyboard={{
            enabled: true,
          }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
            1024: {
              slidesPerView: 1.7,
              spaceBetween: 200,
            },
        }}
        modules={[Keyboard, FreeMode, Autoplay]}
        className="mySwiper"
      >
        {data.map((x,key) =>
        <SwiperSlide key={key}>
            <p className='py-6 font-bold text-2xl' data-aos="fade-left">{x.title}</p>
            <div className="md:flex" data-aos="fade-left">
                <img src={x.img} alt="" className='rounded-lg w-full md:w-7/12 h-[28rem]' />
                <p className='self-end pt-6 lg:pt-0 md:px-6'>{x.text}</p>
            </div>
        </SwiperSlide>
        )}
      </Swiper>
    </>
  );
}
