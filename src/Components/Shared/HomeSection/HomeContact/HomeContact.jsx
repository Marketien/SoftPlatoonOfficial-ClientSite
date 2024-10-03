import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useState } from 'react';

const HomeContact = () => {

    Aos.init();

  

    return (
        <div className=" py-[80px] lg:mx-auto md:mx-7 sm: mx-4 ">
        <div
          style={{ fontFamily: "Open Sans, sans-serif" }}
          className=" lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-7 sm: mx-4"
        >
          {/* email input section  */}
          <div data-aos="fade-up"
            style={{ fontFamily: "Sumana,serif" }}>

            </div>
        </div>
        <ToastContainer />
        </div>
    );
};

export default HomeContact;