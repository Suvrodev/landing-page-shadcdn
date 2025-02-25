import compassionImage from "@/assets/compassionImage.png";
const Compassion = () => {
  return (
    <div className="px-[38px] md:pl-[68px] md:pr-[128px] relative">
      <div className="flex flex-col-reverse md:flex-row gap-[20px] md:gap-[103px]">
        <div className=" w-full md:w-[33%] flex justify-center items-center ">
          <img
            src={compassionImage}
            alt=""
            className=" w-[150px] h-[178px] md:w-[369px] md:h-[423px]  "
          />
        </div>
        <div className=" w-full md:w-[67%] ">
          <div>
            <h1 className="text-[24px] md:text-[54px] text-center md:text-left font-bold">
              What is <br />
              The Compassion <br /> Collaboration?{" "}
            </h1>
            <p className="text-[#454545] text-[28px] relativemt-[67px] hidden md:block ">
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

      {/* Water mark in mobile device */}
      <div className="absolute -bottom-10 left-0 md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="168"
          viewBox="0 0 55 168"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M-29 168C17.3919 168 55 130.392 55 84L-29 84V168Z"
            fill="#FFF9DA"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M-29 0C17.3919 0 55 37.6081 55 84L-29 84V0Z"
            fill="#FFF9DA"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="84"
          height="84"
          viewBox="0 0 84 84"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M84 84C37.6081 84 0 46.3919 0 0L84 0V84Z"
            fill="#FFF7CF"
          />
        </svg>
      </div>
    </div>
  );
};

export default Compassion;
