import Slider from "react-slick";
import TabPanelInfo1 from "../TabPanelInfo/TabPanelInfo1";
import TabPanelInfo2 from "../TabPanelInfo/TabPanelInfo2";
import TabPanelInfo3 from "../TabPanelInfo/TabPanelInfo3";
import TabPanelInfo4 from "../TabPanelInfo/TabPanelInfo4";
import TabPanelInfo5 from "../TabPanelInfo/TabPanelInfo5";
import TabPanelInfo6 from "../TabPanelInfo/TabPanelInfo6";
import TabPanelInfo7 from "../TabPanelInfo/TabPanelInfo7";
import TabPanelInfo8 from "../TabPanelInfo/TabPanelInfo8";

const HomeCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="lg:max-w-6xl md:max-w-3xl sm: max-w-full lg:mx-auto md:px-0 sm: px-0">
      <Slider {...settings}>
       <div className="bg-white">
          <TabPanelInfo1 />
       </div>
       <div className="bg-white">
          <TabPanelInfo2 />
       </div>
       <div className="bg-white">
          <TabPanelInfo3 />
       </div>
       <div className="bg-white">
          <TabPanelInfo4 />
       </div>
       <div className="bg-white">
          <TabPanelInfo5 />
       </div>
       <div className="bg-white">
          <TabPanelInfo6 />
       </div>
       <div className="bg-white">
          <TabPanelInfo7 />
       </div>
       <div className="bg-white">
          <TabPanelInfo8 />
       </div>
        
      </Slider>
    </div>
  );
};

export default HomeCarousel;
