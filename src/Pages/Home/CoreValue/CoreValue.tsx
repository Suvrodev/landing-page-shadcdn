import CoreValueBox from "./CoreValueBox";

import coreValueImage from "@/assets/coreImage.png";
const CoreValue = () => {
  const texts = [
    "Compassion",
    "Accessibility",
    "Inclusivity",
    "Innovation",
    "Collaboration",
    "Empowerment",
    "Integrity",
    "Cultural Sensitivity",
  ];
  return (
    <div className="bg-[#FFD400] pt-[100px] px-[50px] md:px-[124px] ">
      <h1 className="text-center text-[#231F20] font-semibold text-[20px] md:text-[42px]">
        Our Core Values
      </h1>
      <p className="text-[10px] md:text-[18px] text-center leading-[34px]">
        The values that define our mission and guide approach
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 mx-auto mt-[10px]  md:mt-[58px] gap-[10px] md:gap-[24px] ">
        {texts.map((text, idx) => (
          <CoreValueBox key={idx} text={text} number={idx} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-6">
        <img src={coreValueImage} alt="" />
      </div>
    </div>
  );
};

export default CoreValue;
