import IndividualTherapy from "./IndivisualTherapy/IndividualTherapy";
import OrganizationalServices from "./IndivisualTherapy/OrganizationalServices/OrganizationalServices";

const OurService = () => {
  return (
    <div className="">
      <h1 className="text-center font-bold text-[20px] md:text-[50px] headingColor ">
        Our Services
      </h1>
      <div className="w-auto md:w-[494px] mx-auto mt-[5px] md:mt-[10px] ">
        <p className="text-center headingColor leading-[12px] md:leading-[34px] tracking-[0.21px] text-[10px] md:text-[22px]">
          Here to support you with care, understanding, and <br /> guidance
          every step of the way.
        </p>
      </div>
      <div className="">
        <IndividualTherapy />
      </div>

      <div className="mt-[45px] md:mt-[154px] px-[38px] md:px-[124px] ">
        <OrganizationalServices />
      </div>
    </div>
  );
};

export default OurService;
