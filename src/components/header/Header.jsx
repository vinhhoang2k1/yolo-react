import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartArrowDown,
  faSearch,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./../../images/Logo-2.png";
function Header() {
  const [menu, setMenu] = useState(false);
  const handleToggleMenu = () => {
    setMenu((p) => !p);
  };
  const handleScroll = () => {
    if (window.scrollY > 1 && window.scrollY < 3) {
      setMenu(false);
      console.log("scroll");
    }
  };
  console.log(menu);
  if (menu === true) window.addEventListener("scroll", handleScroll);
  else window.removeEventListener("scroll", handleScroll);

  return (
    <div className={classes.header}>
      <div className={classes.iconMenu} onClick={handleToggleMenu}>
        {menu === false ? (
          <FontAwesomeIcon className={classes.icon} icon={faBars} />
        ) : (
          <FontAwesomeIcon className={classes.icon} icon={faTimes} />
        )}
      </div>
      <div
        className={
          menu === false
            ? classes.navLeft
            : ` ${classes.navLeft} ${classes.navLeft_active}`
        }
      >
        <NavLink axact={true} to="/" className={classes.navLeft_link}>
          trang chủ
        </NavLink>
        <NavLink to="/Products" className={classes.navLeft_link}>
          sản phẩm
        </NavLink>
        <NavLink to="/Detail" className={classes.navLeft_link}>
          phụ kiện
        </NavLink>
        <NavLink to="/" className={classes.navLeft_link}>
          liên hệ
        </NavLink>
      </div>
      <div className={classes.logo}>
        <img src={logo} alt="" className={classes.logo_img} />
      </div>
      <div className={classes.navRight}>
        <span>
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <span>
          <FontAwesomeIcon icon={faCartArrowDown} />
        </span>
        <span>
          <FontAwesomeIcon icon={faUser} />
        </span>
      </div>
    </div>
  );
}

export default Header;
