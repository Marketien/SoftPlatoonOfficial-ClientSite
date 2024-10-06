import ratingImg from "../../../../../public/Icons/start-filled.svg";
import user1 from "../../../../../public/Images/user-1.jpg";
import user2 from "../../../../../public/Images/user-2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";import user3 from "../../../../../public/Images/user-3.jpg";


const Section6 = () => {

  Aos.init();

  return (
    <div className="mt-[200px] py-[80px]">
      <h1
      data-aos="fade-down"
      style={{ fontFamily: "Sumana,serif" }}
      className="text-center text-5xl font-bold mb-5">Our 
        <span className='text-purple-900'> Clients</span>
        </h1>
 <h1
       data-aos="fade-down"
        style={{ fontFamily: "Open Sans,sans-serif" }}
        className=" text-xl text-center leading-8 font-semibold "
      >
        Since 1989. For millions of users. We transform businesses with powerful
        and adaptable
        <br /> digital solutions that satisfy the needs of today and unlock the
        opportunities of
        <br />
        tomorrow.
      </h1>

    <div
     data-aos="zoom-in"
      style={{ fontFamily: "Open Sans,sans-serif" }}
      className=" mt-[40px] gap-5 flex justify-center lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-7 sm: mx-4"
    >

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 gap-5">

      {/* card -1 */}
      <div className="p-[10px]  h-[250px] bg-base-100 rounded-md shadow-xl mb-5 px-5">
        <div className="flex justify-between">
          {/* review   */}
          <div className="flex gap-3 mt-5">
            <div className="border  w-[80px] h-[80px]  rounded-full">
              <img
                className="w-[80px] h-[80px] rounded-full bg-gradient-to-r from-[#5A287F] via-[#84207E]  to-[#723988] p-1"
                src={user1}
                alt=""
              />
            </div>
            <div>
              <h1 className="font-bold text-xl">Alexander</h1>
              <p className="text-xs font-semibold text-gray-500">
              Naqwee.
              </p>
            </div>
          </div>
          {/* rating  */}
          <div className="flex gap-2 justify-start -mt-[35px]">
            <img src={ratingImg} className="w-[12px]" alt="rating star" />
            <img src={ratingImg} className="w-[12px]" alt="rating star" />
            <img src={ratingImg} className="w-[12px]" alt="rating star" />
            <img src={ratingImg} className="w-[12px]" alt="rating star" />
            <img src={ratingImg} className="w-[12px]" alt="rating star" />
          </div>
        </div>
        {/* paragraph  */}
        <p className="mt-5 text-gray-500">
          Behind the woed mountains from the countries Vokalia and Consonantia
          ,there live the blind texts. Separated they.
        </p>
      </div>

      {/* card -2 */}
      <div className="p-[10px]  h-[250px] bg-base-100 rounded-md shadow-xl mb-5 px-5">
        <div className="flex justify-between">
          {/* review   */}
          <div className="flex gap-3 mt-5">
            <div className="border  w-[80px] h-[80px]  rounded-full">
              <img
                className="w-[80px] h-[80px] rounded-full bg-gradient-to-r from-[#5A287F] via-[#84207E]  to-[#723988] p-1"
                src={user2}
                alt=""
              />
            </div>
            <div>
              <h1 className="font-bold text-xl">Vince</h1>
              <p className="text-xs font-semibold text-gray-500">
                OPal-primium living.
              </p>
            </div>
          </div>
           {/* rating  */}
           <div className="flex gap-2 justify-start -mt-[35px]">
            <img src={ratingImg} className="w-[12px]" alt="rating star" />
            <img src={ratingImg} className="w-[12px]" alt="rating star" />
            <img src={ratingImg} className="w-[12px]" alt="rating star" />
            <img src={ratingImg} className="w-[12px]" alt="rating star" />
            <img src={ratingImg} className="w-[12px]" alt="rating star" />
          </div>
        </div>
        {/* paragraph  */}
        <p className="mt-5 text-gray-500">
          Behind the woed mountains from the countries Vokalia and Consonantia
          ,there live the blind texts. Separated they.
        </p>
      </div>

      {/* card -3 */}
      <div className="p-[10px]  h-[250px] bg-base-100 rounded-md shadow-xl mb-5 px-5">
        <div className="flex justify-between">
          {/* review   */}
          <div className="flex gap-3 mt-5">
            <div className="border  w-[80px] h-[80px]  rounded-full">
              <img
                className="w-[80px] h-[80px] rounded-full bg-gradient-to-r from-[#5A287F] via-[#84207E]  to-[#723988] p-1"
                src={user3}
                alt=""
              />
            </div>
            <div>
              <h1 className="font-bold text-xl">Stephanie </h1>
              <p className="text-xs font-semibold text-gray-500">
              Blu Eyes.
              </p>
            </div>
          </div>
           {/* rating  */}
           <div className="flex gap-2 justify-start -mt-[35px]">
            <img src={ratingImg} className="w-[12px]" alt="rating star" />
            <img src={ratingImg} className="w-[12px]" alt="rating star" />
            <img src={ratingImg} className="w-[12px]" alt="rating star" />
            <img src={ratingImg} className="w-[12px]" alt="rating star" />
            <img src={ratingImg} className="w-[12px]" alt="rating star" />
          </div>
        </div>
        {/* paragraph  */}
        <p className="mt-5 text-gray-500">
          Behind the woed mountains from the countries Vokalia and Consonantia
          ,there live the blind texts. Separated they.
        </p>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Section6;
