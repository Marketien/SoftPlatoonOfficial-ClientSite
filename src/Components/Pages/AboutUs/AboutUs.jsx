import { Link } from "react-router-dom";
import img from "../../../../public/Images/AboutUs-removebg-preview.png";
import CEO from "../../../../public/Images/Unknownclientjpg.jpg";
import HomeContact from "../../Shared/HomeSection/HomeContact/HomeContact";
const AboutUs = () => {
  return (
    <div className="lg:mt-[90px] md:mt-[90px] sm: mt-[80px] bg-white">
      {/* ---------------------------- Banner Section ----------------------------------- */}
      <div
        className="grid lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1 items-center
          lg:px-32 md:px-10 sm: px-5 py-10 bg-[#5A287F] text-white"
      >
        {/* title section  */}
        <div>
          <h1
            style={{ fontFamily: "Sumana, serif" }}
            className="font-bold text-5xl mb-2"
          >
            About Us
          </h1>
          <p style={{ fontFamily: "Ubuntu,sans-serif" }} className="text-xl ">
            Your Partner for Project Success
          </p>
          <p
            
            className="text-lg my-5"
          >
            Founded in 2019, SoftPlatoon is a US-based provider of IT consulting
            and software development services. Clients respect us for unfailing
            budget and time control, cooperation transparency, and consistently
            high service quality..
          </p>
        </div>
        {/* image section  */}
        <div className="py-5 md:flex justify-end sm: block">
          <img src={img} alt="" />
        </div>
      </div>
      {/* information text  */}
      <div className="lg:mx-32 md:mx-10 sm: mx-5 py-20 lg:flex md:flex sm: block gap-5 ">
        <div className="md:w-[250px] md:h-[320px] p-5 bg-[#59287f1c] flex justify-center">
          <div>
            <img className="w-[250px]" src={CEO} alt="" />
            <h1
              className="mt-2 font-semibold text-xl text-center underline hover:text-purple-400"
              style={{ fontFamily: "Open Sans,sans-serif" }}
            >
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/mosleh-tarek-88679313b/"
              >
                Mosleh Tarek
              </Link>
            </h1>
            <p
              className="mt-2  text-lg text-center "
              style={{ fontFamily: "Ubuntu,sans-serif" }}
            >
              CEO at Softplatoon
            </p>
          </div>
        </div>
        <div className="md:w-2/3 sm: w-full">
          <p
            className="mt-2  text-xl text-start leading-[50px]"
            style={{ fontFamily: "Ubuntu,sans-serif" }}
          >
            Welcome to softPlatoon, where innovation meets excellence in
            software development. Founded on the principles of quality,
            creativity, and collaboration, we are dedicated to transforming
            ideas into impactful digital solutions.
            <br />
            At softPlatoon, we specialize in crafting custom software tailored
            to meet the unique needs of our clients across various industries.
            Our talented team of developers, designers, and strategists
            harnesses the latest technologies and methodologies to deliver
            robust, scalable, and user-friendly applications.
            <br />
            We believe in building lasting partnerships with our clients,
            guiding them through every step of the development process—from
            initial concept to deployment and beyond. Our commitment to
            transparency and communication ensures that you are always in the
            loop, empowering you to make informed decisions.
            <br />
            Our mission is to empower businesses by providing innovative
            software solutions that drive growth and efficiency. Whether you are
            a startup looking to establish your digital presence or an
            established enterprise seeking to enhance your operations,
            softPlatoon is here to help you navigate the digital landscape.
            <br />
            Join us on this journey of innovation, and let’s create something
            extraordinary together.
          </p>
        </div>
      </div>
      {/* Contact section  */}
      <HomeContact/>
    </div>
  );
};

export default AboutUs;
