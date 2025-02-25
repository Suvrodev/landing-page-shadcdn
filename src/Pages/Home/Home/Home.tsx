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
    <div className="">
      <div className="">
        <div className="hidden md:block">
          <Banner />
        </div>
        <div className="md:hidden">
          <MobileBanner />
        </div>
      </div>
      <div className="md:mx-[120px]  mt-[38px] md:mt-[126px] ">
        <Compassion />
      </div>
      <div className=" md:mx-[120px] ">
        <Approch />
      </div>
      <div className="">
        <CoreValue />
      </div>
      <div className="md:mx-[120px] mt-[20px] md:mt-[55px] ">
        <OurService />
      </div>
      <div className="md:mx-[120px]  my-[55px] md:my-[132px]">
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
