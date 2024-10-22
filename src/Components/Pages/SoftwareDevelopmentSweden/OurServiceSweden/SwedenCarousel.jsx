import Slider from "react-slick";
import SwedenTabPanel1 from "./SwedenTabPanel1";
import SwedenTabPanel2 from "./SwedenTabPanel2";
import SwedenTabPanel3 from "./SwedenTabPanel3";
import SwedenTabPanel4 from "./SwedenTabPanel4";

const SwedenCarousel = ({language}) => {

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
            <SwedenTabPanel1  language={language}/>
         </div>
         <div className="bg-white">
            <SwedenTabPanel2  language={language}/>
         </div>
         <div className="bg-white">
            <SwedenTabPanel3  language={language}/>
         </div>
         <div className="bg-white">
            <SwedenTabPanel4  language={language}/>
         </div>
        </Slider>
      </div>
    );
};

export default SwedenCarousel;