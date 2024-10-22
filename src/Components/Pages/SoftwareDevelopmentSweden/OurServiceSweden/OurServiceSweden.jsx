import SwedenTab from "./SwedenTab";
// eslint-disable-next-line react/prop-types
const OurServiceSweden = ({ language }) => {
  console.log("language", language);
  return (
    <div
      className="px-3 py-5 lg:max-w-6xl md:max-w-3xl
       sm: max-w-sm mx-auto "
    >
      <h1
        style={{ fontFamily: "Sumana, serif" }}
        className=" font-bold text-5xl mb-2 lg:mx-auto md:mx-4 sm: mx-4"
      >
        {language === "sv" ? (
          <>
            Våra programvaru utveckling{" "}
            <span className="text-purple-800">tjänster</span>
          </>
        ) : (
          <>
            Our Software Development{" "}
            <span className="text-purple-800">Services</span>
          </>
        )}
      </h1>
      <h3
        style={{ fontFamily: "Ubuntu,sans-serif" }}
        className="text-lg my-5 lg:mx-auto md:mx-4 sm: mx-4"
      >
        {language === "sv"
          ? "Vi erbjuder ett omfattande utbud av programvaruutveckling tjänster anpassade efter Sveriges unika affärsbehov. Vi tillhandahåller skalbara, pålitliga lösningar som driver tillväxt och effektivitet. Vi erbjuder följande nyckeltjänster:"
          : "We offer a comprehensive range of software development services tailored to Sweden's unique business needs. We provide scalable, reliable solutions that drive growth and efficiency. We offer the following key services:"}
      </h3>
      {/* ------------------------  Tab Section ------------------------ */}
      <div>
        <SwedenTab language={language}/>
      </div>
    </div>
  );
};

export default OurServiceSweden;
