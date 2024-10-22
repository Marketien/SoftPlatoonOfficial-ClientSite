import img1 from '../../../assets/Images/Web App.png'


const WebAppsService = () => {
    return (
        <div className="lg:mt-[90px] md:mt-[90px] sm: mt-[80px] bg-white">
        {/* ---------------------------- Banner Section ----------------------------------- */}
        <div
          className="grid lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1 items-center
          lg:px-32 md:px-10 sm: px-5 py-10 bg-[#5A287F] text-white"
        >
          {/* title section  */}
          <div>
            <h1
              style={{ fontFamily: "Sumana, serif" }}
              className="font-bold text-5xl mb-2"
            >
              Webapp Services
            </h1>
            <p style={{ fontFamily: "Ubuntu,sans-serif" }} className="text-xl ">
            Genuine care for your web app project
            </p>
            <p
             
              className="text-lg my-5"
            >
              With the expertise built on 230+ web projects, SoftPlatoon professionally designs, redesigns and continuously supports customer-facing and enterprise web apps and achieves high conversion and adoption rates.
            </p>
          </div>
          {/* image section  */}
          <div className="py-5">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="lg:mx-32 md:mx-10 sm: mx-5 py-20">
        </div>
        </div>
    );
};

export default WebAppsService;