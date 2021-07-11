import Image from "next/image";
import classes from "../styles/infosection.module.scss";
import Button from "./Button";
const InfoSection = ({ data }) => {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div
          className={`${classes.columnleft} ${
            data.reverse ? classes.switch_order_left : null
          }`}
        >
          <h1>{data.heading}</h1>
          <p>{data.paraOne}</p>
          <p>{data.paraTwo}</p>
          <Button path="/">{data.label}</Button>
        </div>
        <div
          className={`${classes.columnright} ${
            data.reverse ? classes.switch_order_right : null
          }`}
        >
          <img src={data.img} layout="fill" alt={data.heading} />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
