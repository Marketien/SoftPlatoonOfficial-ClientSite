import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";

const questions = [
  {
    svQuestion:
      "Hur mycket kostar det att anlita en mjukvaruutvecklare i Sverige?",
    svAnswer:
      "Att anlita en mjukvaruutvecklare i Sverige kan vara ganska dyrt beroende på flera faktorer, såsom projektets komplexitet och utvecklarens erfarenhet. Generellt sett kan du förvänta dig att betala mellan 500 och 1500 SEK per timme. Soft Platoon, till exempel, erbjuder fastprisavtal baserat på projektets omfattning för större projekt. För en skräddarsydd uppskattning är det bäst att kontakta oss direkt.",
    enQuestion: "How much does it cost to hire a software developer in Sweden?",
    enAnswer:
      "Hiring a software developer in Sweden can be very expensive depending on several factors, such as the complexity of your project and the developer's experience. In general, you can expect to pay between 500 and 1500 SEK per hour. Soft Platoon, for example, offers fixed-price contracts based on project scope for larger projects. For a tailored estimate, it's best to contact us directly.",
  },
  {
    svQuestion: "Hur lång är en typisk projekttid?",
    svAnswer:
      "Tidslinjen för ett mjukvaruutvecklingsprojekt kan variera beroende på dess omfattning och komplexitet. Ett enkelt projekt kan ta några veckor, medan mer omfattande och komplexa lösningar kan ta flera månader. Som ett pålitligt mjukvaruutvecklingsföretag i Sverige följer Soft Platoon en strukturerad utvecklingsprocess som inkluderar konsultation, design, utveckling och testning. Vår första konsultation kan ge dig en mer exakt tidslinje baserat på dina specifika projektbehov.",
    enQuestion: "What is the typical project timeline?",
    enAnswer:
      "A software development project's timeline can vary depending on its scope and complexity. It may take a few weeks for a simple project, while more extensive and complex solutions may take several months. As a reliable software development company in Sweden, Soft Platoon follows a structured development process that involves consultation, design, development, and testing. Our initial consultation can provide you with a more accurate timeline based on your specific project needs.",
  },
];

// eslint-disable-next-line react/prop-types
const SwedenFAQ = ({ language }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className=" py-[60px] lg:mx-auto md:mx-7 sm: mx-4 ">
      <div
        style={{ fontFamily: "Open Sans, sans-serif" }}
        className=" lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-7 sm: mx-4"
      >
        <h1
          data-aos="fade-down"
          style={{ fontFamily: "Sumana,-serif" }}
          className="font-bold text-5xl mb-5"
        >
          {language === "sv" ? (
            <>
              Vanliga
              <span className="text-purple-900 ms-2 "> frågor</span>
            </>
          ) : (
            <>
              {" "}
              Frequently Asked
              <span className="text-purple-900 ms-2 "> Questions</span>
            </>
          )}
        </h1>
        {/* accordion div  */}
        <div
          data-aos="fade-down"
          style={{ fontFamily: "Ubuntu,serif" }}
          className="mt-10"
        >
          {" "}
          {questions.map(
            ({svQuestion, svAnswer, enQuestion, enAnswer}, index) => (
              <div key={index} className="mb-2">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full text-left bg-white hover:bg-gray-100 text-gray-800 font-semibold py-4 px-6 rounded-lg focus:outline-none"
                >
                 {language === "sv" ? svQuestion : enQuestion}
                  <IoIosArrowDown />
                </button>
                {openIndex === index && (
                  <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-purple-900">
                    {language === "sv" ? svAnswer : enAnswer}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SwedenFAQ;
