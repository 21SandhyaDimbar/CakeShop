import React from "react";
import styles from "../../../Styles/styles";
import { navItem } from "../../../Static/data";
import { Link } from "react-router-dom";

const NavBar = ({ active }) => {
  return (
    <div className={`${styles.normalFlex}`}>
      {navItem && navItem.length > 0 ? (
        navItem.map((i, index) => (
          <div key={index} className="flex">
            <Link
              to={i.url}
              className={`${
                active === index + 1 ? "text-[#17dd1f]" : "text-[#fff]"
              } font-[500] px-6 cursor-pointer`}
            >
              {i.title}
            </Link>
          </div>
        ))
      ) : (
        <div>No navigation items available</div>
      )}
    </div>
  );
};

export default NavBar;
