import Slider from "react-slick";
import TabPanelInfo1 from "../TabPanelInfo/TabPanelInfo1";
import TabPanelInfo2 from "../TabPanelInfo/TabPanelInfo2";

const HomeCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="lg:max-w-6xl md:max-w-3xl sm: max-w-full lg:mx-auto md:px-7 sm: px-0">
      <Slider {...settings}>
       <div className="bg-white">
          <TabPanelInfo1 />
       </div>
       <div className="bg-white">
          <TabPanelInfo2 />
       </div>
        
      </Slider>
    </div>
  );
};

export default HomeCarousel;
