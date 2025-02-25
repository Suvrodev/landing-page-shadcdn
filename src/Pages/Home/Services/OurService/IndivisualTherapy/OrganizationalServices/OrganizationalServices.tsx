import { organizationalServices } from "@/Types/globalArray";
import ServiceBox from "./ServiceBox";

const OrganizationalServices = () => {
  //   console.log("Organizational Service", organizationalServices);
  return (
    <div className="">
      {" "}
      <h1 className="text-center headingColor text-[33px] font-semibold  ">
        Organizational services
      </h1>
      <p className="text-center text-[19px]">
        We collaborate with organizations to create healthy workplaces through:
      </p>
      <div className="flex items-center justify-center mt-[44px] ">
        <div className="flex items-center gap-[54px]  ">
          <ServiceBox data={organizationalServices[0]} />
          <ServiceBox data={organizationalServices[1]} />
        </div>
        <div className="w-[15%] h-[100px]  "></div>
      </div>
      <div className="flex items-center justify-center my-[54px]">
        <div className="w-[15%] h-[100px] "></div>

        <div className="flex items-center gap-[54px]  ">
          <ServiceBox data={organizationalServices[2]} />
          <ServiceBox data={organizationalServices[3]} />
        </div>
      </div>
    </div>
  );
};

export default OrganizationalServices;
