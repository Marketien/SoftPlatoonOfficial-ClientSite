// eslint-disable-next-line react/prop-types
const SwedenTabPanel3 = ({ language }) => {
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
            ? "Molnbaserade programvarulösningar"
            : "Cloud-Based Software Solutions"}
        </h2>
        <p className="font-medium md:text-lg sm: text-md leading-8 mt-5">
          {language === "sv"
            ? 
            "I takt med att fler företag övergår till molnet har vi positionerat oss som experter inom molnbaserad programvaruutveckling i Sverige. Vi designar och implementerar molnbaserade programvarulösningar som erbjuder flexibilitet, skalbarhet och förbättrad säkerhet för företag av alla storlekar. Våra utvecklare utnyttjar ledande molnplattformar som AWS, Google Cloud och Microsoft Azure för att skapa lösningar som kan skalas enkelt i takt med att ditt företag växer.Våra molnlösningar säkerställer sömlös integration med din befintliga infrastruktur, vilket resulterar i minskade driftkostnader, förbättrad prestanda och möjligheten att komma åt dina system var som helst, när som helst. Oavsett om du migrerar till molnet eller bygger nya molnbaserade applikationer, säkerställer vi en smidig och säker övergång."
            : 
            "As more businesses transition to the cloud, we’ve positioned ourselves as an expert cloud-based software developer Sweden. We design and implement cloud-based software solutions that provide flexibility, scalability, and enhanced security for businesses of all sizes. Our developers leverage leading cloud platforms like AWS, Google Cloud, and Microsoft Azure to create solutions that can scale effortlessly as your business grows.Our cloud solutions ensure seamless integration with your existing infrastructure, resulting in reduced operating costs, improved performance, and the ability to access your systems from anywhere, at any time. No matter whether you are migrating to the cloud or building new cloud-native applications, we ensure a smooth and secure transition."}
        </p>
      </div>
    </div>
  );
};

export default SwedenTabPanel3;
