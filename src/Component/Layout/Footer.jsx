import React from 'react'
import cakeIcon2 from '../../Assets/Images/otherImg/cakeIcon2.webp'
import { FooterProductLink, OurServices } from '../../Static/data';
import { Link } from 'react-router-dom';

// social media Icon
import Facebook from '../../Assets/Images/socialMedia Icon/facebook.webp';
import WhatsApp from '../../Assets/Images/socialMedia Icon/whatsapp.webp';
import Instagram from '../../Assets/Images/socialMedia Icon/Instragram.png';
import YouTube from '../../Assets/Images/socialMedia Icon/Youtube.png';

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CircleIcon from '@mui/icons-material/Circle';

const Footer = () => {
  return (
    <div className='bg-[#000] text-white'>
        <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#342ac8] py-7'>
            <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
              <span className='text-[#56d879]'>
                Subscribe
                </span> us for get new <br />
                Cakes and Offers
            </h1>
            <div>
                <input type="text" required placeholder=' Enter Your Email...' 
                className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded focus:outline-none'
                />
                <button className='bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full'>
                    Submit
                </button>
            </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center'>
            <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
                 <span className='flex gap-3 text-[40px] text-[#FCCB06]'>
                    Sagar<img  className="w-[60px] h-13  mt-2" src={cakeIcon2} alt="icon" /> 
                    Shop</span> 
                    <br />
                    <p>Celebrate Life's Sweetest Moments with Our Exquisite Cakes.</p> 
                    <div className="flex items-center mt-[15px]">
                        <img className='w-[50px] cursor-pointer' src={Facebook} alt="" />
                        <img className='w-[40px] ml-4 cursor-pointer' src={WhatsApp} alt="" />
                        <img className='w-[30px] ml-5 cursor-pointer' src={Instagram} alt="" />
                        <img className='w-[40px] ml-5 cursor-pointer' src={YouTube} alt="" />
                    </div>
            </ul>

            <ul className="text-center sm:text-start">
                <h1 className='text-[20px] mb-1 font-semibold'> Quick Links</h1>
                {FooterProductLink.map((link) => (
                    <li key={link.name}>
                        <Link to={link.link}
                         className='text-gray-400 hover:text-teal-400 duration-300 text-md cursor-pointer leading-6'
                        >
                          <CircleIcon sx={{fontSize:10, mr:1, color:'gold'}} /> {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className="text-center sm:text-start">
                <h1 className='text-[20px] mb-1 font-semibold'>Our  Services</h1>
                {OurServices.map((link) => (
                    <li key={link.title}>
                        <Link to={link.title}
                         className='text-gray-400 hover:text-teal-400 duration-300 text-md cursor-pointer leading-6'
                        ><CircleIcon sx={{fontSize:10, mr:1, color:'gold'}} />
                         {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className="text-center sm:text-start">
                <h1 className='text-[20px] mb-1 font-semibold'> Get In Touch</h1>
               <li className='text-md mt-2 mb-2 text-gray-400 hover:text-teal-400 duration-300 cursor-pointer leading-6'>
                <LocationOnOutlinedIcon sx={{color:'gold', fontSize:35}}/> 123 Street, Nigdi Pune.
              </li>
              <li className='text-md mb-2 text-gray-400 hover:text-teal-400 duration-300 cursor-pointer leading-6'>
                <CallOutlinedIcon sx={{color:'gold', fontSize:35}}/> 123 Street, Nigdi Pune.
              </li>
              <li className='text-md text-gray-400 hover:text-teal-400 duration-300 cursor-pointer leading-6'>
                <WhatsAppIcon sx={{color:'gold', fontSize:35}}/> 123 Street, Nigdi Pune.
              </li>
              
            </ul>
        </div>
    </div>

  )
}

export default Footer