import Header from "./Header/Header";
import { Button } from "@/components/ui/button";
import bannerImage from "@/assets/bannerImage.png";
import bannerMessage from "@/assets/Banner_Message.png";
import bannerShadow from "@/assets/bannerShadow.png";
const Banner = () => {
  return (
    <div className="bg-[rgba(209,242,255,0.50)] pb-[108px] relative">
      <div>
        <Header />
      </div>

      <div className="flex gap-[124px] px-[124px]  ">
        <div className="relative w-1/2 ">
          <div className="w-full  text-[70px] font-bold ">
            <h1>We're all a </h1>
            <h1>little tangled</h1>
          </div>
          <p className="w-[440px] text-[20px] text-[#636160] mt-[35px]">
            Therapy isn’t just for tough times—it’s for growth, clarity, and
            self-care. See us in person or online, individually or through your
            workplace.
          </p>

          <Button className=" text-black w-[209px] h-[48px] bg-[#FFD400] hover:bg-[#FFD400] mt-[59px] text-[20px] font-semibold">
            Book a Session
          </Button>

          <p className="font-bold mt-[41px]">
            Accessible, Person-centered, <br /> and Transformative
          </p>
        </div>
        <div className=" flex justify-end ">
          <img src={bannerImage} alt="" className="w-[416px] h-[474px]" />
        </div>

        <div className="absolute left-1/2 top-[280px] ">
          <img src={bannerMessage} alt="" />
        </div>
      </div>
      <div className="absolute bottom-0 right-[32%]">
        <img src={bannerShadow} alt="" />
      </div>
    </div>
  );
};

export default Banner;
