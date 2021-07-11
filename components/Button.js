import Link from "next/link";
import classes from "../styles/button.module.scss";

const Button = ({ primary, children, big, path }) => {
  return (
    <Link href={path}>
      <p
        className={`${classes.nav_link} 
        ${primary ? classes.bgcolor1 : classes.bgcolor2} 
        ${big ? classes.big : classes.small}`}
      >
        {children}
      </p>
    </Link>
  );
};

export default Button;
