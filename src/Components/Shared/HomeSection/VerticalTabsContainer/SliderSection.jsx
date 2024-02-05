import TabPanelInfo1 from "../TabPanelInfo/TabPanelInfo1";
import TabPanelInfo2 from "../TabPanelInfo/TabPanelInfo2";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const SliderSection = () => {
  return (
    <div>
            <Carousel className=" lg:w-full md:w-[700px] sm: w-[350px]">
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
