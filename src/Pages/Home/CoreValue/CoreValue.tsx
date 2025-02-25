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
    <div className="bg-[#FFD400] pt-[100px] px-[124px] ">
      <h1 className="text-center text-[#231F20] font-semibold text-[42px]">
        Our Core Values
      </h1>
      <p className="text-[18px] text-center leading-[34px]">
        The values that define our mission and guide approach
      </p>
      <div className="w-[1032px] h-[168px]  grid grid-cols-4 mx-auto bg-white mt-[58px]">
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
