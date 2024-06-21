import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import styles from "../../Styles/styles";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const ProductDetailsCard = ({ setOpen, data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  // const [select, setSelete] = useState(false);

  //const handleSendMessage=() =>{}

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="bg-[#fff]">
      {data ? (
        <div className="fixed w-full h-screen left-0 top-0 bg-[#00000030] z-40 flex items-center justify-center">
          <div className="w-[70%] 800px:w-[40%] h-[70vh] overflow-scroll 800px:h-[60vh] bg-white rounded-md shadow-sm p-4 relative">
            <CloseIcon
              fontSize="large"
              className="absolute right-3 top-3 z-50"
              onClick={() => setOpen(false)}
            />
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[45%]">
                <img className="h-[245px]" src={data.image_Url} alt="" />
                <div className="flex">
                  <div>
                    <h3 className="pb-3 text-[20px] text-gray-600 mt-2">
                      ({data.rating}) Rating
                    </h3>
                  </div>
                </div>
                <div
                  className={`${styles.button} bg-[#000] rounded h-11 flex items-center`}
                >
                  <span className="text-[#fff] flex items-center">
                    Send Message <SendIcon className="ml-2" />
                  </span>
                </div>
                <h5 className="text-[16px] text-[red] mt-5">
                  {data.total_Sell} Sold Out
                </h5>
              </div>

              <div className="w-full 800px:w-[50%] pl-5 pr-4 pt-5">
                <h1 className={`${styles.productTitle} text-[20px]`}>
                  {data.CakeName}{" "}
                </h1>
                <p>{data.description}</p>
                <div className="flex pt-3">
                  <h4 className={`${styles.ProductDiscountPrise}`}>
                    {data.discountPrice} RS
                  </h4>
                  <h3 className={`${styles.prise}`}>
                    {data.prise ? data.prise + "RS" : null}
                  </h3>
                </div>

                <div className="flex items-center mt-12 justify-between pr-3">
                  <div>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out "
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span className="bg-gray-200 text-gray-800 px-4 py-[11px]">
                      {count}
                    </span>
                    <button
                      className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-r px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out "
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {click ? (
                      <FavoriteIcon
                        className="cursor-pointer"
                        sx={{ fontSize: 30, color: click ? "red" : "#333" }}
                        onClick={() => setClick(!click)}
                        titleAccess="Remove to   wishlist"
                      />
                    ) : (
                      <FavoriteBorderIcon
                        className="cursor-pointer"
                        sx={{ fontSize: 30, color: click ? "red" : "#333" }}
                        onClick={() => setClick(!click)}
                        titleAccess="Add to wishlist"
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`${styles.button} mt-6 rounded h-11 flex items-center`}
                >
                  <span className="text-[#fff] flex items-center">
                    Add to Cart
                    <ShoppingCartIcon className="ml-2" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
