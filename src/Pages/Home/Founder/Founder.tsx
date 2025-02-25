import "./Founder.css";

import founder1 from "@/assets/f1.png";
import founder2 from "@/assets/f2.png";
import founder3 from "@/assets/f3.png";
import founder4 from "@/assets/f4.png";
import founder5 from "@/assets/f5.png";
import FounderImage from "./FounderImage/FounderImage";

const founders = [
  { name: "Name", designation: "Designation", image: founder1 },
  { name: "Name", designation: "Designation", image: founder2 },
  { name: "Name", designation: "Designation", image: founder3 },
  { name: "Name", designation: "Designation", image: founder4 },
  { name: "Name", designation: "Designation", image: founder5 },
];

const Founder = () => {
  return (
    <div className="px-[39px] md:px-[125px] ">
      <div className="relative rounded-lg p-[2px]">
        {/* Gradient Border */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00ADEE] to-[#FFD400]"></div>

        {/* Inner Content (White Background) */}
        <div className="relative bg-white rounded-lg p-[1px]">
          <div className="bg-[#FCF0B4] w-[100px] md:w-[209px] h-[24px] md:h-[54px] rounded-md mx-auto mt-[13px] md:mt-[71px] flex justify-center items-center">
            <h1 className="font-bold text-[12px] md:text-[24px] px-[53px] py-[12px]">
              Founders
            </h1>
          </div>
          <div className="mt-[11px] md:mt-[24px] mb-[30px] text-center">
            <p className="text-[12px] md:text-[26px] font-semibold">
              Meet the Minds Behind
            </p>
            <p className="bg-gradient-to-r from-[#00ADEE] to-[#FFD400] bg-clip-text text-transparent text-[16px] md:text-[32px] font-bold leading-normal">
              The Compassion Collaboratives
            </p>
          </div>
          <div className="hidden md:block mt-[70px] mb-[72px]">
            <div className="mx-[320px] flex items-center justify-center gap-[100px]">
              <FounderImage data={founders[0]} />
              <FounderImage data={founders[1]} />
            </div>
            <div className="mx-[224px] flex items-center justify-center gap-[100px] mt-[46px]">
              <FounderImage data={founders[2]} />
              <FounderImage data={founders[3]} />
              <FounderImage data={founders[4]} />
            </div>
          </div>

          {/* For Mobile device */}
          <div className="md:hidden  mt-[22px] mb-[16px]">
            <div className="mx-[90px] flex items-center justify-center gap-[63px]">
              <FounderImage data={founders[0]} />
              <FounderImage data={founders[1]} />
            </div>
            <div className="mx-[90px] flex items-center justify-center gap-[63px] mt-[20px]">
              <FounderImage data={founders[2]} />
              <FounderImage data={founders[3]} />
            </div>
            <div className=" flex items-center justify-center  mt-[20px]">
              <FounderImage data={founders[4]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
