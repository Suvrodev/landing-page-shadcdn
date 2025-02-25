import Header from "./Header/Header";
import { Button } from "@/components/ui/button";
import bannerImage from "@/assets/bannerImage.png";
import bannerMessage from "@/assets/Banner_Message.png";
import bannerShadow from "@/assets/bannerShadow.png";

const MobileBanner = () => {
  return (
    <div className="bg-[rgba(209,242,255,0.50)] pb-[25px] relative">
      <div>
        <Header />
      </div>

      <div className="px-[38px]">
        <div className=" flex flex-col ">
          <div className="w-full text-[48px] font-bold text-left leading-[48px]">
            <h1>We're all a </h1>
            <h1>little tangled</h1>
          </div>
          <p className="text-[15px] text-[#636160] mt-[12px]">
            Therapy isn’t just for tough times—it’s for growth, clarity, and
            self-care. See us in person or online, individually or through your
            workplace.
          </p>

          <Button className="mt-[24px] text-black w-[104px] h-[24px] bg-[#FFD400] hover:bg-[#FFD400] text-[10px] font-semibold">
            Book a Session
          </Button>
        </div>
        <div className="relative mt-[12px]">
          <div className="flex justify-between items-end gap-[40px] ">
            <p className="font-bold text-[14px] w-[134px] ">
              Accessible, <br /> Person-centered, <br /> and Transformative
            </p>
            <div className=" flex justify-end ">
              <img src={bannerImage} alt="" className="w-[130px] h-[130px]" />
            </div>
          </div>

          <div className="absolute left-[100px] bottom-[80px] ">
            <img src={bannerMessage} alt="" className="w-[46px] h-[45px]" />
          </div>
        </div>
        <div className="absolute bottom-0 right-[32%]">
          <img src={bannerShadow} alt="" className="w-[80px] h-[73px]" />
        </div>
      </div>
    </div>
  );
};

export default MobileBanner;
