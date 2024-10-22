import img1 from '../../../assets/Images/ERP.png'

const ErpService = () => {
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
              Erp Services
            </h1>
            <p style={{ fontFamily: "Ubuntu,sans-serif" }} className="text-xl ">
            A Blend of High-Standard Erp Service
            </p>
            <p
             
              className="text-lg my-5"
            >
             In development since 2019, SoftPlatoon creates native, cross-platform and progressive erp applications with stable performance, human-centered design and a unique selling proposition to stand out in a fierce market.
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

export default ErpService;