const data = [
  {
    svTitle: "Konsultation och Planering",
    svDisc:
      "Det första steget i vår programvaruutveckling process är att förstå dina affärsbehov. Under denna fas samlar vårt team av erfarna programvaruutvecklare Sverige in krav, identifierar utmaningar och definierar projektmål tillsammans med dig. Vi tror att skapandet av effektiva skräddarsydda programvarulösningar kräver en solid förståelse för det aktuella problemet. Genom att lyssna på och analysera dina mål säkerställer vi att utvecklingsprocessen helt och hållet överensstämmer med dina mål.",

    enTitle: "Consultation and Planning",
    enDisc:
      "The first step in our software development process is to understand your business needs. During this phase, our team of experienced software developer Sweden gathers requirements, identifies challenges, and defines project objectives with you. We believe that the building of effective custom software solutions requires a solid understanding of the problem at hand. As a result of listening and analyzing your goals, we ensure that the development process aligns perfectly with your objectives.Here's the translation of your content into Swedish:",
  },
  {
    svTitle: "Design och Prototyping",
    svDisc:
      "När vi har fått en tydlig förståelse för dina krav inleder vi design- och prototypprocessen. Som en del av denna process skapar vårt mjukvaruutvecklare team detaljerade designmockups och interaktiva prototyper som hjälper till att visualisera den slutgiltiga funktionen av mjukvaran. Det är i detta skede som du kan se layouten, funktionerna och användargränssnittet, vilket ger dig en möjlighet att ge feedback och göra justeringar innan utvecklingen påbörjas. Genom att integrera din input tidigt i processen kan vi förfina designen för att bättre uppfylla dina förväntningar och säkerställa en användarvänlig upplevelse för dig.",

    enTitle: "Design and Prototyping",
    enDisc:
      "Upon receiving a clear understanding of your requirements, we begin the design and prototyping process. As part of this process, our software developer Sweden team creates detailed design mockups and interactive prototypes that help visualize the final functionality of the software. It is at this stage that you are able to view the layout, features, and user interface, providing you with an opportunity for feedback and adjustments before development begins. Incorporating your input early on will allow us to refine the design to better meet your expectations, ensuring a user-friendly experience for you.",
  },
  {
    svTitle: "Utveckling och Testning",
    svDisc:
      "När designen har godkänts går vi vidare till utvecklings- och testning faserna. Med hjälp av moderna programmeringsspråk och ramverk utvecklar vårt erfarna team av mjukvaruutvecklare Sverige team mjukvaran i enlighet med den godkända designen. Denna fas är avgörande för att säkerställa mjukvarans kvalitet och funktionalitet. Vi genomför rigorösa tester under hela utvecklingsprocessen för att identifiera och åtgärda eventuella problem innan lanseringen. Genom att leverera en robust och anpassad mjukvarulösning säkerställer vi att vi uppfyller dina behov och överträffar dina förväntningar.",

    enTitle: "Development and Testing",
    enDisc:
      "Once the design has been approved, we will proceed to the development and testing stages. Using modern programming languages and frameworks, our experienced software developer Sweden team develops the software in accordance with the approved design. This phase is critical to ensuring the quality and functionality of the software. We conduct rigorous testing throughout the development process in order to identify and resolve any issues before launch. By delivering a robust, customized software solution, we ensure that we meet your needs and exceed your expectations. ",
  },
  {
    svTitle: "Distribution och Underhåll",
    svDisc:
      "Den sista fasen av vår programvaruutveckling process är distribution och underhåll. När programvaran har klarat alla kvalitetskontroller lanserar vi den för ditt företag. Men vårt engagemang slutar inte där. Vi erbjuder fortlöpande support och underhåll för att säkerställa att programvaran fortsätter att fungera smidigt och effektivt över tid. Oavsett om du behöver uppdateringar, buggfixar eller förbättringar, finns vårt team alltid tillgängligt för att hjälpa dig anpassa dig till föränderliga affärsbehov och tekniska framsteg.",

    enTitle: "Deployment and Maintenance",
    enDisc:
      "The final stage of our software development process is deployment and maintenance. Once the software has passed all quality assurance tests, we launch it for your business. But our commitment doesn’t end there. We provide ongoing support and maintenance to ensure the software continues to operate smoothly and effectively over time. Whether you need updates, bug fixes, or enhancements, our team remains available to help you adapt to changing business needs and technological advancements.",
  },
];

// eslint-disable-next-line react/prop-types
const DevelopmentProcessSweden = ({ language }) => {
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
              Vår Programvaru utvecklings
              <span className="text-purple-900 ms-1 "> process</span>
            </>
          ) : (
            <>
              Our Software Development
              <span className="text-purple-900 ms-1 "> Process</span>
            </>
          )}
        </h1>
        <p className="text-xl">
          {language === "sv"
            ? "Vi på Soft Platoon tror på en strukturerad metod för programvaruutveckling som säkerställer kvalitet, effektivitet och anpassning till våra kunders mål. Vår process omfattar fyra nyckelstadier: Konsultation och Planering, Design och Prototyping, Utveckling och Testning samt Implementering och Underhåll. Varje fas är utformad för att leverera skräddarsydda lösningar som uppfyller dina unika affärsbehov."
            : "We at Soft Platoon believe in a structured approach to software development that ensures quality, efficiency, and alignment with our clients' goals. Our process comprises four key stages: Consultation and Planning, Design and Prototyping, Development and Testing, and Deployment and Maintenance. Each phase is designed to deliver tailored solutions that meet your unique business needs."}
        </p>
        {/* map section  */}
        <div>
          {data.map(({ svTitle, svDisc, enTitle, enDisc }, index) => (
            <div key={index} className="mt-8">
              <h1
                style={{ fontFamily: "Open Sans, sans-serif" }}
                className="text-3xl font-semibold hover:text-[#793ea7] mb-5"
              >
                {language === "sv" ? <>{svTitle}</> : <>{enTitle}</>}
              </h1>
              <p
                style={{ fontFamily: "Ubuntu,sans-serif" }}
                className="text-lg "
              >
                {language === "sv" ? <>{svDisc}</> : <>{enDisc}</>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevelopmentProcessSweden;
