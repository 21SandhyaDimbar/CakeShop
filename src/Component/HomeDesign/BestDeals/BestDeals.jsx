import React, { useEffect, useState } from "react";
import { productData } from "../../../Static/data";
import styles from "../../../Styles/styles";
import ProductCard from "./ProductCard";

const BestDeals = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const filteredData = productData.filter((product) => {
     // console.log(`Product: ${product.CakeName}, Price: ${product.prise}`);
      return product.prise > 450;
    });
   // console.log("Filtered data (price >= 400):", filteredData);
    const d = filteredData.sort((a, b) => a.prise - b.prise);
    const firstFive = d.slice(0, 5);
    setdata(firstFive);
  }, []);

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1> Best Deals </h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
            {
              data && data.map((i,index)=>(
                <ProductCard data={i} key={index} />
              ))
            }
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
