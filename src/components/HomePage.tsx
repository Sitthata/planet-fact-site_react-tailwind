import Mercury from "../assets/planet-mercury.svg";
import Earth from "../assets/planet-earth.svg";
import { useRef } from "react";
import AnimatePlanet from "./AnimatePlanet";
import Jupiter from "../assets/planet-uranus.svg";
import Fade from "../animations/Fade";
import { motion } from "framer-motion";

const HomePage = () => {
  const constraintsRef = useRef(null);
  const planetImages = [Mercury, Earth, Jupiter];

  return (
    <div
      ref={constraintsRef}
      className="relative items-center justify-around hidden min-h-screen overflow-hidden md:flex"
    >
      <motion.div
        initial={{ opacity: 0, y : 80, x: 0}}
        animate={{ opacity: 1, y : 0}}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
        className="absolute z-50 text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2"
       >
        <h1 className="text-[5.25rem] font-head">THE PLANET FACT</h1>
        <h2 className="uppercase text-[2rem] font-head">
          Try drag them around
        </h2>
      </motion.div>

      {planetImages.map((planet, index) => (
        <Fade duration={index / 2}>
          <AnimatePlanet
            planet={planet}
            index={index}
            constraintsRef={constraintsRef}
            key={index}
          />
        </Fade>
      ))}
    </div>
  );
};

export default HomePage;
