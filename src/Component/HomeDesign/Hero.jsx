import React from 'react'
import styles from '../../Styles/styles'
 import cakeBaner2 from '../../Assets/Images/cakeBaner3.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className={`relative min-h-[70vh] 800px:min-h-[90vh] w-full bg-no-repeat ${styles.normalFlex}`}
      style={{backgroundImage: `url(${cakeBaner2})`,backgroundSize: 'cover'}} >
        <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
          <h1 className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[gray] font-[600] capitalize`}>
          Cake is the language <br /> of love 
         </h1>
         <p className='pt-7 text-[16px] font-[poppins] font-[400] text-[#3d3a3a]'>
         Indulge in the sweet symphony of life with every decadent  slice of cake. Each crumb whispers tales of celebration, joy, and moments savored.
         Let your taste buds dance amidst layers of delight, for in this world, a cake isn't just a dessert; it's a masterpiece of happiness, 
         baked with love and topped with dreams. So take a fork, dive in, and let every bite be a celebration of the sweetness that life offers.
         </p>
         <Link  to="/products" className='inline-block'>
            <div className={`${styles.button} mt-7`}> 
              <span className='text-[#fff] font-[poppins] text-[18px]'>
                Shop Now
              </span>
            </div>
         </Link>
        </div>
    </div>
  )
}

export default Hero