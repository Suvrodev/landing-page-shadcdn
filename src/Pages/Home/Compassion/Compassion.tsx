import compassionImage from "@/assets/compassionImage.png";
const Compassion = () => {
  return (
    <div className="px-[38px] md:px-[124px]">
      <div className="flex flex-col-reverse md:flex-row gap-[20px] md:gap-[103px]">
        <div className=" w-full md:w-[40%] flex justify-center ">
          <img
            src={compassionImage}
            alt=""
            className=" w-[150px] h-[178px] md:w-[369px] md:h-[423px]  "
          />
        </div>
        <div className=" w-full md:w-[60%] ">
          <div>
            <h1 className="text-[24px] md:text-[54px] text-center md:text-left font-bold">
              What is <br />
              The Compassion <br /> Collaboration?{" "}
            </h1>
            <p className="text-[#454545] text-[28px]  mt-[67px] hidden md:block">
              At{" "}
              <span className="font-bold">
                The Compassion Collaborative (TCC),
              </span>{" "}
              we <br /> believe that mental health care should be <br />
              <span className="font-bold">
                accessible, person-centered, and <br /> transformative.
              </span>{" "}
              Our approach ensures that <br /> support is available when and
              where you need it.
            </p>

            {/* For Mobile */}
            <p className="text-[#454545] text-[15px] md:text-[28px] mt-[20px] md:hidden text-justify">
              At{" "}
              <span className="font-bold">
                The Compassion Collaborative (TCC),
              </span>{" "}
              we believe that mental health care should be
              <span className="font-bold">
                accessible, person-centered, and transformative.
              </span>{" "}
              Our approach ensures that support is available when and where you
              need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compassion;
