import React from 'react'
import BlackForest from '../../Assets/Images/product-img/BlackForestCake.jpg';
import styles from '../../Styles/styles';
import CountDown from './CountDown';

const EventCard = () => {
  return (
    <div className={`w-full block bg-white rounded-lg lg:flex p-2 mb-12`}>
      <div className='w-full lg:w-[50%] m-auto'>
        <img src={BlackForest} alt="" />
      </div>
      <div className='w-full lg:w-[50%] flex flex-col justify-center ml-3'>
          <h2 className={`${styles.productTitle}`}>Balck Forest Cake</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Deleniti cupiditate fuga natus quaerat reiciendis, deserunt dignissimos libero, placeat iste 
            cumque ipsum? Dignissimos deleniti, qui consequatur asperiores rem nulla non architecto.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Deleniti cupiditate fuga natus quaerat reiciendis, deserunt dignissimos libero, placeat iste 
            cumque ipsum? Dignissimos deleniti, qui consequatur asperiores rem nulla non architecto.
            </p>
            <div className='flex py-2 justify-between'>
                <div className="flex">
                    <h5 className='font-[500] text-[18px] text-[#d55b45] pr-3 line-through'>550 RS</h5>
                    <h5 className='font-bold text-[20px] text-[#333] font-Roboto'> 440 RS</h5>
                </div>
                <span className='font-[400] pr-3 text-[17px] text-[#44a55e]'>
                     120 sold
                </span>
            </div>
            <CountDown />
      </div>
    </div>
  )
}

export default EventCard;