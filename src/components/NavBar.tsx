import { Disclosure } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

interface NavBarProps {
  onPlanetClick: (id: number) => void;
}


const NavBar = ({ onPlanetClick }: NavBarProps) => {
  
  const planets = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
  ];

  const colors = [
    "#DEF4FC",
    "#F7CC7F",
    "#545BFE",
    "#FF6A45",
    "#ECAD7A",
    "#FCCB6B",
    "#65F0D5",
    "#497EFA",
  ];

  return (
    <Disclosure as="nav" className="sticky top-0 z-[999] bg-main-bg">
      {({ open }) => (
        <>
          <div className="flex justify-between text-white px-[2rem] py-[1.2rem] border-b-[1px] border-grey-100 md:flex-col md:justify-center md:text-center md:gap-8 lg:flex-row lg:justify-between">
            <div className="upper">
              <h1 className="font-bold text-[28px] font-head">THE PLANETS</h1>
            </div>

            <div className="flex items-center md:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-inset">
                {open ? (
                  <AiOutlineClose
                    className="block w-6 h-6"
                    aria-hidden="true"
                  />
                ) : (
                  <GiHamburgerMenu
                    className="block w-6 h-6"
                    aria-hidden="true"
                  />
                )}
              </Disclosure.Button>
            </div>

            <div className="hidden my-auto md:block">
              <ul className="flex items-center gap-8 upper md:justify-center">
                {planets.map((planet, index) => (
                  <button onClick={() => onPlanetClick(index)}>
                    <li
                      key={index}
                      className="text-sm font-semibold cursor-pointer"
                    >
                      {planet.toUpperCase()}
                    </li>
                  </button>
                ))}
              </ul>
            </div>
          </div>

          <Disclosure.Panel
            as={motion.div}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 w-full md:hidden top-20 bg-main-bg"
          >
            <div className="px-2 pt-2 pb-3 mt-5 space-y-1 sm:px-3 ">
              {planets.map((planet, index) => (
                <button
                  key={index}
                  className="text-white w-full block px-3 py-4 font-body border-b-[1px] border-grey-100 text-base font-medium text-center"
                  onClick={() => onPlanetClick(index)}
                >
                  <div className="flex items-center justify-between px-4 py-2">
                    <div className="flex gap-6 item-center">
                      <div
                        style={{ backgroundColor: colors[index] }}
                        className={`w-5 h-5 rounded-full my-auto`}
                      ></div>
                      <motion.h3
                        className="text-2xl font-bold"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        {planet.toUpperCase()}
                      </motion.h3>
                    </div>
                    <IoIosArrowForward />
                  </div>
                </button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
