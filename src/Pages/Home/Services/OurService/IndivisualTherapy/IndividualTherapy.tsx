import { ourServices } from "@/Types/globalArray";
import TherapyBox from "./TherapyBox/TherapyBox";

const IndividualTherapy = () => {
  return (
    <div className="px-[38px] md:px-[124px] ">
      <h1 className="text-center headingColor text-[18px] md:text-[33px] font-semibold pt-[20px] md:pt-[70px] pb-[20px] md:pb-[44px] ">
        Individual Therapy
      </h1>
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-[10px] md:gap-[54px]  ">
          <TherapyBox data={ourServices[0]} />
          <TherapyBox data={ourServices[1]} />
        </div>

        <div className="hidden md:block w-[15%] h-[100px]   "></div>
      </div>
      <div className="flex items-center justify-center my-[13px] md:my-[54px]">
        <div className="w-[15%] h-[100px]   "></div>

        <div className="flex items-center gap-[10px] md:gap-[54px]  ">
          <TherapyBox data={ourServices[2]} />
          <TherapyBox data={ourServices[3]} />
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <TherapyBox data={ourServices[4]} />
        </div>
      </div>
    </div>
  );
};

export default IndividualTherapy;
