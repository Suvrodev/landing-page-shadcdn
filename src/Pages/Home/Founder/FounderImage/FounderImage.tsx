import { TFounder } from "@/Types/globalType";

interface IProps {
  data: TFounder;
}
const FounderImage = ({ data }: IProps) => {
  const { name, image, designation } = data;
  return (
    <div className="text-center">
      <img src={image} alt="" />
      <h1 className="mt-4 text-[18px] font-semibold">{name}</h1>
      <p className="text-[18px] font-semibold">{designation}</p>
    </div>
  );
};

export default FounderImage;
