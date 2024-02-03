import './Sponsered.css'
import logo1 from '../../../../../public/Icons/Main Logo White-01.png';
import logo2 from '../../../../../public/Icons/Main Logo-01.png';
import { useEffect, useState } from 'react';

const Sponsered = () => {

    const logos = [logo1, logo2, logo1, logo2, logo1, logo2, logo1, logo2, logo1, logo2];
    const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Increment the currentLogoIndex, and loop back to 0 if it exceeds the array length
            setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
        }, 2000);

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, [logos.length]); 

    return (
        <div className='parent-div grid lg:grid-cols-7 md:grid-cols-5 sm: grid-cols-3 gap-5'>
           { logos.map((logo, index) => 
              <img
              key={index}
              className={`sponseredLogo ${index === currentLogoIndex ? 'visible' : 'hidden'}`}
              src={logo}
              alt=""
          />
            )}
        </div>
    );
};

export default Sponsered;