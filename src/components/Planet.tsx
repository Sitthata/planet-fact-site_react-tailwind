import { BsArrowUpRightSquare } from "react-icons/bs";
import Description from "./Description";
import { useState, useEffect } from "react";
import RawData from "../data/PlanetData.json";

interface Planet {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
}

interface PlanetProps {
  currentId: number;
}

const Planet = ({ currentId }: PlanetProps) => {
  const currentInfo = RawData;
  const [currentPlanet, setCurrentPlanet] = useState<Planet>(
    currentInfo[currentId]
  );

  const [currentImage, setCurrentImage] = useState(currentPlanet.images.planet);

  const handleClick = (button: string) => {
    switch (button) {
      case "Overview":
        setCurrentImage(currentPlanet.images.planet);

        break;
      case "Internal Structure":
        setCurrentImage(currentPlanet.images.internal);

        break;
      case "Surface Geology":
        setCurrentImage(currentPlanet.images.geology);

        break;
      default:
        setCurrentImage(currentPlanet.images.planet);
    }
  };

  const buttonInfo = ["Overview", "Internal Structure", "Surface Geology"];

  useEffect(() => {
    setCurrentPlanet(currentInfo[currentId]);
  }),
    [currentId];

  useEffect(() => {
    setCurrentImage(currentInfo[currentId].images.planet);
  }, [currentPlanet]);

  return (
    <div className="flex flex-col max-w-[80rem] mb-5 justify-center mx-auto mt-9 p-9">
      <div className="gap-8 sm:flex">
        <img
          src={currentImage}
          alt=""
          className="object-contain object-center mx-auto mb-10"
        />

        <div className="flex">
          <div className="flex flex-col gap-8 text-center sm:text-left sm:flex-start text-white sm:max-w-[350px]">
            <h1 className="text-4xl sm:text-[4rem] font-bold text-white uppercase font-head">
              {currentPlanet.name.toUpperCase()}
            </h1>
            <p>{currentPlanet.overview.content}</p>

            <p className="mt-4 font-light text-grey-200">
              Source :{" "}
              <a href={currentPlanet.overview.source}>
                <span className="font-bold underline">
                  Wikipedia
                  <BsArrowUpRightSquare className="inline-block my-auto ml-2 align-middle" />
                </span>
              </a>
            </p>

            <div className="flex flex-col gap-3">
              {buttonInfo.map((button, index) => (
                <button
                  key={index}
                  className="px-2 py-3 transition duration-300 border rounded-md border-grey-200 hover:bg-grey-200 hover:text-black"
                  onClick={() => handleClick(button)}
                >
                  <div className="flex gap-5 font-bold uppercase hover:text-black">
                    <span className="text-grey-200">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <h3>{button}</h3>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Description
        rotationTime={currentPlanet.rotation}
        revolutionTime={currentPlanet.revolution}
        radius={currentPlanet.radius}
        averageTemp={currentPlanet.temperature}
      />
    </div>
  );
};

export default Planet;
