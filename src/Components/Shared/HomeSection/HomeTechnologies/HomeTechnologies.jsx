// import icon from '../../../../../public/TechIcons' ;
// BackEndIcon-------------------------------------------------------------------
import icon1 from '../../../../../public/TechIcons/1.NodeJs.png' ;
import icon2 from '../../../../../public/TechIcons/2.Php.png' ;
import icon3 from '../../../../../public/TechIcons/3.C++.png' ;
import icon4 from '../../../../../public/TechIcons/3.1ExpressJs.png' ;
import icon5 from '../../../../../public/TechIcons/4.laravel.png' ;
// FrontEndIcon-------------------------------------------------------------------
import icon6 from '../../../../../public/TechIcons/6.Html.png' ;
import icon7 from '../../../../../public/TechIcons/5.Css.png' ;
import icon8 from '../../../../../public/TechIcons/7.JavaSctipt.png' ;
import icon9 from '../../../../../public/TechIcons/7.1TypeScript.png' ;
import icon10 from '../../../../../public/TechIcons/8.React.png' ;
import icon11 from '../../../../../public/TechIcons/9.NextJs.png' ;
import icon12 from '../../../../../public/TechIcons/10.VueJs.png' ;
// MobileIcon-------------------------------------------------------------------
import icon13 from '../../../../../public/TechIcons/11.Ios.png' ;
import icon14 from '../../../../../public/TechIcons/12.Android.png' ;
import icon15 from '../../../../../public/TechIcons/12.1React Native.png' ;
import icon16 from '../../../../../public/TechIcons/13.flutter.png' ;
// DesktopIcon-------------------------------------------------------------------
import icon17 from '../../../../../public/TechIcons/14.CSharp.png' ;
import icon18 from '../../../../../public/TechIcons/15.ElectronJs.png';


const HomeTechnologies = () => {

  const BackEndIcon =[
    {
      title:"NodeJs",
      icon: icon1
    },
    {
      title:"Php",
      icon: icon2
    },
    {
      title:"C++",
      icon: icon3
    },
    {
      title:"Express Js",
      icon: icon4
    },
    {
      title:"Laravel",
      icon: icon5
    },
  ]
  const FrontEndIcon =[
      {
        title:"Html",
        icon: icon6
      },
      {
        title:"Css",
        icon: icon7
      },
      {
        title:"JavaSctipt",
        icon: icon8
      },
      {
        title:"TypeScript",
        icon: icon9
      },
      {
        title:"React",
        icon: icon10
      },
      {
        title:"NextJs",
        icon: icon11
      },
      {
        title:"VueJs",
        icon: icon12
      },
  ]
const MobileIcon =[
  {
    title:"IOS",
    icon: icon13
  },
  {
    title:"Android",
    icon: icon14
  },
  {
    title:"React Native",
    icon:icon15
  },
  {
    title:"Flutter",
    icon:icon16
  }
]
const DesktopIcon =[
  {
    title:"C++",
    icon: icon3
  },
  {
    title:"C#",
    icon: icon17
  },
  {
    title:"ElectronJs",
    icon:icon18
  },
]

    return (
<div className=" py-[80px] lg:mx-auto md:mx-7 sm: mx-4 ">
      <div
        style={{ fontFamily: "Open Sans, sans-serif" }}
        className=" lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-7 sm: mx-4"
      >
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
          style={{ fontFamily: "Sumana,serif" }}
          className="font-bold text-5xl mb-5"
        >
         Technologies and Platforms  <span className="text-purple-900 ms-2 "> We Work With</span>
        </h1>

        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="mt-10 bg-gray-100 "
        >
          {/*---------------------------------- Web Icon Section-----------------------------------  */}
            <div className='px-3 py-3 mb-10'>
              <h1 style={{ fontFamily: "Ubuntu,sans-serif" }} className="font-semibold text-3xl mb-7">Web</h1>
              <p style={{ fontFamily: "Ubuntu,sans-serif" }} className=" text-sm uppercase mb-3">Back end</p>
              <div className='lg:flex md:grid md:grid-cols-4 sm: grid sm: grid-cols-3 gap-2 mb-5'>
                {
                  BackEndIcon.map(({icon , title}, index) =>(
                    <div title={title} key={index} className='flex justify-start items-center gap-5 bg-white hover:bg-[#59287f1c]'>
                      <img className='w-[100px] p-1' src={icon} alt="" />
                    </div>
                  ))
                }
              </div>
              <p style={{ fontFamily: "Ubuntu,sans-serif" }} className=" text-sm uppercase mb-3">Front end</p>
              <div className='lg:flex md:grid md:grid-cols-4 sm: grid sm: grid-cols-3 gap-2 '>
                {
                  FrontEndIcon.map(({icon , title}, index) =>(
                    <div title={title} key={index} className='flex justify-start items-center gap-5 w-[80px] h-[70px] bg-white hover:bg-[#59287f1c]'>
                      <img className='w-[100px] p-4' src={icon} alt="" />
                    </div>
                  ))
                }
              </div>
            </div>
          {/*---------------------------------- Web Icon Section-----------------------------------  */}
            <div className='px-3 py-3 '>
              <h1 style={{ fontFamily: "Ubuntu,sans-serif" }} className="font-semibold text-3xl mb-2">Mobile</h1>
              <div className='lg:flex md:grid md:grid-cols-4 sm: grid sm: grid-cols-3 gap-2'>
                {
                  MobileIcon.map(({icon , title}, index) =>(
                    <div title={title} key={index} className='flex justify-start items-center gap-5 bg-white hover:bg-[#59287f1c]'>
                      <img className='w-[100px] p-2' src={icon} alt="" />
                    </div>
                  ))
                }
              </div>
              </div>
          {/*---------------------------------- Desktop Icon Section-----------------------------------  */}
            <div className='px-3 py-3 mb-10'>
              <h1 style={{ fontFamily: "Ubuntu,sans-serif" }} className="font-semibold text-3xl mb-2">Desktop</h1>
              <div className='lg:flex md:grid md:grid-cols-4 sm: grid sm: grid-cols-3 gap-2'>
                {
                  DesktopIcon.map(({icon , title}, index) =>(
                    <div title={title} key={index} className='flex justify-start items-center gap-5 bg-white hover:bg-[#59287f1c]'>
                      <img className='w-[100px] p-2' src={icon} alt="" />
                    </div>
                  ))
                }
              </div>
              </div>
            </div>
        </div>
        </div>
    );
};

export default HomeTechnologies;