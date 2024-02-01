import { useEffect, useState } from "react";
import banner1 from "../../../../../public/Images/Banner-1.jpg";
import banner2 from "../../../../../public/Images/Banner-2.jpg";
import banner3 from "../../../../../public/Images/Banner-3.jpg";
import banner4 from "../../../../../public/Images/Banner-4.jpg";

const Banner = () => {
    const [currentBanner, setCurrentBanner] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Calculate the next banner index
            const nextBanner = (currentBanner % 4) + 1;
            setCurrentBanner(nextBanner);
        }, 3000);
        return () => clearInterval(intervalId);
    }, [currentBanner]);
  return (
<div>
    <img className="lg:w-full lg:h-screen bg-[#720455]" src={banner1} alt="" style={{ display: currentBanner === 1 ? 'block' : 'none' }} />
    <img className="lg:w-full lg:h-screen bg-[#720455]" src={banner2} alt="" style={{ display: currentBanner === 2 ? 'block' : 'none' }} />
    <img className="lg:w-full lg:h-screen bg-[#720455]" src={banner3} alt="" style={{ display: currentBanner === 3 ? 'block' : 'none' }} />
    <img className="lg:w-full lg:h-screen bg-[#720455]" src={banner4} alt="" style={{ display: currentBanner === 4 ? 'block' : 'none' }} />
</div>

  );
};

export default Banner;
