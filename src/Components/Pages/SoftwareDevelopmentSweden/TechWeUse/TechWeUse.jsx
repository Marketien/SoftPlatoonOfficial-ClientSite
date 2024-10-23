import { useState } from "react";
import img1 from "../../../../../src/assets/TechIcons/phython.png";
import img2 from "../../../../../src/assets/TechIcons/javaa.png";
import img3 from "../../../../../src/assets/TechIcons/Microsoft_.NET_logo.svg.png";
import img4 from "../../../../../src/assets/TechIcons/3.C++.png";
import img5 from "../../../../../src/assets/TechIcons/react.png";
import img6 from "../../../../../src/assets/TechIcons/angular.png";
import img7 from "../../../../../src/assets/TechIcons/10.VueJs.png";
import img8 from "../../../../../src/assets/TechIcons/django-icon.png";
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
    img: img1,
    title: "ReactJs",
    svDisc:
      "Som ett av de mest populära JavaScript-biblioteken möjliggör React att vi kan skapa dynamiska användargränssnitt som förbättrar användarupplevelsen",
    enDisc:
      "As one of the most popular JavaScript libraries, React enables us to create dynamic user interfaces that enhance user experience.",
  },
  {
    img: img2,
    title: "AngularJs",
    svDisc:
      "Detta ramverk hjälper oss att bygga skalbara och underhållsvänliga enkelsidiga applikationer, vilket säkerställer en smidig upplevelse för användarna.",
    enDisc:
      "This framework helps us build scalable and maintainable single-page applications, ensuring a smooth experience for users.",
  },
  {
    img: img3,
    title: "VueJs",
    svDisc: "Vue.js är mycket uppskattat för sin prestanda och enkla integration med befintliga projekt.",
    enDisc: "Vue.js is widely appreciated for its performance and ease of integration with existing projects.",
  },
  {
    img: img4,
    title: "Django",
    svDisc:
      "Även om det främst är ett backend-ramverk, tillåter Django snabb utveckling och ren, pragmatisk design, vilket gör det till ett utmärkt val för att bygga komplexa webbapplikationer.",
    enDisc:
      "While primarily a backend framework, Django allows for rapid development and clean, pragmatic design, making it an excellent choice for building complex web applications.",
  },
];

// eslint-disable-next-line react/prop-types
const TechWeUse = ({ language }) => {
  const [open, setOpen] = useState(null);

  const dropdownPL = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
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
                {open === index ? (
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
                {open === index ? (
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
