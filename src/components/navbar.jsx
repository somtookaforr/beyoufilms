import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { IoClose, IoMenu } from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'

const Navbar = () => {
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("openNav").classList.add('hidden')
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("openNav").classList.remove('hidden')
  }

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const professional_projects = [
    "Tiktok", "BBC", "NCBN", "Trace", "PSA", "Mdundo", "Ads", "LSE"
  ]

  const passion_projects = [
    "Documentaries", "Podcast", "Travel", "Weddings", "Maternity"
  ]

  // console.log(professional_projects.join("\r\n"));
 

  return (
    <>
      <nav id='myNav' className={isSmallScreen ? 'overlay' : 'lg:flex'}>
          <div className="grid grid-cols-2 -mt-2 py-6 px-6">
              <NavLink
              to="/"
              > 
            <img src={''} alt="BYF" className='h-12' />              
            </NavLink>
            <IoClose onClick={closeNav} size={30} className={isSmallScreen ? 'ml-auto cursor-pointer self-center' : 'hidden'} />
          </div>
          <div className="overlay-content cursor-pointer">
            <div className="lg:float-right lg:flex lg:gap-x-10">
            <NavLink
              to="about"
              onClick={closeNav}
              > 
              About
            </NavLink>
            <NavLink
              to="expertise"
              onClick={closeNav}
              > 
              Expertise
              </NavLink>
              <NavLink
              onClick={closeNav}
              className='dropdown'
              > 
              <div className="flex justify-center mb-4">
                Professional Projects
                <IoIosArrowDown className='self-center mx-2' size={12}/>
              </div>
              <div className="dropdown-content rounded text-left w-full lg:min-w-[140px]">
                {professional_projects.map((x,key) => 
                <>
                <Link to={`professional_projects/${x}`} key={key} className="">{x}</Link>
                </>
                )}
              </div>
              </NavLink>
              <NavLink
              onClick={closeNav}
              className='dropdown'
              > 
              <div className="flex justify-center mb-4">
                Passion Projects
                <IoIosArrowDown className='self-center mx-2' size={12}/>
              </div>
              <div className="dropdown-content rounded text-left w-full lg:min-w-[140px]">
                {passion_projects.map((x,key) => 
                <>
                <Link to={`passion_projects/${x}`} key={key} className="">{x}</Link>
                </>
                )}
              </div>
              </NavLink>
              <NavLink
              to="courses"
              onClick={closeNav}
              > 
              Courses
              </NavLink>
              <NavLink
              to="contact"
              onClick={closeNav}
              > 
              Contact
              </NavLink>
              </div>
          </div>
      </nav>

      <nav className={isSmallScreen ? 'grid grid-cols-2 -mt-2 py-6 px-6' : 'hidden'}>
        <img src={''} alt="BYF" className='h-12' />
        <IoMenu onClick={openNav} size={30} className='ml-auto cursor-pointer self-center' id='openNav' />
      </nav>
    </>
  )
}

export default Navbar