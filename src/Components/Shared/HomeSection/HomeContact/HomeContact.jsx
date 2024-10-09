import './HomeContact.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, } from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeContact = () => {
  const fileInputRef = useRef(null);
  const handleClick = () => {
    fileInputRef.current.click();
  };
  useEffect(() => {
    Aos.init({ duration: 1000 }); 
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ml4shge', 'template_0pd37zu', form.current, {
        publicKey: 'Uktdumaxl2EPWGl4T',
      })
      .then(
        () => {
          toast.success("Email Sent Successfully!", {
             position: "top-right"
          });
        },
        (error) => {
          toast.error("Something Went Wrong !", {
             position: "top-right"
          });
          console.log(error);
        },
      );
  };
  
  return (
    <div id='contact' className="bg-gray-100 py-[180px] ">
      <div
        style={{ fontFamily: "Open Sans, sans-serif" }}
        className=" lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:px-7 sm: px-4"
      >
        {/* email input section  */}
        <div data-aos="fade-up" style={{ fontFamily: "Ubuntu,serif" }}>
          {/* form div  */}
          <form ref={form} onSubmit={sendEmail} className="bg-white px-5 py-5">
            <h1 className="text-xl mb-3">Need A Consultation? </h1>
            <p className="mb-4">
              Drop us a line! We are here to answer your questions 24/7.
            </p>

            <textarea
              className="w-full h-[100px] border border-gray-300 px-3 py-2 mb-2 "
              name="feedback"
              id="feedback"
              placeholder="How can I help you? "
            />
            {/* <p>Browse <input className=' text-xs ' type="file" id="fileInput" /> to upload</p>  */}
            <div className="flex gap-2 mb-4">
              <input
                name='files'
                id="files"
                type="file"
                ref={fileInputRef}
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
                name="name"
                id="name"
                placeholder="Full Name"
              />
              <input
                className="border border-gray-300 px-3 py-2 w-full"
                type="text"
                name="company"
                id="company"
                placeholder="Company"
              />
              <input
              required
                className="border border-gray-300 px-3 py-2 w-full"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <PhoneInput
                country={"us"} 
                name="phoneNo"
                id="phoneNo"
                placeholder="Phone Number"
                inputClass=" w-full"
              />
            </div>
            <div className='flex justify-center'>
              <button type='submit' className='my-8 px-8 py-3 uppercase hover:text-black hover:bg-gray-300 text-white bg-[#501b79] rounded-sm'>Send</button>
            </div>

          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default HomeContact;
