import { useState } from "react";
import classes from "../styles/navbar.module.scss";
import Link from "next/link";
import { CgMenuRightAlt } from "react-icons/cg";
import { menuData } from "../Data/MenuData";
import Button from "./Button";
const Navbar = ({ toggle }) => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <nav
      className={`${classes.navbar} ${
        colorChange ? classes.color_change : null
      }`}
    >
      <Link href="/">
        <p className={classes.nav_header}>Real Brokers</p>
      </Link>
      <CgMenuRightAlt className={classes.menubars} onClick={toggle} />
      <div className={classes.nav_menu}>
        {menuData.map((item, index) => {
          return (
            <Link key={index} href={item.link}>
              <span className={classes.nav_link}>{item.title}</span>
            </Link>
          );
        })}
      </div>
      <div className={classes.nav_btn}>
        <Button path="/">Contact Us</Button>
      </div>
    </nav>
  );
};

export default Navbar;
