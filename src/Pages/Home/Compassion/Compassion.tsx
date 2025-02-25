import compassionImage from "@/assets/compassionImage.png";
const Compassion = () => {
  return (
    <div className="px-[124px]">
      <div className="flex gap-[103px]">
        <div className="w-[40%]">
          <img src={compassionImage} alt="" />
        </div>
        <div className="  w-[60%] ">
          <div>
            <h1 className="text-[54px] font-bold">
              What is <br />
              The Compassion <br /> Collaboration?{" "}
            </h1>
            <p className="text-[#454545]  ">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compassion;
