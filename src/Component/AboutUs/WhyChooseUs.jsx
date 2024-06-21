import React from 'react'
import styles from '../../Styles/styles'

import goodQuality from '../../Assets/Images/otherImg/Quality.png';
import Delivery from '../../Assets/Images/otherImg/CakeDelivery.jpg';
import HappyCustomers from "../../Assets/Images/otherImg/HappyCustomer.png";
import CreativeDesigns from '../../Assets/Images/otherImg/CreativeCake.jpg';
import BestPrice from '../../Assets/Images/otherImg/BestPrice.jpg';
const WhyChooseUs = () => {
  return (
    <>
      <div className={`${styles.section}`}>
            <div className={`${styles.heading}`}>
                <h1> Why Choose Us</h1>
            </div>    
        </div>
        <div className={`${styles.section} bg-white py-8 px-5 mb-10 cursor-pointer rounded-xl`}>
        <div className="flex flex-wrap justify-around">
          <div className="flex flex-col items-center w-full sm:w-auto mb-6 sm:mb-0 px-4">
            <img className="w-[100px]" src={goodQuality} alt="Good Quality" />
            <h4 className="mt-2 text-center text-[20px] text-[#008080]">Good Quality</h4>
          </div>
          <div className="flex flex-col items-center w-full sm:w-auto mb-6 sm:mb-0 px-4">
            <img className="w-[120px] mt-1" src={Delivery} alt="Good Quality" />
            <h4 className="mt-2 text-center text-[20px] text-[#008080]">Timely Delivery</h4>
          </div>
          
          <div className="flex flex-col items-center w-full sm:w-auto mb-6 sm:mb-0 px-4">
            <img className="w-[100px]" src={HappyCustomers} alt="Good Quality" />
            <h4 className="mt-2 text-center text-[20px] text-[#008080]">Happy Customers</h4>
          </div>
          <div className="flex flex-col items-center w-full sm:w-auto mb-6 sm:mb-0 px-4">
            <img className="w-[100px] " src={CreativeDesigns} alt="Good Quality" />
            <h4 className="mt-2 text-center text-[20px] text-[#008080]">Creative Designs</h4>
          </div>         
          <div className="flex flex-col items-center w-full sm:w-auto mb-6 sm:mb-0 px-4">
            <img className="w-[100px]" src={BestPrice} alt="Good Quality" />
            <h4 className="mt-2 text-center text-[20px] text-[#008080]">Best Price</h4>
          </div>
        </div>
      </div> 
    </>
  )
}

export default WhyChooseUs