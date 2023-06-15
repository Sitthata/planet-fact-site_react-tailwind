interface DescriptionProps {
  rotationTime: string;
  revolutionTime: string;
  radius: string;
  averageTemp: string;
}

const Description = ({
  rotationTime,
  revolutionTime,
  radius,
  averageTemp,
}: DescriptionProps) => {
  const descriptions = [
    { label: "Rotation Time", value: rotationTime },
    { label: "Revolution Time", value: revolutionTime },
    { label: "Radius", value: radius },
    { label: "Average Temp.", value: averageTemp },
  ];

  return (
    <div className="justify-center mt-[4rem] md:flex md:gap-5">
      {descriptions.map((description, index) => (
        <div className="flex-grow mt-3 text-grey-200" key={index}>
          <div className="flex flex-col border-[1px] gap-3 items-start justify-between border-grey-100 p-5 md:flex-grow">
            <p className="font-[700] md:text-sm">{description.label}</p>
            <h3 className="text-2xl text-white font-head md:text-3xl">
              {description.value}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
