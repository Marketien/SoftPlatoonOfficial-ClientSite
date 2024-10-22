// import icon from '../../../../assets/TechIcons' ;
// BackEndIcon-------------------------------------------------------------------
import icon1 from "../../../../assets/TechIcons/1.NodeJs.png";
import icon2 from "../../../../assets/TechIcons/2.Php.png";
import icon3 from "../../../../assets/TechIcons/3.C++.png";
import icon4 from "../../../../assets/TechIcons/Express.png";
import icon5 from "../../../../assets/TechIcons/4.laravel.png";
// FrontEndIcon-------------------------------------------------------------------
import icon6 from "../../../../assets/TechIcons/6.Html.png";
import icon7 from "../../../../assets/TechIcons/5.Css.png";
import icon8 from "../../../../assets/TechIcons/7.JavaSctipt.png";
import icon9 from "../../../../assets/TechIcons/7.1TypeScript.png";
import icon10 from "../../../../assets/TechIcons/8.React.png";
import icon11 from "../../../../assets/TechIcons/9.NextJs.png";
import icon12 from "../../../../assets/TechIcons/10.VueJs.png";
// MobileIcon-------------------------------------------------------------------
import icon13 from "../../../../assets/TechIcons/11.Ios.png";
import icon14 from "../../../../assets/TechIcons/12.Android.png";
import icon15 from "../../../../assets/TechIcons/12.1React Native.png";
import icon16 from "../../../../assets/TechIcons/13.flutter.png";
// DesktopIcon-------------------------------------------------------------------
import icon17 from "../../../../assets/TechIcons/14.CSharp.png";
import icon18 from "../../../../assets/TechIcons/15.ElectronJs.png";
// CloudsIcon-------------------------------------------------------------------
import icon19 from "../../../../assets/TechIcons/16.Aws.png";
import icon20 from "../../../../assets/TechIcons/17.GoogleCloud.png";
import icon21 from "../../../../assets/TechIcons/18.Hostinger.png";
import icon22 from "../../../../assets/TechIcons/19.NameCheap.png";
import icon23 from "../../../../assets/TechIcons/20.Cpanel.png";
// databases Icon-------------------------------------------------------------------
import icon24 from "../../../../assets/TechIcons/21.microsoftSqlServer.png";
import icon25 from "../../../../assets/TechIcons/22.mysql.png";
import icon26 from "../../../../assets/TechIcons/23.azureeSql.png";
import icon27 from "../../../../assets/TechIcons/24.sqLite.png";
import icon28 from "../../../../assets/TechIcons/22.1MongoDb.png";
// Programming languages Icon-------------------------------------------------------------------
import icon29 from "../../../../assets/TechIcons/25.Phython.png";
import icon30 from "../../../../assets/TechIcons/26.Matlab.png";
// Frameworks Icon-------------------------------------------------------------------
import icon31 from "../../../../assets/TechIcons/27.MxNet.png";
import icon32 from "../../../../assets/TechIcons/28.TensorFlow.png";
import icon33 from "../../../../assets/TechIcons/29.Keras.png";
import icon34 from "../../../../assets/TechIcons/30.OpenCv.png";
// DevOps Icon-------------------------------------------------------------------
import icon35 from "../../../../assets/TechIcons/31.docker.png";
import icon36 from "../../../../assets/TechIcons/32.AwsDeveloperTools.png";
import icon37 from "../../../../assets/TechIcons/33.GoogleDeveloperTools.png";
import icon38 from "../../../../assets/TechIcons/34.Firebase.png";
// Security Icon-------------------------------------------------------------------
import icon39 from "../../../../assets/TechIcons/35.CloudFlare.png";
import icon40 from "../../../../assets/TechIcons/36.Siege.png";
import icon41 from "../../../../assets/TechIcons/37.NMap.png";
import icon42 from "../../../../assets/TechIcons/38.WireShark.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const BackEndIcon = [
  {
    title: "NodeJs",
    icon: icon1,
  },
  {
    title: "Php",
    icon: icon2,
  },
  {
    title: "C++",
    icon: icon3,
  },
  {
    title: "Express Js",
    icon: icon4,
  },
  {
    title: "Laravel",
    icon: icon5,
  },
];
const FrontEndIcon = [
  {
    title: "Html",
    icon: icon6,
  },
  {
    title: "Css",
    icon: icon7,
  },
  {
    title: "JavaSctipt",
    icon: icon8,
  },
  {
    title: "TypeScript",
    icon: icon9,
  },
  {
    title: "React",
    icon: icon10,
  },
  {
    title: "NextJs",
    icon: icon11,
  },
  {
    title: "VueJs",
    icon: icon12,
  },
];
const MobileIcon = [
  {
    title: "IOS",
    icon: icon13,
  },
  {
    title: "Android",
    icon: icon14,
  },
  {
    title: "React Native",
    icon: icon15,
  },
  {
    title: "Flutter",
    icon: icon16,
  },
];
const DesktopIcon = [
  {
    title: "C++",
    icon: icon3,
  },
  {
    title: "C#",
    icon: icon17,
  },
  {
    title: "ElectronJs",
    icon: icon18,
  },
];
const CloudIcon = [
  {
    title: "Amazon Web Service",
    icon: icon19,
  },
  {
    title: "GoogleCloud",
    icon: icon20,
  },
  {
    title: "Hostinger",
    icon: icon21,
  },
  {
    title: "NameCheap",
    icon: icon22,
  },
  {
    title: "Cpanel",
    icon: icon23,
  },
];
const DataBaseIcon = [
  {
    title: "microsoft Sql Server",
    icon: icon24,
  },
  {
    title: "My Sql Database",
    icon: icon25,
  },
  {
    title: "Azure Sql Database",
    icon: icon26,
  },
  {
    title: "SQ Lite",
    icon: icon27,
  },
  {
    title: "Mongo Db",
    icon: icon28,
  },
];
const LanguageIcon = [
  {
    title: "Phython",
    icon: icon29,
  },
  {
    title: "Mat Lab",
    icon: icon30,
  },
];
const FrameworkIcon = [
  {
    title: "Mx Net",
    icon: icon31,
  },
  {
    title: "Tensor Flow",
    icon: icon32,
  },
  {
    title: "Keras",
    icon: icon33,
  },
  {
    title: "OpenCv",
    icon: icon34,
  },
];
const DevOpsIcon = [
  {
    title: "docker",
    icon: icon35,
  },
  {
    title: "Aws Developer Tools",
    icon: icon36,
  },
  {
    title: "Google Developer Tools",
    icon: icon37,
  },
  {
    title: "Firebase",
    icon: icon38,
  },
];
const SecurityIcon = [
  {
    title: "Cloud Flare",
    icon: icon39,
  },
  {
    title: "Siege",
    icon: icon40,
  },
  {
    title: "NMap",
    icon: icon41,
  },
  {
    title: "Wire Shark",
    icon: icon42,
  },
];


const HomeTechnologies = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 }); 
  }, []);

  return (
    <div className=" py-[60px]">
      <div
        style={{ fontFamily: "Open Sans, sans-serif" }}
        className=" lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-7 sm: mx-4"
      >
        <h1
          data-aos="fade-up"
          style={{ fontFamily: "Sumana,serif" }}
          className="font-bold text-5xl mb-5 leading-[60px]"
        >
          Technologies 
          <span className="text-purple-900 md:ms-2 sm:0"> We Work With</span>
        </h1>

        <div
          data-aos="fade-up"
          style={{ fontFamily: "Sumana,serif" }}
          className="mt-10 bg-white py-10 text-center"
        >
          <div>
          {/*---------------------------------- Web Icon Section-----------------------------------  */}
          <div className="px-3 py-3 mb-10">
            <h1 className="font-semibold text-3xl underline mb-7">Web</h1>
            <div className="flex justify-center">
            <div>
            <p className=" text-xl text-purple-500  uppercase mb-3">Back end</p>
            <div className="lg:flex md:grid md:grid-cols-4 sm: grid sm: grid-cols-3 gap-2 mb-5">
              {BackEndIcon.map(({ icon, title }, index) => (
                <div
                  title={title}
                  key={index}
                  className="flex justify-center items-center gap-5 bg-white hover:bg-[#59287f1c]"
                >
                  <img className=" w-[100px] p-1" src={icon} alt="" />
                  </div>
              ))}
            </div>
            <p className=" text-xl text-purple-500  uppercase mb-3">Front end</p>
            <div className="lg:flex md:grid md:grid-cols-4 sm: grid sm: grid-cols-3 gap-2 ">
              {FrontEndIcon.map(({ icon, title }, index) => (
                <div
                  title={title}
                  key={index}
                  className="flex justify-start items-center gap-5 w-[80px] h-[70px] bg-white hover:bg-[#59287f1c]"
                >
                  <img className="w-[100px] p-4" src={icon} alt="" />
                </div>
              ))}
            </div>
            </div>
            </div>
          </div>
          {/*---------------------------------- Mobile Icon Section-----------------------------------  */}
          <div className="px-3 py-3 mb-10">
            <h1 className="font-semibold text-3xl underline mb-2">Mobile</h1>
            <div className="lg:flex lg:justify-center md:grid md:grid-cols-4 sm: grid sm: grid-cols-3 gap-2">
              {MobileIcon.map(({ icon, title }, index) => (
                <div
                  title={title}
                  key={index}
                  className="flex justify-start items-center gap-5 bg-white hover:bg-[#59287f1c]"
                >
                  <img className="w-[100px] p-2" src={icon} alt="" />
                </div>
              ))}
            </div>
          </div>
          {/*---------------------------------- Desktop Icon Section-----------------------------------  */}
          <div className="px-3 py-3 mb-10">
            <h1 className="font-semibold text-3xl underline mb-2">Desktop</h1>
            <div className="lg:flex lg:justify-center md:grid md:grid-cols-4 sm: grid sm: grid-cols-3 gap-2">
              {DesktopIcon.map(({ icon, title }, index) => (
                <div
                  title={title}
                  key={index}
                  className="flex justify-start items-center gap-5 bg-white hover:bg-[#59287f1c]"
                >
                  <img className="w-[100px] p-2" src={icon} alt="" />
                </div>
              ))}
            </div>
          </div>
          {/*---------------------------------- Cloud Icon Section-----------------------------------  */}
          <div className="px-3 py-3 mb-10">
            <h1 className="font-semibold text-3xl underline mb-2">Clouds</h1>
            <div className="lg:flex lg:justify-center md:grid md:grid-cols-4 sm: grid sm: grid-cols-3 gap-2">
              {CloudIcon.map(({ icon, title }, index) => (
                <div
                  title={title}
                  key={index}
                  className="flex justify-start items-center gap-5 bg-white hover:bg-[#59287f1c]"
                >
                  <img className="w-[100px] p-2" src={icon} alt="" />
                </div>
              ))}
            </div>
          </div>
          {/*---------------------------------- Database Icon Section-----------------------------------  */}
          <div className="px-3 py-3 mb-10">
            <h1 className="font-semibold text-3xl underline mb-2">Database</h1>
            <div className="lg:flex lg:justify-center md:grid md:grid-cols-4 sm: grid sm: grid-cols-3 gap-2">
              {DataBaseIcon.map(({ icon, title }, index) => (
                <div
                  title={title}
                  key={index}
                  className="flex justify-start items-center gap-5 bg-white hover:bg-[#59287f1c]"
                >
                  <img className="w-[120px] p-2" src={icon} alt="" />
                </div>
              ))}
            </div>
          </div>
          {/*---------------------------------- Machine learning Icon Section-----------------------------------  */}
          <div className="px-3 py-3 mb-10">
            <h1 className="font-semibold text-3xl underline mb-7">Machine learning</h1>
            <p className=" text-lg text-purple-500  uppercase mb-3">
              Programming languages
            </p>
            <div className="lg:flex lg:justify-center md:grid md:grid-cols-4 sm: grid sm: grid-cols-3 gap-2 mb-5">
              {LanguageIcon.map(({ icon, title }, index) => (
                <div
                  title={title}
                  key={index}
                  className="flex justify-start items-center gap-5 bg-white hover:bg-[#59287f1c]"
                >
                  <img className="w-[120px] p-1" src={icon} alt="" />
                </div>
              ))}
            </div>
            <p className=" text-lg text-purple-500  uppercase mb-3">Frameworks</p>
            <div className="lg:flex lg:justify-center md:grid md:grid-cols-4 sm: grid sm: grid-cols-3 gap-2 ">
              {FrameworkIcon.map(({ icon, title }, index) => (
                <div
                  title={title}
                  key={index}
                  className="flex justify-start items-center gap-5  bg-white hover:bg-[#59287f1c]"
                >
                  <img className="w-[120px] p-4" src={icon} alt="" />
                </div>
              ))}
            </div>
          </div>
          {/*---------------------------------- DevOps Icon Section-----------------------------------  */}
          <div className="px-3 py-3 mb-10">
            <h1 className="font-semibold text-3xl underline mb-8">DevOps</h1>
            <div className="lg:flex lg:justify-center md:grid md:grid-cols-4 sm: grid sm: grid-cols-3 gap-2">
              {DevOpsIcon.map(({ icon, title }, index) => (
                <div
                  title={title}
                  key={index}
                  className="flex justify-start items-center gap-5 bg-white hover:bg-[#59287f1c]"
                >
                  <img className="w-[150px] p-2" src={icon} alt="" />
                </div>
              ))}
            </div>
          </div>
          {/*---------------------------------- Information Security Icon Section-----------------------------------  */}
          <div className="px-3 py-3">
            <h1 className="font-semibold text-3xl underline mb-8">Information Security</h1>
            <div className="lg:flex lg:justify-center md:grid md:grid-cols-4 sm: grid sm: grid-cols-3 gap-2">
              {SecurityIcon.map(({ icon, title }, index) => (
                <div
                  title={title}
                  key={index}
                  className="flex justify-start items-center gap-5 bg-white hover:bg-[#59287f1c]"
                >
                  <img className="w-[100px] p-2" src={icon} alt="" />
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTechnologies;
