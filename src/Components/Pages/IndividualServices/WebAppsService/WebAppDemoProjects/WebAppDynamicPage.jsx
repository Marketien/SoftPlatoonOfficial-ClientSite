import img1 from "../../../../../assets/Images/dynamic-page-banner-1.png";
import Breadcrumb from "../../../../Hooks/Breadcrumb/Breadcrumb";
import img2 from "../../../../../assets/RecentPosts/Demo_School/1.png";
import icon1 from "../../../../../assets/Icons/checked.png";
import icon2 from "../../../../../assets/Icons/cancel.png";

const rightTika = [
  { title: "Determine marketing gaps" },
  { title: "Expand your reach" },
  { title: "Improve audience targeting" },
  { title: "Save time, money and resources" },
  { title: "Increase traffic, leads and conversions" },
];
const wrongTika =[
{  title: "Define clear goals"},
{  title: "Identify and fix digital marketing mistakes"},
{  title: "Grow your sales pipeline"},
{  title: "Leverage available marketing channels"},
{  title: "Outperform your competitors"},
]

const WebAppDynamicPage = () => {
  return (
    <div className=" md:mt-[85px] sm: mt-[65px] bg-white">
      {/* ---------------------------- Banner Section ----------------------------------- */}
      {/* image section  */}
      <div className="relative">
        <div className="relative">
          <img src={img1} alt="" />
        </div>
        <div className="absolute top-0  w-full bg-black opacity-40 inset-0" />
        <div className="text-white absolute inset-0 w-full flex justify-center items-center text-center">
          <div>
            <h1
              style={{ fontFamily: "Sumana, serif" }}
              className="uppercase text-3xl"
            >
              Demo School
            </h1>
            <p className=" mt-3 font-semibold text-lg">
              Genuine care for your web app project
            </p>
          </div>
        </div>
      </div>
      <Breadcrumb />
      {/* main content section  */}
      <div
        style={{ fontFamily: "Ubuntu,sans-serif" }}
        className="lg:max-w-5xl md:max-w-3xl sm: max-w-sm px-4 mx-auto "
      >
        {/* Want section  */}
        <div className="mt-20">
          <h1
            style={{ fontFamily: "Sumana, serif" }}
            className="font-bold text-4xl mb-1"
          >
            You Know What You
            <span className="text-purple-800"> Want</span>
          </h1>
          <p className="text-lg mb -5">
            We Ensure You Don’t Take the Wrong Turn En Route to Success
          </p>
          <div className="flex gap-5 p-2 leading-8 my-5">
            <div>
              <p>
                A recent report revealed that nearly 50 percent of businesses
                don’t have a clearly defined online marketing strategy to steer
                their digital marketing efforts. This means many market leaders
                are investing their time, money and resources in paid digital
                marketing services without a well-planned approach for goal
                setting and achievement, task prioritization, marketing
                direction and budget and resource allocation.
              </p>
            </div>
            <div>
              <img className="border-t-2" src={img2} alt="" />
            </div>
          </div>
          <p className="leading-8">
            Where are you now? Where do you want to be? What is the best
            approach to achieve your business goals? Where does your digital
            marketing budget go? Our digital strategy company addresses these
            questions to help you generate lucrative online marketing ideas and
            get you to your desired destination. <br />
            Let us assist you in building a robust digital marketing strategy
            framework for your brand. Get your digital marketing campaign moving
            with Thrive Internet Marketing Agency’s marketing strategy services.
          </p>
        </div>
        {/* Strategy section  */}
        <div className="mt-20">
          <h1
            style={{ fontFamily: "Sumana, serif" }}
            className="font-bold text-4xl mb-1"
          >
            Why You Need to Start With
            <span className="text-purple-800"> Strategy</span>
          </h1>
          <p className="text-lg mb -5">
            Uncover Market Opportunities and Increase Your Revenue
          </p>
          <span className="mb-2 leading-8">
            Marketing your brand without an internet marketing strategy or using
            an inappropriate online marketing plan is a surefire way to lose
            money, waste time and get <br />
            In today’s digital world, growing a business comes with many
            challenges and opportunities that demand different web marketing
            strategies and solutions. A digital marketing strategy that has
            worked for a specific audience segment may not be the best approach
            for another. <br /> Likewise, internet marketing strategies that
            yielded positive results a year ago may not generate the same
            results today. All too often, outdated and unfocused online
            marketing strategies turn profitable businesses into an also-ran.
            Does your brand have a clear-cut digital marketing strategy? Don’t
            miss out on opportunities to boost your digital performance. Now’s
            the time to invest in marketing strategy services and take your
            digital success to the next level.
          </span>
          {/* ---------------------------------------------- */}
          <div className="grid md:grid-cols-2 sm: grid-cols-1 gap-8 mt-5">
          {/* rightTika section  */}
            <div className="relative">
              <div className="ralative shadow-lg rounded-2xl border-t-[50px] border-b-[10px] bg-[#5A287F] border-[#5A287F]">
                <div className=" py-5 px-3 bg-white rounded-t-2xl rounded-b-2xl leading-8">
                  {rightTika.map(({ title }, index) => (
                    <div key={index}>
                      <p className="flex gap-2 items-center">
                        <span>
                          <img className="w-5" src={icon1} alt="" />
                        </span>
                        <span>{title}</span>
                      </p>
                    </div>
                  ))}
                </div>
                <h1 className="absolute top-3 left-14 text-white">
                  A Concrete Digital Marketing Strategy Allows You To:
                </h1>
              </div>
            </div>
          {/* wrong section  */}
            <div className="relative">
              <div className="ralative shadow-lg rounded-2xl border-t-[50px] border-b-[10px] bg-[#84207E] border-[#84207E]">
                <div className=" py-5 px-3 bg-white rounded-t-2xl rounded-b-2xl leading-8">
                  {wrongTika.map(({ title }, index) => (
                    <div key={index}>
                      <p className="flex gap-2 items-center">
                        <span>
                          <img className="w-5" src={icon2} alt="" />
                        </span>
                        <span>{title}</span>
                      </p>
                    </div>
                  ))}
                </div>
                <h1 className="absolute top-3 left-4 text-center text-white">
                Without A Well-Defined Online Marketing Strategy, You Fail To:
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebAppDynamicPage;
