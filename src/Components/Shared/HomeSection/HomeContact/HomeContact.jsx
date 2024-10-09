import './HomeContact.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const HomeContact = () => {
  const fileInputRef = useRef(null);
  
  const handleClick = () => {
    fileInputRef.current.click();
  };
  
  const handleFileChange = (event) => {
    const files = event.target.files;
    console.log(files);
  };

  useEffect(() => {
    Aos.init({ duration: 1000 }); 
  }, []);
  
  return (
    <div id='contact' className="bg-gray-100 py-[180px] ">
      <div
        style={{ fontFamily: "Open Sans, sans-serif" }}
        className=" lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:px-7 sm: px-4"
      >
        {/* email input section  */}
        <div data-aos="fade-up" style={{ fontFamily: "Ubuntu,serif" }}>
          {/* form div  */}
          <form className="bg-white px-5 py-5">
            <h1 className="text-xl mb-3">Need A Consultation? </h1>
            <p className="mb-4">
              Drop us a line! We are here to answer your questions 24/7.
            </p>

            <textarea
              className="w-full h-[100px] border border-gray-300 px-3 py-2 mb-2 "
              name=""
              id=""
              placeholder="How can I help you? "
            />
            {/* <p>Browse <input className=' text-xs ' type="file" id="fileInput" /> to upload</p>  */}
            <div className="flex gap-2 mb-4">
              <input
              required
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <p
                onClick={handleClick}
                style={{ cursor: "pointer", color: "rgb(31, 145, 211)" }}
              >
                Browse
              </p>
              to upload your file(s)
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-3">
              <input
              required
                className="border border-gray-300 px-3 py-2 w-full"
                type="text"
                name=""
                id=""
                placeholder="Full Name"
              />
              <input
              required
                className="border border-gray-300 px-3 py-2 w-full"
                type="text"
                name=""
                id=""
                placeholder="Company"
              />
              <input
              required
                className="border border-gray-300 px-3 py-2 w-full"
                type="email"
                name=""
                id=""
                placeholder="Email"
              />
              <PhoneInput
                country={"us"} 
                placeholder="Phone Number"
                inputClass=" w-full"
              />
            </div>
            <div className='flex justify-center'>
              <button className='my-8 px-8 py-3 uppercase hover:text-black hover:bg-gray-300 text-white bg-[#501b79] rounded-sm'>Send</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
