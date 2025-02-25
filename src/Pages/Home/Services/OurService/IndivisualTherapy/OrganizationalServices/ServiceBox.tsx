import { TOrganizationalService } from "@/Types/globalType";

interface IProps {
  data: TOrganizationalService;
}
const ServiceBox = ({ data }: IProps) => {
  const { title, bgColor } = data;
  return (
    <div
      className="w-[440px] h-[115px]  rounded-[12px] bg-[#EEFFDE] flex items-center justify-center py-[29px] px-[93px]"
      style={{ backgroundColor: bgColor }}
    >
      <p className="  text-black text-center font-proxima text-[24px] font-semibold leading-normal">
        {title}
      </p>
    </div>
  );
};

export default ServiceBox;
