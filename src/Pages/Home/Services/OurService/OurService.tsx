import IndividualTherapy from "./IndivisualTherapy/IndividualTherapy";
import OrganizationalServices from "./IndivisualTherapy/OrganizationalServices/OrganizationalServices";

const OurService = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-[50px] headingColor">
        Our Services
      </h1>
      <div className="w-[494px] mx-auto mt-[10px]">
        <p className="text-center headingColor leading-[34px] tracking-[0.21px]">
          Here to support you with care, understanding, and <br /> guidance
          every step of the way.
        </p>
      </div>
      <div>
        <IndividualTherapy />
      </div>

      <div className="mt-[154px]">
        <OrganizationalServices />
      </div>
    </div>
  );
};

export default OurService;
