// eslint-disable-next-line react/prop-types
const SwedenTabPanel3 = ({language}) => {
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
         {language === "sv" ? "" : ""}
        </h2>
        <p className="font-medium md:text-lg sm: text-md leading-8 mt-5">
        {language === "sv" ? "" : ""}
        </p>
      </div>
    </div>
  );
};

export default SwedenTabPanel3;
