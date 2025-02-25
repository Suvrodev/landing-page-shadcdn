// interface IProps {
//   title: string;
//   bodyText: string;
//   color: string;
// }

import { TService } from "@/Types/globalType";

interface IProps {
  data: TService;
}
const TherapyBox = ({ data }: IProps) => {
  const { title, desc, bgColor } = data;
  return (
    <div
      className={` max-w-[172px]  h-[258px] md:max-w-[440px] md:h-[365px]  rounded-[12px] md:rounded-[24px] pt-[10px] md:pt-[48px] md:pb-[10px] px-[6px] md:px-[36px]`}
      style={{ backgroundColor: bgColor }}
    >
      <h1 className="headingColor text-center font-bold text-[12px] md:text-[22px] w-[120px] md:w-[225px] mx-auto">
        {title}
      </h1>
      <div className="w-[147px] md:w-[368px] text-[14px] md:text-[18px] mx-auto leading-[14px] md:leading-[34px]  text-center mt-[5px] md:mt-auto ">
        {desc}
      </div>
    </div>
  );
};

export default TherapyBox;
