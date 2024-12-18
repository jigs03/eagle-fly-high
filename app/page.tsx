"use client";

import LayeredSteps from "@/public/layered-steps-haikei.svg";
import MainBg from "@/public/photo_2023-09-25_20-24-22.jpg";
import MainBg2 from "@/public/photo_2023-09-25_20-27-09.jpg";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import About from "./sections/AboutScreen";
import Academic from "./sections/AcademicScreen";
import Activities from "./sections/ActivitiesScreen";
import Creed from "./sections/CreedScreen";
import Footer from "./sections/Footer";
import Gallery from "./sections/GalleryScreen";
import HallofFame from "./sections/HallofFame";
import History from "./sections/HistoryScreen";
import HomeScreen from "./sections/HomeScreen";
import Song from "./sections/SongScreen";
import Values from "./sections/ValuesScreen";
// import Academic from "./sections/AcademicScreen";

export default function Home() {
  const [blur, handleBlur] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        handleBlur(true);
      } else handleBlur(false);
    });
  }, []);

  const scrollY = useMotionValue(0);
  const parallaxOffset = 0.4;
  return (
    <main className="max-w-screen">
      <div style={{ zIndex: -100, position: "fixed" }}>
        <div className="w-screen h-screen bg-black"></div>
        <Image
          src={blur ? MainBg2 : MainBg}
          alt=""
          fill
          style={{ objectFit: "cover", opacity: 0.2 }}
        />
      </div>
      <motion.div style={{ translateY: scrollY }}>
        <HomeScreen />
      </motion.div>
      <motion.div
        style={{
          translateZ: scrollY,
          translateY: -scrollY.get() * parallaxOffset,
        }}
        animate={{ z: 20 }}
      >
        {/* <div className="w-full py-32 h-[100px] bg-gradient-to-b from-transparent via-background/20 to-orange-700 pt-20"></div> */}

        <Image src={LayeredSteps} alt="" className="w-screen" />

        <About />
        <History />
        <Values />
        <Creed />
        <Song />
        <Gallery />
        <Activities />
        <Academic />
        <HallofFame/>

        <Footer />
      </motion.div>
    </main>
  );
}
