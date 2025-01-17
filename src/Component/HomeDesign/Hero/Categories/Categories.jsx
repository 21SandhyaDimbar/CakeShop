import React from 'react'
import styles from '../../../../Styles/styles'
import { CategoryData, brandingData } from '../../../../Static/data'
import {useNavigate} from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className={`${styles.section} hidden sm:block`}>
        <div className={`branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md`}>
          {brandingData && brandingData.map((i,index) =>(
            <div className="flex items-start" key={index}>
                {i.icon}
                <div className="px-3">
                    <h3 className="font-bold text-sm md:text-base">{i.title}</h3>
                    <p className='text-x5 md:text-sm'> {i.Description}</p>
                </div>
            </div>
          ))}
        </div>
    </div>
    
    <div className={`${styles.section} bg-white p-5 rounded-lg mb-12`} id='categories'> 
         <div className='grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]'>
             {
              CategoryData && CategoryData.map((i)=>{
                const handleSubmit =(i) =>{
                  navigate(`/products?category=${i.title}`);
                };
                return(
                  <div className='w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden'
                     key={i.id}
                     onClick={() => handleSubmit(i)}
                  > 
                  <h4 className='text-[18px] leading-1.3'>{i.title}</h4>
                  <img src={i.image} 
                  className='w-[120px] object-cover' 
                  alt="no data" />
                  </div>
                )
              })
             }
         </div>
    </div>
    </>
  )
}

export default Categories