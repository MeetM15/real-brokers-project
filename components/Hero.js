import { useRef, useState, useEffect } from "react";
import classes from "../styles/hero.module.scss";
import Button from "../components/Button";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
const Hero = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  const prevSlide = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
    // console.log(currentSlide);
  };
  const nextSlide = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
    // console.log(currentSlide);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  // useEffect(() => {
  //   timeout.current = setTimeout(nextSlide, 3000);
  //   return () => {
  //     if (timeout.current) clearTimeout(timeout.current);
  //   };
  // }, [currentSlide, length]);

  return (
    <section className={classes.hero}>
      {slides.map((slide, index) => {
        return (
          <div key={index} className={classes.hero_slide}>
            {index === currentSlide && (
              <section className={classes.hero_slider}>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={classes.hero_image}
                />
                <div className={classes.hero_content}>
                  <h1>{slide.title}</h1>
                  <p>{slide.price}</p>
                  <Button path="/" primary={true}>
                    {slide.label}
                    <IoMdArrowRoundForward style={{ marginLeft: "0.5rem" }} />
                  </Button>
                </div>
              </section>
            )}
          </div>
        );
      })}
      <section className={classes.arrow_btn_wrapper}>
        <IoArrowBack className={classes.arrow_btn} onClick={prevSlide} />
        <IoArrowForward className={classes.arrow_btn} onClick={nextSlide} />
      </section>
    </section>
  );
};

export default Hero;
