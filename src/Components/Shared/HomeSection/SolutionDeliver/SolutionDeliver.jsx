import { IoIosArrowRoundForward } from "react-icons/io";


const SolutionDeliver = () => {
  const data = [
    {
      title: "Enterprise Applications",
    },
    {
      title: "ERP",
    },
    {
      title: "Financial Management",
    },
    {
      title: "Supplly Chain Management",
    },
    {
      title: "Assest Management",
    },
    {
      title: "Fleet Management",
    },
    {
      title: "HR Software",
    },
    {
      title: "E Learning Software",
    },
    {
      title: "E Commerce",
    },
    {
      title: "Mobile Apps",
    },
    {
      title: "Content Management",
    },
    {
      title: "Documewnt Management",
    },
    {
      title: "CRM",
    },
    {
      title: "Marketing & Advertising",
    },
    {
      title: "Web Portals",
    },
    {
      title: "Data Analytics",
    },
  ];

  return (
    <div className="bg-gray-100 py-[80px] lg:mx-auto md:mx-7 sm: mx-4 ">
      <div
        style={{ fontFamily: "Open Sans, sans-serif" }}
        className=" lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-7 sm: mx-4"
      >
        <h1
          data-aos="fade-right"
          style={{ fontFamily: "Sumana,serif" }}
          className="font-bold text-5xl mb-5"
        >
          Solutions We <span className="text-purple-900 ms-2 "> Deliver</span>
        </h1>
        <p
          data-aos="fade-right"
          className="text-xl font-semibold"
        >
          We IT-enable all kinds of B2B, B2C interactions and internal
          operations.
        </p>

        <div 
        data-aos="fade-right"
        className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-8">
          {data.map(({ title }, index) => (
            <div
             key={index} 
             className="relative group">
              <div className="relative bg-white font-semibold text-center py-10 shadow-md hover:shadow-lg">
                {title}
              </div>
              <div className="absolute bottom-1 right-2 rotate-45 transition-transform duration-300 group-hover:rotate-[-2deg]">
                <IoIosArrowRoundForward size={25} className="text-purple-900 " />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionDeliver;
