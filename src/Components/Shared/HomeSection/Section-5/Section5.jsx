import "./Section5.css";

const Section5 = () => {
  return (
    <div
      style={{ fontFamily: "Open Sans,sans-serif" }}
      className="default-margin"
    >
      <h1 className="text-center text-white text-lg font-semibold mb-5">
        PRICING PLAN
      </h1>
      <h2 className=" text-center text-4xl font-bold leading-[50px] text-white mb-5">
        Choose Pricing Plan
      </h2>

      {/* cards section  */}
      <div
        className="mt-10 gap-1
        lg:flex lg:justify-center lg:-ms-[0px]
        md:flex-wrap md:justify-around md:ms-[175px]
        sm: flex-wrap sm:justify-around sm: -ms-[30px]
        ">
        {/* Basic  */}
        <div
          style={{ boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.2)" }}
          className="card card-compact py-[40px]
            lg:w-[320px] lg:h-[450px] lg:mb-0
            md:w-[320px] md:h-[450px] md:mb-5
            sm: w-[320px] sm: h-[450px] sm: mb-5
            bg-base-100 rounded-none px-4
            hover:bg-[#095868]
            text-[#095868]
            hover:text-white
            "
        >
          <div className="card-body ">
            <h2 className="text-center font-semibold text-3xl mb-5">Basic</h2>
            <p className="text-5xl font-bold text-center relative">
              <span className="text-[20px] absolute left-[35px] top-[10px]">
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
          lg:w-[320px] lg:h-[450px] lg:mb-0
          md:w-[320px] md:h-[450px] md:mb-5
          sm: w-[320px] sm: h-[450px] sm: mb-5
          bg-base-100 rounded-none px-4
          hover:bg-[#095868]
          text-[#095868]
          hover:text-white
          "
        >
          <div className="card-body ">
            <h2 className="text-center font-semibold text-3xl mb-5">Startup</h2>
            <p className="text-5xl font-bold text-center relative">
              <span className="text-[20px] absolute left-[35px] top-[10px]">
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
            lg:w-[320px] lg:h-[450px] lg:mb-0
            md:w-[320px] md:h-[450px] md:mb-5
            sm: w-[320px] sm: h-[450px] sm: mb-5
            bg-base-100 rounded-none px-4
            hover:bg-[#095868]
            text-[#095868]
            hover:text-white
            "
        >
          <div className="card-body ">
            <h2 className="text-center font-semibold text-3xl mb-5">Enterprise</h2>
            <p className="text-5xl font-bold text-center relative">
              <span className="text-[20px] absolute left-[35px] top-[10px]">
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
            lg:w-[320px] lg:h-[450px] lg:mb-0
            md:w-[320px] md:h-[450px] md:mb-5
            sm: w-[320px] sm: h-[450px] sm: mb-5
            bg-base-100 rounded-none px-4
            hover:bg-[#095868]
            text-[#095868]
            hover:text-white
            "
        >
          <div className="card-body ">
            <h2 className="text-center font-semibold text-3xl mb-5">Professional</h2>
            <p className="text-5xl font-bold text-center relative">
              <span className="text-[20px] absolute left-[35px] top-[10px]">
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
  );
};

export default Section5;
