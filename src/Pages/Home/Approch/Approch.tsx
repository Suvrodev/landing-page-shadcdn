import { useEffect, useState } from "react";
import ApproachBox from "./ApproachBox";
import left_top from "@/assets/left_top.png";
import left_down from "@/assets/left_down.png";
import right_top from "@/assets/right_top.png";
import right_top_ from "@/assets/right_top_.png";
import right_down from "@/assets/right_down.png";

const Approch = () => {
  const [approachs, setApproachs] = useState([]);
  useEffect(() => {
    fetch("./approach.json")
      .then((res) => res.json())
      .then((data) => setApproachs(data));
  }, []);

  return (
    <div className="flex flex-col gap-[32px] items-center md:px-[125px] relative">
      <div className="pt-[50px] md:pt-[195px] pb-[64px] md:pb-[124px] px-[50px] md:px-[195px] flex flex-col gap-[12px] md:gap-[32px] z-10  ">
        {approachs.map((data, idx) => (
          <ApproachBox key={idx} data={data} />
        ))}
      </div>

      <div className="hidden md:block absolute left-0 top-0">
        <img src={left_top} alt="" />
        <img src={left_down} alt="" />
      </div>

      <div className="hidden md:block absolute right-0 top-0 ">
        <img src={right_top} alt="" />
      </div>
      <div className="hidden md:block absolute right-0 bottom-0">
        <img src={right_top_} alt="" />
        <img src={right_down} alt="" />
      </div>
    </div>
  );
};

export default Approch;
