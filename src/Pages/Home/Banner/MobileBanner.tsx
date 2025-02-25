import Header from "./Header/Header";
import { Button } from "@/components/ui/button";
import bannerImage from "@/assets/bannerImage.png";
import bannerMessage from "@/assets/Banner_Message.png";

const MobileBanner = () => {
  return (
    <div className="bg-[rgba(209,242,255,0.50)] pb-[25px] relative">
      <div>
        <Header />
      </div>

      <div className="">
        <div className=" flex flex-col items-center">
          <div className="w-full  text-[24px] font-bold text-center">
            <h1>We're all a </h1>
            <h1>little tangled</h1>
          </div>
          <p className="w-[301px] text-[8px] text-[#636160] mt-[14px]">
            Therapy isn’t just for tough times—it’s for growth, clarity, and
            self-care. See us in person or online, individually or through your
            workplace.
          </p>

          <Button className=" text-black w-[104px] h-[24px] bg-[#FFD400] hover:bg-[#FFD400] mt-[20px] text-[10px] font-semibold">
            Book a Session
          </Button>
        </div>
        <div className="relative mt-[14px]  px-[30px]   ">
          <div className="flex justify-between items-end gap-[50px] ">
            <p className="font-bold text-[14px] w-[134px] ">
              Accessible, <br /> Person-centered, <br /> and Transformative
            </p>
            <div className=" flex justify-end ">
              <img src={bannerImage} alt="" className="w-[130px] h-[130px]" />
            </div>
          </div>

          <div className="absolute left-[150px] bottom-[80px] ">
            <img src={bannerMessage} alt="" className="w-[46px] h-[45px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileBanner;
