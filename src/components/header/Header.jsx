import React, { useState } from "react";
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
  console.log(menu);
  return (
    <div className={classes.header}>
      <div className={classes.iconMenu} onClick={handleToggleMenu}>
        {menu == false ? (
          <FontAwesomeIcon className={classes.icon} icon={faBars} />
        ) : (
          <FontAwesomeIcon className={classes.icon} icon={faTimes} />
        )}
      </div>
      <div
        className={
          menu == false
            ? classes.navLeft
            : `${classes.navLeft} ${classes.navLeft_active}`
        }
      >
        <a href="" className={classes.navLeft_link}>
          trang chủ
        </a>
        <a href="" className={classes.navLeft_link}>
          sản phẩm
        </a>
        <a href="" className={classes.navLeft_link}>
          phụ kiện
        </a>
        <a href="" className={classes.navLeft_link}>
          liên hệ
        </a>
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
