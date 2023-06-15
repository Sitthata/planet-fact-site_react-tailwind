import { motion } from "framer-motion";
import { useState } from "react";

interface AnimatePlanetProps {
  planet: string;
  index: number;
  constraintsRef: React.RefObject<HTMLDivElement>;
}

const AnimatePlanet = ({
  planet,
  constraintsRef,
}: AnimatePlanetProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const randomY = Math.floor(Math.random() * 200);

  return (
    <motion.img
      src={planet}
      alt="planet"
      initial={{ x: 0 , y: randomY, scale: 0.8 }}
      drag
      animate={isHovered ? { rotate: 1080 } : {}}
      transition={
        isHovered ? { duration: 10, ease: "linear", repeat: Infinity } : {}
      }
      onHoverStart={handleMouseEnter}
      onHoverEnd={handleMouseLeave}
      dragConstraints={constraintsRef}
      className="cursor-pointer "
    />
  );
};

export default AnimatePlanet;
