// eslint-disable-next-line react/prop-types
const SwedenTabPanel2 = ({ language }) => {
  return (
    <div className=" bg-white ">
      <div
        className={`md:px-5 sm: px-4 md:py-0 sm: pb-20 lg:h-full md:h-[600px]
          ${language === "sv" ? "sm: h-[950px]" : " sm: h-[880px]"}`}
        style={{ fontFamily: "Open Sans,sans-serif" }}
      >
        <h2
          style={{ fontFamily: "Ubuntu,sans-serif" }}
          className="font-bold text-2xl mt-8 text-purple-900"
        >
          {language === "sv"
            ? "Företag Programvaruutveckling"
            : "Enterprise Software Development"}
        </h2>
        <p className="font-medium md:text-lg sm: text-md leading-8 mt-5">
          {language === "sv"
            ? "Soft Platoon är också en utvecklare av företags programvara i Sverige och erbjuder robusta lösningar för stora företag. Vår programvara integreras sömlöst med dina befintliga system, vilket förbättrar din verksamhets operativa kapabiliteter.Våra företagslösningar är byggda för att hantera komplexa arbetsflöden, stora datamängder och varierande användarbehov. Vi designar programvara som är i linje med dina affärsprocesser, vilket ökar effektiviteten, strömlinjeformar verksamheten och förbättrar samarbetet mellan teamen. Våra lösningar är både säkra och skalbara, oavsett om du behöver ett fullskaligt företagssystem eller förbättringar av din nuvarande uppsättning."
            : "Soft Platoon is also an enterprise software developer Sweden, offering robust solutions for large companies. Our software integrates seamlessly with your existing systems, enhancing the operational capabilities of your business.Our enterprise solutions are built to handle complex workflows, large data volumes, and diverse user needs. We design software that aligns with your business processes, Efficiencies are increased, operations are smoothed out, and collaboration between teams is enhanced. Our solutions are both secure and scalable, whether you require a full-scale enterprise system or enhancements to your current setup"}
        </p>
      </div>
    </div>
  );
};

export default SwedenTabPanel2;
