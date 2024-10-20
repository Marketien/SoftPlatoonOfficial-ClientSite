import { Carousel } from "@material-tailwind/react";
import img1 from "../../../../../../public/QalatAlKhaleej/1.png";
import img2 from "../../../../../../public/QalatAlKhaleej/4.png";
import img3 from "../../../../../../public/QalatAlKhaleej/5.png";
import img4 from "../../../../../../public/QalatAlKhaleej/8.png";
import img5 from "../../../../../../public/QalatAlKhaleej/14.png";
import img6 from "../../../../../../public/QalatAlKhaleej/15.png";
import img7 from "../../../../../../public/QalatAlKhaleej/16.png";

const CarouselTransition = () => {
  return (
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img src={img1} className="h-full w-full object-cover" />
      <img src={img2} className="h-full w-full object-cover" />
      <img src={img3} className="h-full w-full object-cover" />
      <img src={img4} className="h-full w-full object-cover" />
      <img src={img5} className="h-full w-full object-cover" />
      <img src={img6} className="h-full w-full object-cover" />
      <img src={img7} className="h-full w-full object-cover" />
    </Carousel>
  );
}

export default CarouselTransition ;
