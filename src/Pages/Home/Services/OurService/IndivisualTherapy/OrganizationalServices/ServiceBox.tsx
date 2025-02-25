import { TOrganizationalService } from "@/Types/globalType";

interface IProps {
  data: TOrganizationalService;
}
const ServiceBox = ({ data }: IProps) => {
  const { title, bgColor } = data;
  return (
    <div
      className="w-[157px] h-[58px] md:w-[440px] md:h-[115px] rounded-[8px] md:rounded-[12px]  flex items-center justify-center py-[29px] px-[10px] md:px-[76px] "
      style={{ backgroundColor: bgColor }}
    >
      <p className="  text-black text-center text-[12px] md:text-[24px] font-semibold leading-normal ">
        {title}
      </p>
    </div>
  );
};

export default ServiceBox;
