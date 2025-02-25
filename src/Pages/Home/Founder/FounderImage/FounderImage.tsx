import { TFounder } from "@/Types/globalType";

interface IProps {
  data: TFounder;
}
const FounderImage = ({ data }: IProps) => {
  const { name, image, designation } = data;
  return (
    <div className="text-center">
      <img
        src={image}
        alt=""
        className="w-[56px] md:w-auto h-[56px] md:h-auto"
      />
      <h1 className="mt-4 text-[12px] md:text-[18px] font-semibold">{name}</h1>
      <p className="text-[12px] md:text-[18px] font-semibold">{designation}</p>
    </div>
  );
};

export default FounderImage;
