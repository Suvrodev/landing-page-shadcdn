import { organizationalServices } from "@/Types/globalArray";
import ServiceBox from "./ServiceBox";

const OrganizationalServices = () => {
  //   console.log("Organizational Service", organizationalServices);
  return (
    <div className="">
      {" "}
      <h1 className="text-center headingColor text-[18px] md:text-[33px] font-semibold  ">
        Organizational services
      </h1>
      <p className="text-center mt-[12px] text-[16px] md:text-[18px]">
        We collaborate with organizations to create healthy workplaces through:
      </p>
      <div className="flex items-center justify-center mt-[37px] md:mt-[44px]  ">
        <div className="flex items-center gap-[16px] md:gap-[54px]  ">
          <ServiceBox data={organizationalServices[0]} />
          <ServiceBox data={organizationalServices[1]} />
        </div>
        <div className="w-[15px] md:w-[97px] "></div>
      </div>
      <div className="flex items-center justify-center my-[16px] md:my-[54px]">
        <div className=" w-[15px] md:w-[97px] "></div>

        <div className="flex items-center gap-[16px] md:gap-[54px]  ">
          <ServiceBox data={organizationalServices[2]} />
          <ServiceBox data={organizationalServices[3]} />
        </div>
      </div>
    </div>
  );
};

export default OrganizationalServices;
