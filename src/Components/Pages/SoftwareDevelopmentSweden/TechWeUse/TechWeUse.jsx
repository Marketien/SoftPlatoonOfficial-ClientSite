import { useState } from "react";
import img1 from "../../../../../src/assets/TechIcons/phython.png";
import img2 from "../../../../../src/assets/TechIcons/javaa.png";
import img3 from "../../../../../src/assets/TechIcons/Microsoft_.NET_logo.svg.png";
import img4 from "../../../../../src/assets/TechIcons/3.C++.png";
import img5 from "../../../../../src/assets/TechIcons/react.png";
import img6 from "../../../../../src/assets/TechIcons/angular.png";
import img7 from "../../../../../src/assets/TechIcons/10.VueJs.png";
import img8 from "../../../../../src/assets/TechIcons/django-icon.png";
import img9 from "../../../../../src/assets/TechIcons/Amazon_Web_Services-Logo.png" ;
import img10 from "../../../../../src/assets/TechIcons/Microsoft_Azure.png";
import img11 from "../../../../../src/assets/TechIcons/17.GoogleCloud.png";
import { IoIosArrowDown } from "react-icons/io";

const programmingLang = [
  {
    img: img1,
    title: "Python",
    svDisc:
      "Känd för sin enkelhet och mångsidighet, är Python idealiskt för att utveckla både webapplikationer och datadrivna lösningar.",
    enDisc:
      "Known for its simplicity and versatility, Python is ideal for developing both web applications and data-driven solutions.",
  },
  {
    img: img2,
    title: "Java",
    svDisc:
      "Ett allmänt använt språk för företagsapplikationer, där stabiliteten och skalbarheten hos Java gör det till ett toppval för komplexa system.",
    enDisc:
      "A widely-used language for enterprise-level applications, Java’s stability and scalability make it a top choice for complex systems.",
  },
  {
    img: img3,
    title: ".NET",
    svDisc:
      "Med sitt rika ekosystem tillåter .NET oss att skapa kraftfulla applikationer över olika plattformar.",
    enDisc:
      "With its rich ecosystem, .NET allows us to create powerful applications across various platforms.",
  },
  {
    img: img4,
    title: "C++",
    svDisc:
      "Detta högpresterande språk är perfekt för applikationer som kräver omfattande resurshantering och snabbhet.",
    enDisc:
      "This high-performance language is perfect for applications requiring extensive resource management and speed.",
  },
];
const frameworks = [
  {
    img: img5,
    title: "ReactJs",
    svDisc:
      "Som ett av de mest populära JavaScript-biblioteken möjliggör React att vi kan skapa dynamiska användargränssnitt som förbättrar användarupplevelsen",
    enDisc:
      "As one of the most popular JavaScript libraries, React enables us to create dynamic user interfaces that enhance user experience.",
  },
  {
    img: img6,
    title: "AngularJs",
    svDisc:
      "Detta ramverk hjälper oss att bygga skalbara och underhållsvänliga enkelsidiga applikationer, vilket säkerställer en smidig upplevelse för användarna.",
    enDisc:
      "This framework helps us build scalable and maintainable single-page applications, ensuring a smooth experience for users.",
  },
  {
    img: img7,
    title: "VueJs",
    svDisc:
      "Vue.js är mycket uppskattat för sin prestanda och enkla integration med befintliga projekt.",
    enDisc:
      "Vue.js is widely appreciated for its performance and ease of integration with existing projects.",
  },
  {
    img: img8,
    title: "Django",
    svDisc:
      "Även om det främst är ett backend-ramverk, tillåter Django snabb utveckling och ren, pragmatisk design, vilket gör det till ett utmärkt val för att bygga komplexa webbapplikationer.",
    enDisc:
      "While primarily a backend framework, Django allows for rapid development and clean, pragmatic design, making it an excellent choice for building complex web applications.",
  },
];
const clouds = [
  {
    img: img9,
    title: "Amazon Web Services",
    svDisc:
      "Med sitt omfattande utbud av molntjänster gör AWS det möjligt för oss att bygga säkra, skalbara och flexibla applikationer som uppfyller dina affärskrav.",
    enDisc:
      "With its comprehensive suite of cloud services, AWS allows us to build secure, scalable, and flexible applications that meet your business requirements.",
  },
  {
    img: img10,
    title: "Azure",
    svDisc:
      "Som Microsofts molnplattform erbjuder Azure kraftfulla verktyg för utveckling, testning och implementering av applikationer, vilket säkerställer sömlös integration med befintliga system.",
    enDisc:
      "As Microsoft’s cloud platform, Azure offers powerful tools for developing, testing, and deploying applications, ensuring seamless integration with existing systems.",
  },
  {
    img: img11,
    title: "Google Cloud",
    svDisc:
      "Känd för sina dataanalys- och maskininlärningsfunktioner, gör Google Cloud det möjligt för oss att skapa datadrivna applikationer som ger värdefulla insikter.",
    enDisc:
      "Known for its data analytics and machine learning capabilities, Google Cloud enables us to create data-driven applications that provide valuable insights.",
  },
];

// eslint-disable-next-line react/prop-types
const TechWeUse = ({ language }) => {
  const [openPl, setOpenPl] = useState(null);
  const [openFr, setOpenFr] = useState(null);
  const [openCl, setOpenCl] = useState(null);

  const dropdownPL = (index) => {
    setOpenFr(null);
    setOpenCl(null);
    setOpenPl((prevIndex) => (prevIndex === index ? null : index));
  };

  const dropdownFr = (index) => {
    setOpenPl(null);
    setOpenCl(null);
    setOpenFr((prevIndex) => (prevIndex === index ? null : index));
  };
  const dropdownCl = (index) => {
    setOpenPl(null);
    setOpenFr(null);
    setOpenCl((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className=" py-[60px] lg:mx-auto md:mx-7 sm: mx-4 md:text-start sm: text-center">
      <div
        style={{ fontFamily: "Open Sans, sans-serif" }}
        className=" lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-7 sm: mx-4"
      >
        <h1
          style={{ fontFamily: "Sumana,serif" }}
          className="font-bold text-5xl mb-5"
        >
          {language === "sv" ? (
            <>
              Technologier vi
              <span className="text-purple-900 ms-1 "> använder</span>
            </>
          ) : (
            <>
              Technologies We
              <span className="text-purple-900 ms-1 "> Use</span>
            </>
          )}
        </h1>
        <p className="text-xl">
          {language === "sv"
            ? "Vårt mål på Soft Platoon är att erbjuda innovativa, effektiva och skalbara mjukvarulösningar anpassade till dina affärsbehov genom att utnyttja moderna teknologier. Vårt team av expertutvecklare är kunniga i ett brett utbud av programmeringsspråk, ramverk och verktyg som säkerställer högkvalitativa resultat för varje projekt."
            : "Our goal at Soft Platoon is to provide you with innovative, efficient, and scalable software solutions tailored to your business needs by leveraging modern technologies. Our team of expert developers is proficient in a range of programming languages, frameworks, and tools that ensure high-quality results for every project."}
        </p>
        {/* <<<<<<<<<<<<< Programming Language  section >>>>>>>>>>>> */}
        <div className="mt-8">
          <h1 className="font-semibold text-2xl">
            {language === "sv"
              ? "Programmering sspråk "
              : "Programming Languages "}
          </h1>
          <p
            className="text-lg mt-3 "
            style={{ fontFamily: "Ubuntu,sans-serif" }}
          >
            {language === "sv"
              ? "Vi använder en mängd olika programmeringsspråk för att bygga robusta applikationer, inklusive:"
              : "We utilize a variety of programming languages to build robust applications, including:"}
          </p>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm: grid-cols-1 gap-3 mt-5">
            {programmingLang.map(({ img, title, svDisc, enDisc }, index) => (
              <div key={index}>
                <div className="flex items-center md:justify-start sm: justify-center gap-2 mt-2">
                  <div>
                    <img
                      className="w-[60px] bg-gray-200 rounded-md"
                      src={img}
                      alt=""
                    />
                  </div>
                  <div
                    onClick={() => dropdownPL(index)}
                    className="font-semibold md:flex sm: hidden items-center gap-2 "
                  >
                    <span>
                      {language === "sv" ? <>{title}</> : <>{title}</>}
                    </span>{" "}
                    <IoIosArrowDown />
                  </div>
                </div>
                <div
                  onClick={() => dropdownPL(index)}
                  className=" font-semibold md:hidden items-center sm: flex justify-center mt-3"
                >
                  <span>{language === "sv" ? <>{title}</> : <>{title}</>}</span>{" "}
                  <IoIosArrowDown />
                </div>
                {openPl === index ? (
                  <div className="border border-gray-200 max-w-sm rounded-md p-2 ">
                    <p style={{ fontFamily: "Ubuntu,sans-serif" }}>
                      {language === "sv" ? <>{svDisc}</> : <>{enDisc}</>}
                    </p>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* <<<<<<<<<<<<< FrontEnd Frameworks section >>>>>>>>>>>> */}
        <div className="mt-8">
          <h1 className="font-semibold text-2xl">
            {language === "sv"
              ? "Frontend ramverk "
              : "Frontend Frameworks "}
          </h1>
          <p
            className="text-lg mt-3 "
            style={{ fontFamily: "Ubuntu,sans-serif" }}
          >
            {language === "sv"
              ? "Vår frontend-utvecklingsexpertis inkluderar:"
              : "Our frontend development expertise includes:"}
          </p>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm: grid-cols-1 gap-3 mt-5">
            {frameworks.map(({ img, title, svDisc, enDisc }, index) => (
              <div key={index}>
                <div className="flex items-center md:justify-start sm: justify-center gap-2 mt-2">
                  <div>
                    <img
                      className="w-[60px] bg-gray-200 rounded-md"
                      src={img}
                      alt=""
                    />
                  </div>
                  <div
                    onClick={() => dropdownFr(index)}
                    className="font-semibold md:flex sm: hidden items-center gap-2 "
                  >
                    <span>
                      {language === "sv" ? <>{title}</> : <>{title}</>}
                    </span>{" "}
                    <IoIosArrowDown />
                  </div>
                </div>
                <div
                  onClick={() => dropdownFr(index)}
                  className=" font-semibold md:hidden items-center sm: flex justify-center mt-3"
                >
                  <span>{language === "sv" ? <>{title}</> : <>{title}</>}</span>{" "}
                  <IoIosArrowDown />
                </div>
                {openFr === index ? (
                  <div className="border border-gray-200 max-w-sm rounded-md p-2 ">
                    <p style={{ fontFamily: "Ubuntu,sans-serif" }}>
                      {language === "sv" ? <>{svDisc}</> : <>{enDisc}</>}
                    </p>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* <<<<<<<<<<<<< Cloud Technologies  section >>>>>>>>>>>> */}
        <div className="mt-8">
          <h1 className="font-semibold text-2xl">
            {language === "sv"
              ? "Molnteknologier"
              : "Cloud Technologies"}
          </h1>
          <p
            className="text-lg mt-3 "
            style={{ fontFamily: "Ubuntu,sans-serif" }}
          >
            {language === "sv"
              ? "För molnbaserade lösningar använder vi kraften från ledande molnplattformar:"
              : "For cloud-based solutions, we harness the power of leading cloud platforms:"}
          </p>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm: grid-cols-1 gap-3 mt-5">
            {clouds.map(({ img, title, svDisc, enDisc }, index) => (
              <div key={index}>
                <div className="flex items-center md:justify-start sm: justify-center gap-2 mt-2">
                  <div>
                    <img
                      className="w-[60px] bg-gray-200 rounded-md"
                      src={img}
                      alt=""
                    />
                  </div>
                  <div
                    onClick={() => dropdownCl(index)}
                    className="font-semibold md:flex sm: hidden items-center gap-2 "
                  >
                    <span>
                      {language === "sv" ? <>{title}</> : <>{title}</>}
                    </span>{" "}
                    <IoIosArrowDown />
                  </div>
                </div>
                <div
                  onClick={() => dropdownCl(index)}
                  className=" font-semibold md:hidden items-center sm: flex justify-center mt-3"
                >
                  <span>{language === "sv" ? <>{title}</> : <>{title}</>}</span>{" "}
                  <IoIosArrowDown />
                </div>
                {openCl === index ? (
                  <div className="border border-gray-200 max-w-sm rounded-md p-2 ">
                    <p style={{ fontFamily: "Ubuntu,sans-serif" }}>
                      {language === "sv" ? <>{svDisc}</> : <>{enDisc}</>}
                    </p>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechWeUse;
