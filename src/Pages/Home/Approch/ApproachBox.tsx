import { TApproach } from "@/Types/globalType";

interface IProps {
  data: TApproach;
}
const ApproachBox = ({ data }: IProps) => {
  const { title, desc } = data;
  return (
    <div className=" border-[#00ADEE] border-[1px] rounded-[24px] px-[54px] py-[22px] hover:bg-[#00ADEE] transition-all duration-700">
      <h1 className="headingColor text-center font-bold text-[28px]">
        {title}
      </h1>
      <p className="textColor leading-6 w-[782px] mt-[20px]">{desc}</p>
    </div>
  );
};

export default ApproachBox;
