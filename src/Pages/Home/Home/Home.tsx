import Approch from "../Approch/Approch";
import Banner from "../Banner/Banner";
import BookASection from "../BookASection/BookASection";
import Compassion from "../Compassion/Compassion";
import CoreValue from "../CoreValue/CoreValue";
import Footer from "../Footer/Footer";
import Founder from "../Founder/Founder";
import OurService from "../Services/OurService/OurService";

const Home = () => {
  return (
    <div className="mx-[120px]">
      <div>
        <Banner />
      </div>
      <div className="mt-[126px]">
        <Compassion />
      </div>
      <div className=" ">
        <Approch />
      </div>
      <div className="mt-[124px]">
        <CoreValue />
      </div>
      <div className="mt-[55px]">
        <OurService />
      </div>
      <div className=" my-[132px]">
        <Founder />
      </div>
      <div>
        <BookASection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
