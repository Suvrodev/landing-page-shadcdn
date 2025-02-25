import { TApproach } from "@/Types/globalType";

interface IProps {
  data: TApproach;
}
const ApproachBox = ({ data }: IProps) => {
  const { title, desc } = data;
  return (
    <div className=" border-[#00ADEE] border-[1px] rounded-[12px] md:rounded-[24px] px-[13px] md:px-[54px] py-[22px] hover:bg-[#00ADEE] transition-all duration-700">
      <h1 className="headingColor text-center font-bold text-[18px] md:text-[28px]">
        {title}
      </h1>
      <p className="textColor leading-[14px] md:leading-6 w-[278px] md:w-[782px] mt-[20px] text-[10px] md:text-[20px]">
        {desc}
      </p>
    </div>
  );
};

export default ApproachBox;
