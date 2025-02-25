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
      className={` w-[172px] h-[171px] md:w-[440px] md:h-[345px]  rounded-[12px] md:rounded-[24px] pt-[18px] md:pt-[48px] px-[7px] md:px-[36px]`}
      style={{ backgroundColor: bgColor }}
    >
      <h1 className="headingColor text-center font-bold text-[12px] md:text-[22px]">
        {title}
      </h1>
      <div className="w-[158px] md:w-[364px] mx-auto leading-4 md:leading-[34px]  text-center mt-[10px] md:mt-[43px] ">
        {desc}
      </div>
    </div>
  );
};

export default TherapyBox;
