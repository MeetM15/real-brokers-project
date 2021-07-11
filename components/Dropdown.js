import { FaTimes } from "react-icons/fa";
import { menuData } from "../Data/MenuData";
import Button from "../components/Button";
import classes from "../styles/dropdown.module.scss";
import Link from "next/link";
const Dropdown = ({ toggle }) => {
  return (
    <div className={classes.dropdown_container}>
      <div className={classes.icon} onClick={toggle}>
        <FaTimes className={classes.close_icon} />
      </div>
      <div className={classes.dropdown_wrapper}>
        <div className={classes.dropdown_menu}>
          {menuData.map((item, index) => {
            return (
              <Link key={index} href={item.link}>
                <div className={classes.menu_link}>{item.title}</div>
              </Link>
            );
          })}
        </div>
        <div className={classes.btn_wrapper}>
          <Button primary={false} big={true} path="/">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
