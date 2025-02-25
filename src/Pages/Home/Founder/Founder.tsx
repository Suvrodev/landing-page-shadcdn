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
    <div className="px-[125px]">
      <div className="founderBorder">
        <div className="bg-[#FCF0B4] w-[209px] h-[54px] rounded-md mx-auto mt-[71px]">
          <h1 className="font-bold text-[24px] px-[53px] py-[12px]">
            Founders
          </h1>
        </div>
        <div className="mt-[24px] text-center ">
          <p className="text-[26px] font-semibold"> Meet the Minds Behind</p>
          <p className="bg-gradient-to-r from-[#00ADEE] to-[#FFD400] bg-clip-text text-transparent text-[32px] font-bold leading-normal ">
            {" "}
            The Compassion Collaboratives
          </p>
        </div>
        <div className="mt-[70px] mb-[72px]">
          <div className="mx-[320px] flex items-center gap-[100px]">
            <FounderImage data={founders[0]} />
            <FounderImage data={founders[1]} />
          </div>

          <div className="mx-[224px] flex items-center gap-[100px] mt-[46px]">
            <FounderImage data={founders[2]} />
            <FounderImage data={founders[3]} />
            <FounderImage data={founders[4]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
