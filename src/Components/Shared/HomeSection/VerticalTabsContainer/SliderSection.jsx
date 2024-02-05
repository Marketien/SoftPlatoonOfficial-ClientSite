import TabPanelInfo1 from "../TabPanelInfo/TabPanelInfo1";
import TabPanelInfo2 from "../TabPanelInfo/TabPanelInfo2";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const SliderSection = () => {
  return (
    <div>
      {/* <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative  lg:w-full md:w-full sm: w-[350px] ">
          <TabPanelInfo1 />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn rounded-full bg-transparent ">
              ❮
            </a>
            <a href="#slide2" className="btn rounded-full bg-transparent ">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative  lg:w-full md:w-full sm: w-[350px] ">
          <TabPanelInfo2 />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn rounded-full bg-transparent">
              ❮
            </a>
            <a href="#slide3" className="btn rounded-full bg-transparent">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative  lg:w-full md:w-full sm: w-[350px] ">
        <TabPanelInfo1 />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn rounded-full bg-transparent">
              ❮
            </a>
            <a href="#slide4" className="btn rounded-full bg-transparent">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative  lg:w-full md:w-full sm: w-[350px] ">
        <TabPanelInfo2 />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn rounded-full bg-transparent">
              ❮
            </a>
            <a href="#slide1" className="btn rounded-full bg-transparent">
              ❯
            </a>
          </div>
        </div>
      </div> */}
            <Carousel className=" lg:w-full md:w-full sm: w-[350px] bg-white">
                <div>
                    <TabPanelInfo1/>
                </div>
                <div>
                    <TabPanelInfo2/>
                </div>
                <div>
                    <TabPanelInfo1/>
                </div>
                <div>
                    <TabPanelInfo2/>
                </div>
            </Carousel>

    </div>
  );
};

export default SliderSection;
