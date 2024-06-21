import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../Styles/styles";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { ProductDetailsCard } from "../../ProductDetailsCard/ProductDetailsCard";

const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const d = data.CakeName;
  const productName = d.replace(/\s+/g, "_");
  //const imageUrl = data.image_Url;

  return (
    <>
      <div className="w-full h-[325px] bg-white rounded-lg shodow-sm p-3 relative cursor-pointer">
        <div className="flex justify-end"></div>
        <Link to={`/product/${productName}`}>
          <img src={data.image_Url} alt={d} className="h-[180px]" width={207} />
        </Link>
        <Link to={`/product/${productName}`}>
          <h2
            className={`${styles.shop_name} pb-3 pt-2 font-[500] flex justify-center items-center `}
          >
            {data.CakeName}
          </h2>
        </Link>
        <div className="flex">
          <StarRateIcon
            className="mr-2 cursor-pointer"
            sx={{ color: "#F6BA00" }}
          />
          <StarRateIcon
            className="mr-2 cursor-pointer"
            sx={{ color: "#F6BA00" }}
          />
          <StarRateIcon
            className="mr-2 cursor-pointer"
            sx={{ color: "#F6BA00" }}
          />
          <StarRateIcon
            className="mr-2 cursor-pointer"
            sx={{ color: "#F6BA00" }}
          />
          <StarBorderIcon
            className="mr-2 cursor-pointer"
            sx={{ color: "#F6BA00" }}
          />
        </div>

        <div className="mt-2 py-2 flex justify-between items-center">
          <div className="flex">
            <h5 className={`${styles.ProductDiscountPrise}`}>
              {data.prise === 0 ? data.prise : data.discountPrice}
              Rs
            </h5>
            <h4 className={`${styles.prise}`}>
              {data.prise ? data.prise + " RS" : null}
            </h4>
          </div>
          <span className="font-[400] text-[17px] text-[#68d284]">
            {data.total_Sell} Sold
          </span>
        </div>

        {/* Side options */}
        <div>
          {click ? (
            <FavoriteIcon
              className="cursor-pointer absolute right-2 top-5"
              sx={{ fontSize: 22, color: click ? "red" : "#333" }}
              onClick={() => setClick(!click)}
              titleAccess="Remove to   wishlist"
            />
          ) : (
            <FavoriteBorderIcon
              className="cursor-pointer absolute  right-2 top-5"
              sx={{ fontSize: 22, color: click ? "red" : "#333" }}
              onClick={() => setClick(!click)}
              titleAccess="Add to wishlist"
            />
          )}
          <RemoveRedEyeOutlinedIcon
            className="cursor-pointer absolute  right-2 top-14"
            sx={{ fontSize: 22, color: "#333" }}
            onClick={() => setOpen(!open)}
            titleAccess="Quick View"
          />
          <ShoppingCartOutlinedIcon
            className="cursor-pointer absolute  right-2 top-24"
            sx={{ fontSize: 25, color: "#444" }}
            onClick={() => setOpen(!open)}
            titleAccess="Add to cart"
          />
          {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
