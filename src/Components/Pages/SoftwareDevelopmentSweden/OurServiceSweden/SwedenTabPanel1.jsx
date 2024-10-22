const SwedenTabPanel1 = ({ language }) => {
  return (
    <div className=" bg-white ">
      <div
        className="md:px-5 sm: px-4 md:py-0 sm: py-10 lg:h-full md:h-[600px] sm: h-[750px]"
        style={{ fontFamily: "Open Sans,sans-serif" }}
      >
        <h2
          style={{ fontFamily: "Ubuntu,sans-serif" }}
          className="font-bold text-2xl mt-8 text-purple-900"
        >
         {language === "sv" ? "Skräddarsydda Programvarulösningar" : "Custom Software Solutions"}
        </h2>
        <p className="font-medium md:text-lg sm: text-md leading-8 mt-5">
          {language === "sv"
            ? "Som en ledande programvaruutvecklare i Sverige utvecklar vi skräddarsydda programvara anpassade för att möta behoven hos ditt företag. För att uppnå dina mål arbetar vi nära med dig för att utveckla programvara som automatiserar processer, förbättrar kundupplevelsen eller ökar den operativa effektiviteten. Våra skräddarsydda lösningar är skalbara och flexibla, vilket gör att de växer med ditt företag.Vi fokuserar på att leverera högkvalitativ programvara som inte bara uppfyller dina omedelbara behov utan också ger långsiktigt värde. Från den första konsultationen till implementeringen säkerställer vårt team att varje projekt hanteras med precision och omsorg."
            : "As a leading software developer in Sweden, we develop custom software tailored to meet the needs of your business. In order to meet your goals, we work closely with you to develop software that automates processes, improves customer experience, or improves operational efficiency. Scalable and flexible, our custom solutions grow with your business.We focus on delivering high-quality software that not only meets your immediate needs but also provides long-term value. From initial consultation to deployment, our team ensures every project is handled with precision and care."}
        </p>
      </div>
    </div>
  );
};

export default SwedenTabPanel1;
