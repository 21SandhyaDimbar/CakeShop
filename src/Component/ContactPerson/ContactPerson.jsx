import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CallIcon from '@mui/icons-material/Call';
import styles from "../../Styles/styles";

const ContactPerson = () => {
  return (
    <>
       <div className={`${styles.section}`}>
            <div className={`${styles.heading}`}>
                <h1> Contact Details</h1>
            </div>            
        </div>
    <div className={`${styles.section} bg-white py-8 px-5 mb-10 cursor-pointer rounded-xl`}>
      <div className="flex flex-wrap justify-around">
        <div className="flex items-center w-full sm:w-auto mb-6 sm:mb-0 px-4">
          <AccountCircleIcon sx={{ fontSize: "120px", objectFit: "contain", color:"#084c61", border:2, borderRadius:2 }} />
          <div className="ml-5">
            <h4 className="font-[600] text-[25px] text-[red]">
              Sagar Suryawanshi
            </h4>
            <p className="text-[18px] text-[#333]"><CallIcon sx={{fontSize:"35px", color:"#52b788"}}/> -7972595006</p>
          </div>
        </div>
        <div className="flex items-center w-full sm:w-auto mb-6 sm:mb-0 px-4">
          <AccountCircleIcon sx={{ fontSize: "120px", objectFit: "contain", color:"#F4BB44", border:2, borderRadius:2 }} />
          <div className="ml-5">
            <h4 className="font-[600] text-[25px] text-[red]">
             Kiran Suryawanshi
            </h4>
            <p className="text-[18px] text-[#333]"><CallIcon sx={{fontSize:"35px", color:"#52b788"}}/> -7972595006</p>
          </div>
        </div>
        {/* #2ec4b6*/}
        
        <div className="flex items-center w-full sm:w-auto mb-6 sm:mb-0 px-4">
          <AccountCircleIcon sx={{ fontSize: "120px", objectFit: "contain", color:"#2ec4b6", border:2, borderRadius:2 }} />
          <div className="ml-5">
            <h4 className="font-[600] text-[25px] text-[red]">
             Salim Shekh
            </h4>
            <p className="text-[18px] text-[#333]"><CallIcon sx={{fontSize:"35px", color:"#52b788"}}/> -7972595006</p>
          </div>
          </div>
      </div>
    </div>
    </>
  );
};

export default ContactPerson;
