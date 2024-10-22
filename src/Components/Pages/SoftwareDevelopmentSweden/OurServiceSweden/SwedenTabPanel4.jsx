// eslint-disable-next-line react/prop-types
const SwedenTabPanel4 = ({ language }) => {
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
          {language === "sv"
            ? "Tjänster för programvaruintegration"
            : "Software Integration Services"}
        </h2>
        <p className="font-medium md:text-lg sm: text-md leading-8 mt-5">
          {language === "sv"
            ? "På Soft Platoon specialiserar sig vårt team av programvaruutvecklare i Sverige på att integrera ny programvara med tredjepartsapplikationer, APIoch befintliga system. Vårt team förstår hur avgörande det är för företag att ha system som kommunicerar och fungerar sömlöst.Våra integreringstjänster säkerställer att din nya programvara fungerar perfekt tillsammans med dina befintliga verktyg och plattformar. Oavsett om det handlar om ett CRM, ERP eller en skräddarsydd intern applikation, erbjuder vi robusta integrationslösningar som eliminerar silos och strömlinjeformar arbetsflöden, vilket hjälper ditt företag att fungera mer effektivt"
            : "At Soft Platoon, our software developer Sweden team, specializes in integrating new software with third-party applications, APIs, and legacy systems. Our team understands how critical it is for businesses to have systems that communicate and operate seamlessly.Our integration services ensure that your new software works perfectly alongside your existing tools and platforms. Whether it’s a CRM, ERP, or custom in-house application, we provide robust integration solutions that eliminate silos and streamline workflows, helping your business operate more efficiently"}
        </p>
      </div>
    </div>
  );
};

export default SwedenTabPanel4;
