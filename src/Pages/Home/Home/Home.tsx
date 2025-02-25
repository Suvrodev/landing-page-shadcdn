import Approch from "../Approch/Approch";
import Banner from "../Banner/Banner";
import MobileBanner from "../Banner/MobileBanner";
import BookASection from "../BookASection/BookASection";
import Compassion from "../Compassion/Compassion";
import CoreValue from "../CoreValue/CoreValue";
import Footer from "../Footer/Footer";
import Founder from "../Founder/Founder";
import OurService from "../Services/OurService/OurService";

const Home = () => {
  return (
    <div className="md:mx-[120px] ">
      <div className="">
        <div className="hidden md:block">
          <Banner />
        </div>
        <div className="md:hidden">
          <MobileBanner />
        </div>
      </div>
      <div className="mt-[38px] md:mt-[126px] ">
        <Compassion />
      </div>
      <div className=" ">
        <Approch />
      </div>
      <div className="">
        <CoreValue />
      </div>
      <div className="mt-[20px] md:mt-[55px] ">
        <OurService />
      </div>
      <div className=" my-[55px] md:my-[132px]">
        <Founder />
      </div>
      <div className="">
        <BookASection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
