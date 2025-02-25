import { TApproach } from "@/Types/globalType";

interface IProps {
  data: TApproach;
}
const ApproachBox = ({ data }: IProps) => {
  const { title, desc } = data;
  return (
    <div className=" border-[#00ADEE] border-[1px] rounded-[12px] md:rounded-[24px] px-[20px]  md:px-[54px] py-[16px] md:py-[20px] hover:bg-[#00ADEE] transition-all duration-700">
      <h1 className=" text-center font-bold text-[18px] md:text-[28px] text-[#0B0F10] hover:headingColor">
        {title}
      </h1>
      <p className=" leading-[14px] md:leading-6 w-auto md:w-[782px] mt-[20px] text-[10px] md:text-[20px] text-[#636160] hover:textColor">
        {desc}
      </p>
    </div>
  );
};

export default ApproachBox;
