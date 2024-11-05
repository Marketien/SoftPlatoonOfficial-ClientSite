import { Link } from "react-router-dom";
import img1 from "../../../assets/Images/Software.png";
import OurServiceSweden from "./OurServiceSweden/OurServiceSweden";
import RecentProjectSweden from "./RecentProjectSweden/RecentProjectSweden";
import { useState } from "react";
import DevelopmentProcessSweden from "./DevelopmentProcessSweden/DevelopmentProcessSweden";
import TechWeUse from "./TechWeUse/TechWeUse";
import SwedenFAQ from "./SwedenFAQ/SwedenFAQ";
import SwedenContact from "./SwedenContact/SwedenContact";
import translateLogo1 from "../../../assets/Icons/softplatoon-gradient-logo.png";
import translateLogo2 from "../../../assets/Icons/softplatoon-white-logo.png";

const SoftwareDevelopmentSweden = () => {
  const [language, setLanguage] = useState("sv");

  // Handle language change logic
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    document.documentElement.lang = lang;
  };

  return (
    <div className="relative lg:mt-[90px] md:mt-[90px] sm: mt-[80px]">
      {/* ---------------------------- Banner Section ----------------------------------- */}
      <div
        className="relative grid lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1 items-center
          lg:px-32 md:px-10 sm: px-5 py-10 bg-[#5A287F] text-white md:text-start sm: text-center"
      >
        {/* title section  */}
        <div>
          <h1
            style={{ fontFamily: "Sumana, serif" }}
            className="font-bold md:text-5xl sm: text-4xl mb-2"
          >
            {language === "sv"
              ? "Mjukvaruutvecklare Sverige"
              : "Software Developer Sweden"}
          </h1>
          <p style={{ fontFamily: "Ubuntu,sans-serif" }} className="text-xl ">
            {language === "sv"
              ? "Din partner för digital framgång"
              : "Your Partner for Digital Success"}
          </p>
          <p className="text-lg my-5">
            {language === "sv"
              ? "Grundat 2019, är Soft Platoon en av Sveriges ledande mjukvaruutvecklare som är dedikerad till att ge företag möjlighet att blomstra i dagens digitala värld genom att erbjuda innovativa och skräddarsydda mjukvarulösningar. Vårt team av erfarna utvecklare kombinerar teknisk expertis med en djup förståelse för olika affärskrav. Vi specialiserar oss på att skapa skräddarsydd mjukvara som effektiviserar verksamheten, ökar produktiviteten och driver tillväxt. Oavsett om du är en startup som vill lansera din första applikation eller ett etablerat företag som vill uppgradera dina befintliga system, är Soft Platoon din betrodda partner för att förvandla idéer till effektiva digitala lösningar."
              : "Founded in 2019, Soft Platoon is one of Sweden's leading software developers dedicated to empowering businesses to thrive in today's digital world by providing innovative and tailored software solutions. Our team of experienced developers combines technical expertise with a deep understanding of various business requirements. We specialize in creating custom software that streamlines operations, enhances productivity, and drives growth. Whether you’re a startup looking to launch your first application or an established enterprise seeking to upgrade your existing systems, Soft Platoon is your trusted partner for transforming ideas into impactful digital solutions."}
          </p>
          <button
            title="contact us"
            className="btn bg-white text-[#5A287F] hover:bg-[#5A287F] hover:text-white"
          >
            <Link to="https://wa.me/8801540380460" target="_blank">
              {language === "en" ? "Contact Us" : "Kontakta oss"}
            </Link>
          </button>
        </div>
        {/* image section  */}
        <div className="flex md:justify-end py-5">
          <img src={img1} alt="" />
        </div>
      </div>

      {/* Content section  */}
      <div className=" py-20 ">
        {/* Our service seciton  */}
        <OurServiceSweden language={language} />
      </div>
      {/* Recent Projects seciton  */}
      <div className="bg-white py-20">
        <RecentProjectSweden language={language} />
      </div>
      {/* Projects Process seciton  */}
      <div className=" py-20">
        <DevelopmentProcessSweden language={language} />
      </div>
      {/*  Technologies  Use seciton  */}
      <div className="bg-white py-20">
        <TechWeUse language={language} />
      </div>
      {/* FAQ seciton  */}
      <div className="py-20">
        <SwedenFAQ language={language} />
      </div>
      {/*  Contact seciton  */}
      <div className="bg-white py-0">
        <SwedenContact language={language} />
      </div>

   {/* ---------------------------- Translate Modal ----------------------------------- */}
      <div className="fixed bottom-24 right-4 text-center ">
        <div className=" bg-gradient-to-r from-[#5A287F] via-[#84207E]  to-[#723988] p-2 rounded-3xl mb-1">
          <div
          onClick={() => handleLanguageChange("sv")}
          className={` flex justify-center items-center gap-1
              rounded-full font-semibold py-1 px-2 ${
            language === "en" ? "text-white" : "bg-white "
          }`}
          >
            <div>
              <img className="w-[20px]" src= {language === "en" ? translateLogo2 : translateLogo1} alt="" />
            </div>
            <div>
              <h1>Swedish</h1>
            </div>
          </div>
        </div>
        <div className=" bg-gradient-to-r from-[#5A287F] via-[#84207E]  to-[#723988] p-2 rounded-3xl">
          <div
           onClick={() => handleLanguageChange("en")}
          className={` flex justify-center items-center gap-1
              rounded-full font-semibold py-1 px-2 ${
            language === "sv" ? "text-white" : "bg-white"
          }`}
          >
            <div>
              <img className="w-[20px]" src= {language === "en" ? translateLogo1 : translateLogo2} alt="" />
            </div>
            <div>
              <h1>English</h1>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default SoftwareDevelopmentSweden;
