import ratingImg from "../../../../../public/Icons/start-filled.svg";
import user1 from "../../../../../public/Images/user-1.jpg";
import user2 from "../../../../../public/Images/user-2.jpg";
import user3 from "../../../../../public/Images/user-3.jpg";

const Section6 = () => {
  return (
    <div
      style={{ fontFamily: "Open Sans,sans-serif" }}
      className="my-[150px] gap-5 flex justify-center"
    >
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 gap-5">

      {/* card -1 */}
      <div className="p-[10px] w-[350px] h-[250px] bg-base-100 rounded-xl shadow-xl mb-5">
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
      <div className="p-[10px] w-[350px] h-[250px] bg-base-100 rounded-xl shadow-xl mb-5">
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
      <div className="p-[10px] w-[350px] h-[250px] bg-base-100 rounded-xl shadow-xl mb-5">
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
  );
};

export default Section6;
