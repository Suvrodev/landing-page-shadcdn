interface IProps {
  text: string;
  number: number;
}

const colors = [
  "bg-[#F5FFE9]", // 1st box
  "bg-[#D5F4FF]", // 2nd box
  "bg-[#FDFCEB]", // 3rd box
  "bg-[#DFFFF3]", // 4th box
  "bg-[#FFE4E7]", // 5th box
  "bg-[#E2FFE2]", // 6th box
  "bg-[#E6E5FF]", // 7th box
  "bg-[#FFE8D7]", // 8th box
];

const CoreValueBox = ({ text, number }: IProps) => {
  const bgColor = colors[number] || "bg-white";
  return (
    <div
      className={`w-[240px] h-[72px]  rounded-[10px] flex items-center justify-center ${bgColor}`}
    >
      <h1 className="font-semibold text-[20px]">{text}</h1>
    </div>
  );
};

export default CoreValueBox;
