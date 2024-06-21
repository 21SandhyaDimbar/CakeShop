import React, { useState, useEffect } from "react";
import styles from "../../Styles/styles";
import { Typography } from "@mui/material";

import CakeIcon from "@mui/icons-material/Cake";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SortIcon from "@mui/icons-material/Sort";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import { Link } from "react-router-dom";
import { CategoryData, productData } from "../../Static/data";
import DropDown from "./DropDown";
import NavBar from "./NavBar/NavBar";

const Header = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filterProducts =
      productData &&
      productData.filter((product) =>
        product.CakeName.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filterProducts);
  };

  // window.addEventListener("scroll", () => {
  //   if (window.scrollY > 70) {
  //     setActive(true);
  //   } else {
  //     setActive(false);
  //   }
  // });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    // <>
    //   <div className={`${styles.section}`}>
    //     <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
    //       <div>
    //         <Link to={"/"}>
    //           <Typography variant="h5" sx={{ color: "hotpink" }}>
    //             Sagar <CakeIcon sx={{ color: "blue" }} /> Studio
    //           </Typography>
    //         </Link>
    //       </div>
    //       {/* Secrch Box */}
    //       <div className="w-[50%] relative">
    //         <input
    //           type="text"
    //           placeholder="Search Cake Varieties....."
    //           value={searchTerm}
    //           onChange={handleSearchChange}
    //           className="h-[40px] w-full border-[#3957db] border-[2px] rounded-md p-2"
    //         />
    //         <SearchOutlinedIcon className="absolute right-2 top-1.5 cursor-pointer" />
    //         {serchData && serchData.length !== 0 ? (
    //           <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
    //             {serchData &&
    //               serchData.map((i, index) => {
    //                 const d = i.CakeName;
    //                 const productName = d.replace(/\s+/g, "_");
    //                 return (
    //                   <Link to={`/products/${productName}`}>
    //                     <div className="w-full flex item-start-py-3">
    //                       <h3>{i.CakeName}</h3>
    //                     </div>
    //                   </Link>
    //                 );
    //               })}
    //           </div>
    //         ) : null}
    //       </div>
    //       <div className={`${styles.button}`}>
    //         <Link to="/owner">
    //           <Typography className="text-[#fff] flex items-center">
    //             Become Owner <ArrowForwardIosIcon />
    //           </Typography>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    //   {/* Navbar */}
    //   <div
    //     className={`${
    //       active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
    //     } transition hidden 800px:flex
    //  items-center justify-between w-full bg-[#3321c8] h-[70px]`}
    //   >
    //     <div
    //       className={`${styles.section} relative ${styles.normalFlex} justify-between`}
    //     >
    //       {/* Categories */}
    //       <div onClick={()=> setDropDown(!dropDown)}>
    //         <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
    //           <SortIcon fontSize="large" className="absolute top-3 left-2" />
    //           <button
    //             className="h-[100%] w-full flex justify-between items-center pl-12 bg-white font-sans text-lg
    //               font-[500] select-none rounded-t-md"
    //           >
    //             {" "}
    //             All Categories
    //           </button>
    //           <KeyboardArrowDownIcon
    //             fontSize="large"
    //             className="absolute right-2 top-4 cursor-pointer"
    //             onClick={() => setDropDown(!dropDown)}
    //           />
    //           {dropDown ? (
    //             <DropDown
    //               categoriesData={CategoryData}
    //               setDropDown={setDropDown}
    //             />
    //           ) : null}
    //         </div>
    //       </div>
    //       {/* nav items */}
    //       <div className={`${styles.normalFlex}`}>
    //         <NavBar active={activeHeading} />
    //       </div>
    //       <div className="flex">
    //         <div className={`${styles.normalFlex}`}>
    //           <div className="relative cursor-pointer mr-[15px]">
    //             <FavoriteBorderOutlinedIcon
    //               sx={{ fontSize: "30px", color: "rgb(255 255 255)" }}
    //             />
    //             <span
    //               className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0
    //             text-white font-mono text-[12px] leading-tight text-center"
    //             >
    //               0
    //             </span>
    //           </div>
    //         </div>

    //         <div className={`${styles.normalFlex}`}>
    //           <div className="relative cursor-pointer mr-[15px]">
    //             <ShoppingCartOutlinedIcon
    //               sx={{ fontSize: "30px", color: "rgb(255 255 255)" }}
    //             />
    //             <span
    //               className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0
    //             text-white font-mono text-[12px] leading-tight text-center"
    //             >
    //               1
    //             </span>
    //           </div>
    //         </div>

    //         <div className={`${styles.normalFlex}`}>
    //           <div className="relative cursor-pointer mr-[15px]">
    //             <Link to="/login">
    //               <AccountCircleOutlinedIcon
    //                 sx={{ fontSize: "30px", color: "rgb(255 255 255)" }}
    //               />
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>

    <>
      <div className={`${styles.section}`}>
        <div className="flex flex-col items-center justify-between 800px:flex-row 800px:h-[50px] 800px:my-[20px]">
          <div className="mb-4 800px:mb-0">
            <Link to={"/"}>
              <Typography variant="h5" sx={{color:'skyblue'  }}>
                Sagar <CakeIcon sx={{ color: "coral" }} /> Studio
              </Typography>
            </Link>
          </div>
          <div className="w-full relative mb-4 800px:mb-0 800px:w-[50%]">
            <input
              type="text"
              placeholder="Search Cake Varieties....."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full border-[#3957db] border-[2px] rounded-md p-2"
            />
            <SearchOutlinedIcon className="absolute right-2 top-1.5 cursor-pointer" />
            {searchData && searchData.length !== 0 && (
              <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                {searchData.map((i, index) => {
                  const d = i.CakeName;
                  const productName = d.replace(/\s+/g, "_");
                  return (
                    <Link key={index} to={`/products/${productName}`}>
                      <div className="w-full flex item-start-py-3">
                        <h3>{i.CakeName}</h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          <div className={`${styles.button}`}>
            <Link to="/owner">
              <Typography className="text-[#fff] flex items-center">
                Become Owner <ArrowForwardIosIcon />
              </Typography>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active ? "shadow-sm fixed top-0 left-0 z-10" : ""
        } transition flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.normalFlex} justify-between`}
        >
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
              <SortIcon fontSize="large" className="absolute top-3 left-2" />
              <button
                className="h-[100%] w-full flex justify-between items-center pl-12 bg-white font-sans text-lg
                  font-[500] select-none rounded-t-md"
              >
                All Categories
              </button>
              <KeyboardArrowDownIcon
                fontSize="large"
                className="absolute right-2 top-4 cursor-pointer"
                onClick={() => setDropDown(!dropDown)}
              />
              {dropDown && (
                <DropDown
                  categoriesData={CategoryData}
                  setDropDown={setDropDown}
                />
              )}
            </div>
          </div>
          <div className={`${styles.normalFlex}`}>
            <NavBar active={activeHeading} />
          </div>
          <div className="flex">
            <div className={`${styles.normalFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                <FavoriteBorderOutlinedIcon
                  sx={{ fontSize: "30px", color: "rgb(255 255 255)" }}
                />
                <span
                  className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0
                text-white font-mono text-[12px] leading-tight text-center"
                >
                  0
                </span>
              </div>
            </div>
            <div className={`${styles.normalFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                <ShoppingCartOutlinedIcon
                  sx={{ fontSize: "30px", color: "rgb(255 255 255)" }}
                />
                <span
                  className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0
                text-white font-mono text-[12px] leading-tight text-center"
                >
                  1
                </span>
              </div>
            </div>
            <div className={`${styles.normalFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                <Link to="/login">
                  <AccountCircleOutlinedIcon
                    sx={{ fontSize: "30px", color: "rgb(255 255 255)" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
