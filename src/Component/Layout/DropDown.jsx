import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CategoryData } from '../../Static/data';
import styles from '../../Styles/styles';

const DropDown = ({categoriesData, setDropDown}) => {
    const navigate = useNavigate();
    const submitHandle =(i) =>{
        navigate(`/products?category=${i.title}`);
        setDropDown(false);
        window.location.reload();   
    }
  return (
    <div className='pb-4 w-[270px] bg-[#fff] absolute z-30 rounded-b-md shadow-sm'>
      {
        CategoryData && CategoryData.map((i,index) =>(
            <div key={index} className={`${styles.normalFlex}`}
             onClick={() => submitHandle(i)}
            >
             <h3 className='m-3 cursor-pointer select-none'> {i.title}</h3>
            </div>
        ))
      }
    </div>
  )     
}

export default DropDown