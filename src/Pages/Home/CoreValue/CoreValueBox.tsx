interface IProps {
  text: string;
  number: number;
}

const colors = [
  "bg-[#F5FFE9]",
  "bg-[#D5F4FF]",
  "bg-[#FDFCEB]",
  "bg-[#DFFFF3]",
  "bg-[#FFE4E7]",
  "bg-[#E2FFE2]",
  "bg-[#E6E5FF]",
  "bg-[#FFE8D7]",
];

const CoreValueBox = ({ text, number }: IProps) => {
  const bgColor = colors[number] || "bg-white";
  return (
    <div
      className={`w-auto md:w-[240px] h-[34px] md:h-[72px] rounded-[6px]  md:rounded-[10px] flex items-center justify-center py-[9px] md:py-[24px] ${bgColor}`}
    >
      <h1 className="font-semibold text-[14px] md:text-[20px]">{text}</h1>
    </div>
  );
};

export default CoreValueBox;
