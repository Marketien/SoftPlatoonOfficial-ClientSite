import "./HomeContact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../Loading/Loading";

const HomeContact = () => {
  
  const [isLoading, setLoading] = useState(false);
  const [contact, setContact] = useState("");
  const form = useRef();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);


    emailjs
      .sendForm("service_nu370bm", "template_l0d9yqb", form.current, {
        publicKey: "QCIFFc_9aZQkMdLJj",
      })
      .then(
        () => {
          toast.success("Email Sent Successfully!", {
            position: "top-center",
          });
          setLoading(false);
        },
        (error) => {
          toast.error("Error: " + error.text, {
            position: "top-center",
          });
          setLoading(false);
          console.log(error);
        }
      );
  };

  return (
    <div id="contact" className="bg-white py-[60px] ">
      <div
        style={{ fontFamily: "Open Sans, sans-serif" }}
        className=" lg:max-w-6xl md:max-w-3xl sm:max-w-sm lg:mx-auto md:px-7 sm:px-4"
      >
        <div data-aos="fade-up" style={{ fontFamily: "Ubuntu,serif" }}>
          <form ref={form} onSubmit={sendEmail} className="border shadow-lg rounded-md px-5 py-5">
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
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
              <input
                required
                className="border border-gray-300 px-3 py-2 w-full"
                name="name"
                id="name"
                type="text"
                placeholder="Full Name"
              />
              <input
                className="border border-gray-300 px-3 py-2 w-full"
                type="text"
                name="company"
                id="company"
                placeholder="Company Name"
              />
              <input
                required
                className="border border-gray-300 px-3 py-2 w-full"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <input
              hidden
                required
                className="border border-gray-300 px-3 py-2 w-full"
                type="number"
                name="phone"
                id="phone"
                value={contact}
                placeholder="Phone No"
              />
              <PhoneInput
                country={"us"}
                name="contact"
                id="contact"
                type="number"
                value={contact} // Set the value from the state
                onChange={setContact} 
                placeholder="Phone Number"
                inputClass="w-full"
              />
            </div>
            <div className="flex justify-center">
              {isLoading ? (
                <div className="my-8 px-8 py-3 bg-white rounded-sm">
                  <Loading />
                </div>
              ) : (
                <button
                  type="submit"
                  className="my-8 px-8 py-3 uppercase hover:text-black hover:bg-gray-300 text-white bg-[#501b79] rounded-sm"
                >
                  Send
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default HomeContact;
