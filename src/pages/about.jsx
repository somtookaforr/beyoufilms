import React from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {FaFacebook, FaTwitter} from 'react-icons/fa'
import {FaTiktok} from 'react-icons/fa6'


const About = () => {
  return (
    <div className='pageBody mb-20'>
        <div className="grid lg:grid-cols-2">
            <div className="my-24 lg:my-0 justify-self-center lg:justify-self-start">
                <div className='border-4 rounded-sm border-white max-h-full w-72 neonWhite'>
                    <div className='bg-gray-400 w-60 md:w-80 h-96 neonPurple ml-8 my-5'></div>
                </div>
            </div>
            <div className="">
                <div className='bg-[#E92EFB] w-40 h-1 rounded-sm'></div>
                <p className='font-bold text-4xl tracking-wider pt-2 pb-8'>Barbra Okafor</p>
                <p>At the intersection of creativity and strategy lies my expertise as a contentprofessional with a passion for telling stories that matter. <br /><br />
                With over 6 years of experience in the media and communications industry, I'vehoned my skills as a content operations specialist, editorial programmingmanager, partnership lead, and senior producer. <br /><br />
                Whether I'm managing projects, teams, or producing captivating content fromconception to delivery, I bring my A-game every time.
                I love using my creativity, data-driven insights and analytical skills to developand execute winning content strategies. I have a knack for balancing big-picture thinking with hands-on project management, and I excel at leadingcross-functional, multi-jurisdictional teams to success. <br /><br />
                I'm eager to bring my skills and experience to a new challenge and continuegrowing in the exciting world of content. </p>

                <div className="pt-12">
                    <div className='flex justify-between sm:w-1/2'>
                        <AiFillInstagram className='self-center' size={34} />
                        <FaFacebook className='self-center' size={28} />
                        <FaTiktok className='self-center' size={28} />
                        <FaTwitter className='self-center' size={30} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About