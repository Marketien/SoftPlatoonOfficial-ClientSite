// import "../../../Shared/HomeSection/HomeContact/HomeContact.css";
import "./SwedenContact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../../Shared/Loading/Loading";


const SwedenContact = ({ language }) => {

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
    <div className=" py-[60px] lg:mx-auto md:mx-7 sm: mx-4 md:text-start sm: text-center">
      <div
        style={{ fontFamily: "Open Sans, sans-serif" }}
        className=" lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-7 sm: mx-4"
      >
        <h1
        data-aos="fade-right"
          style={{ fontFamily: "Sumana,serif" }}
          className="font-bold text-5xl mb-5"
        >
          {language === "sv" ? (
            <>
              för program varuutveck lingstjänster
              <span className="text-purple-900 ms-1 "> Kontakta oss</span>
            </>
          ) : (
            <>
              For Software Development Services
              <span className="text-purple-900 ms-1 "> Contact With Us</span>
            </>
          )}
        </h1>
        <p data-aos="fade-right" className="text-xl">
          {language === "sv"
            ? "Vill du förvandla ditt företag med skräddarsydda programvarulösningar? Här på Soft Platoon är vårt team av experter inom programvaruutveckling i Sverige redo att hjälpa dig navigera genom teknikens komplexitet och leverera anpassade lösningar."
            : "Would you like to transform your business with custom software solutions? Here at Soft Platoon, our team of expert software developer Sweden team is here to help you navigate the complexities of technology and deliver tailored solutions."}
        </p>
        <p data-aos="fade-right" className="text-xl mt-3">
          {language === "sv"
            ? "Oavsett om du vill bygga en ny applikation, integrera befintliga system eller utforska molnbaserade programvarulösningar, finns vi här för att hjälpa dig varje steg på vägen."
            : "Whether you’re looking to build a new application, integrate existing systems, or explore cloud-based software solutions, we’re here to assist you every step of the way."}
        </p>
        
      <p data-aos="fade-right" className="text-xl mt-3">
          {language === "sv"
            ? "Kontakta oss idag för en kostnadsfri konsultation! Låt oss visa dig hur våra innovativa tillvägagångssätt kan förbättra dina affärsprocesser och driva tillväxt."
            : "Get in touch with us today for a free consultation! Let us show you how our innovative approaches can enhance your business processes and drive growth."}
        </p>
      </div>
{/*>>>>>>>>>>>>>>>>>  Contact form section <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  */}
      <div
        style={{ fontFamily: "Open Sans, sans-serif" }}
        className=" lg:max-w-6xl md:max-w-3xl sm:max-w-sm lg:mx-auto md:px-7 sm:px-4 mt-20"
      >
        <div data-aos="fade-up" style={{ fontFamily: "Ubuntu,serif" }}>
          <form ref={form} onSubmit={sendEmail} className="border shadow-lg rounded-md px-5 py-5">
            <h1 className="text-xl mb-3">{language === "sv" ? "Kontaktformulär" : "Contact Form"}</h1>
            <p className="mb-4">
            {language === "sv" ? "Fyll i vårt kontaktformulär för att dela dina projektdetaljer, så återkommer vi till dig omgående för att diskutera dina krav." : "Fill out our contact form to share your project details, and we’ll get back to you promptly to discuss your requirements:"}
            </p>

            <textarea
              className="w-full h-[100px] border border-gray-300 px-3 py-2 mb-2 "
              name="feedback"
              id="feedback"
              placeholder={language === "sv" ? "Hur kan jag hjälpa dig?" : "How can I help you? "}
            />
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
              <input
                required
                className="border border-gray-300 px-3 py-2 w-full"
                name="name"
                id="name"
                type="text"
                placeholder={language === "sv" ? "Fullständigt namn" : "Full Name"}
              />
              <input
                className="border border-gray-300 px-3 py-2 w-full"
                type="text"
                name="company"
                id="company"
                placeholder={language === "sv" ? "Företagets namn" : "Company Name"}
              />
              <input
                required
                className="border border-gray-300 px-3 py-2 w-full"
                type="email"
                name="email"
                id="email"
                placeholder={language === "sv" ? "E-post" : "Email"}
              />
              <input
              hidden
                required
                className="border border-gray-300 px-3 py-2 w-full"
                type="number"
                name="phone"
                id="phone"
                value={contact}
                placeholder={language === "sv" ? "Telefonnummer" : "Phone No"}
              />
              <PhoneInput
                country={"us"}
                name="contact"
                id="contact"
                type="number"
                value={contact} // Set the value from the state
                onChange={setContact} 
                placeholder={language === "sv" ? "Telefonnummer" : "Phone No"}
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

export default SwedenContact;
