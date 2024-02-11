import ratingImg from "../../../../../public/Icons/start-filled.svg";
import bean from "../../../../../public/Images/bean.png";

const Section6 = () => {
  return (
    <div
      style={{ fontFamily: "Open Sans,sans-serif" }}
      className="my-[150px] gap-5
        lg:flex lg:justify-center lg:-ms-[0px]
        md:flex-wrap md:justify-around md:ms-[200px]
        sm: flex-wrap sm:justify-around sm: ms-[5px]"
    >
      {/* card -1 */}
      <div className="p-[10px] w-[350px] h-[250px] bg-base-100 rounded-xl shadow-xl mb-5">
        <div className="flex justify-between">
          {/* review   */}
          <div className="flex gap-3 mt-5">
            <div className="border  w-[80px] h-[80px]  rounded-full">
              <img
                className="w-[80px] h-[80px] rounded-full bg-red-300 p-1"
                src={bean}
                alt=""
              />
            </div>
            <div>
              <h1 className="font-bold text-xl">Md Ali</h1>
              <p className="text-xs font-semibold text-gray-500">
              Naqwee.
              </p>
            </div>
          </div>
          {/* rating  */}
          <div className="flex gap-2 justify-start -mt-[35px]">
            <img src={ratingImg} alt="rating star" />
            <img src={ratingImg} alt="rating star" />
            <img src={ratingImg} alt="rating star" />
            <img src={ratingImg} alt="rating star" />
            <img src={ratingImg} alt="rating star" />
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
                className="w-[80px] h-[80px] rounded-full bg-blue-300 p-1"
                src={bean}
                alt=""
              />
            </div>
            <div>
              <h1 className="font-bold text-xl">Md Arif</h1>
              <p className="text-xs font-semibold text-gray-500">
                OPal-primium living.
              </p>
            </div>
          </div>
          {/* rating  */}
          <div className="flex gap-2 justify-start -mt-[35px]">
            <img src={ratingImg} alt="rating star" />
            <img src={ratingImg} alt="rating star" />
            <img src={ratingImg} alt="rating star" />
            <img src={ratingImg} alt="rating star" />
            <img src={ratingImg} alt="rating star" />
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
                className="w-[80px] h-[80px] rounded-full bg-green-300 p-1"
                src={bean}
                alt=""
              />
            </div>
            <div>
              <h1 className="font-bold text-xl">Md Arafat</h1>
              <p className="text-xs font-semibold text-gray-500">
              Blu Eyes.
              </p>
            </div>
          </div>
          {/* rating  */}
          <div className="flex gap-2 justify-start -mt-[35px]">
            <img src={ratingImg} alt="rating star" />
            <img src={ratingImg} alt="rating star" />
            <img src={ratingImg} alt="rating star" />
            <img src={ratingImg} alt="rating star" />
            <img src={ratingImg} alt="rating star" />
          </div>
        </div>
        {/* paragraph  */}
        <p className="mt-5 text-gray-500">
          Behind the woed mountains from the countries Vokalia and Consonantia
          ,there live the blind texts. Separated they.
        </p>
      </div>
    </div>
  );
};

export default Section6;
