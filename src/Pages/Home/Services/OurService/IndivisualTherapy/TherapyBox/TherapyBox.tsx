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
      className={`w-[440px] h-[345px]  rounded-[24px] pt-[48px] px-[36px]`}
      style={{ backgroundColor: bgColor }}
    >
      <h1 className="headingColor text-center font-bold text-[22px]">
        {title}
      </h1>
      <div className="w-[368px] leading-[34px] mx-auto text-center mt-[43px]">
        {desc}
      </div>
    </div>
  );
};

export default TherapyBox;
