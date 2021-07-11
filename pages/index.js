import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { Slider } from "../Data/Slider";
import Dropdown from "../components/Dropdown";
import InfoSection from "../components/InfoSection";
import { InfoDataOne } from "../Data/InfoData";
import { InfoDataTwo } from "../Data/InfoData";
import Footer from "../components/Footer";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar toggle={toggle} colorChange={colorChange} />
      {isOpen && <Dropdown isOpen={isOpen} toggle={toggle} />}
      <Hero slides={Slider} />
      <InfoSection data={InfoDataOne} />
      <InfoSection data={InfoDataTwo} />
      <Footer />
    </>
  );
}
