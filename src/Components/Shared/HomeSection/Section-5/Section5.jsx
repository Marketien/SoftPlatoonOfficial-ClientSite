import "./Section5.css";

const Section5 = () => {
  return (
    <div
      style={{ fontFamily: "Open Sans,sans-serif" }}
      className=""
    >
      <h1 className="text-center text-white text-lg font-semibold mb-5">
        PRICING PLAN
      </h1>
      <h2 className=" text-center text-4xl font-bold leading-[50px] text-white mb-5">
        Choose Pricing Plan
      </h2>

      {/* cards section  */}
      <div
        className="mt-10 gap-1 flex justify-center">
          <div className="my-[80px] mx-auto lg:max-w-5xl md:max-w-3xl sm: max-w-sm grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 gap-5">
        {/* Basic  */}
        <div
          style={{ boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.2)" }}
          className="card card-compact py-[40px]
            bg-base-100 rounded-none px-4
            hover:bg-[#095868]
            text-[#095868]
            hover:text-white
            "
        >
          <div className="card-body ">
            <h2 className="text-center font-semibold text-3xl mb-5">Basic</h2>
            <p className="text-5xl font-bold text-center relative">
              <span className="text-[20px] absolute lg:left-[-2px] md:left-[60px] sm: left-[60px]">
                $
              </span>{" "}
              299
              <span className=" text-lg ">/Month</span>
            </p>
            <p className="text-lg text-center ">
              Social Media Marketing Social Media Management 24/7 Support
            </p>
            {/* choose Plan button  */}
            <div className="flex justify-center">
              <button className="choosePlan hover:text-[#05819a] hover:bg-white">
                <a href="/">Choose Plan</a>
              </button>
            </div>
          </div>
        </div>

        {/* Startup  */}
        <div
          style={{ boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.2)" }}
          className="card card-compact py-[40px]
          bg-base-100 rounded-none px-4
          hover:bg-[#095868]
          text-[#095868]
          hover:text-white
          "
        >
          <div className="card-body ">
            <h2 className="text-center font-semibold text-3xl mb-5">Startup</h2>
            <p className="text-5xl font-bold text-center relative">
              <span className="text-[20px] absolute lg:left-[-2px] md:left-[60px] sm: left-[60px]">
                $
              </span>{" "}
              499
              <span className=" text-lg ">/Month</span>
            </p>
            <p className="text-lg text-center ">
              Full Access Library 4 Multiple User 24/7 Support
            </p>
            {/* choose Plan button  */}
            <div className="flex justify-center">
              <button className="choosePlan hover:text-[#05819a] hover:bg-white">
                <a href="/">Choose Plan</a>
              </button>
            </div>
          </div>
        </div>

        {/* Enterprise  */}
        <div
          style={{ boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.2)" }}
          className="card card-compact py-[40px]
            bg-base-100 rounded-none px-4
            hover:bg-[#095868]
            text-[#095868]
            hover:text-white
            "
        >
          <div className="card-body ">
            <h2 className="text-center font-semibold text-3xl mb-5">Enterprise</h2>
            <p className="text-5xl font-bold text-center relative">
              <span className="text-[20px] absolute lg:left-[-2px] md:left-[60px] sm: left-[60px]">
                $
              </span>{" "}
              899
              <span className=" text-lg ">/Month</span>
            </p>
            <p className="text-lg text-center ">
              Full Access Library 4 Multiple User 24/7 Support
            </p>
            {/* choose Plan button  */}
            <div className="flex justify-center">
              <button className="choosePlan hover:text-[#05819a] hover:bg-white">
                <a href="/">Choose Plan</a>
              </button>
            </div>
          </div>
        </div>

        {/* Professional  */}
        <div
          style={{ boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.2)" }}
          className="card card-compact py-[40px]
            bg-base-100 rounded-none px-4
            hover:bg-[#095868]
            text-[#095868]
            hover:text-white
            "
        >
          <div className="card-body ">
            <h2 className="text-center font-semibold text-3xl mb-5">Professional</h2>
            <p className="text-5xl font-bold text-center relative">
              <span className="text-[20px] absolute lg:left-[-2px] md:left-[60px] sm: left-[60px] ">
                $
              </span>{" "}
              999
              <span className=" text-lg ">/Month</span>
            </p>
            <p className="text-lg text-center ">
              Full Access Library 4 Multiple User 24/7 Support
            </p>
            {/* choose Plan button  */}
            <div className="flex justify-center">
              <button className="choosePlan hover:text-[#05819a] hover:bg-white">
                <a href="/">Choose Plan</a>
              </button>
            </div>
          </div>
        </div>
          </div>

      </div>
      
    </div>
  );
};

export default Section5;
