import img1 from '../../../../../public/Client Logo File/Qalaat Al Khaleej-Logo-01.png'
import img2 from '../../../../../public/Client Logo File/abroad1.png'
import img3 from '../../../../../public/Client Logo File/abroad2.png'
import img4 from '../../../../../public/Client Logo File/abroad3.png'
import img5 from '../../../../../public/Client Logo File/abroad4.png'
import img6 from '../../../../../public/Client Logo File/abroad5.png'
import img7 from '../../../../../public/Client Logo File/abroad6.png'
import img8 from '../../../../../public/Client Logo File/abroad7.png'
import img9 from '../../../../../public/Client Logo File/abroad8.png'
import clientImg1 from '../../../../../public/Images/Unknownclientjpg.jpg' ;
import clientImg2 from '../../../../../public/Images/client1.jpg' ;
import clientImg3 from '../../../../../public/Images/client2.jpg' ;
import clientImg4 from '../../../../../public/Images/client3.jpg' ;
import clientImg5 from '../../../../../public/Images/client5.png' ;
import clientImg6 from '../../../../../public/Images/client4.png' ;
import clientImg7 from '../../../../../public/Images/client8.png' ;
import clientImg8 from '../../../../../public/Images/client9.png' ;
import rating from '../../../../../public/Images/rating.png' ;


const companies=[
    {
        img: img1 ,
        clientImg: clientImg1,
        companyName:"Qalaat Al Khaleej",
        clientName: "Mohammed Sawar Hossain",
        position:"Managing Director",
        ReviewText: "SoftPlatoon developers used the microservices approach to ensure our scalability; selected and implemented techs that guaranteed high availability and fault-tolerance. The new software performs stably even under heavy load, which helps provide high-quality user experience. SoftPlatoon proved to be a reliable tech partner."
    },
    {
        img: img2 ,
        clientImg:clientImg2 ,
        companyName:"BOOKING MEIN Travel",
        clientName: "Demetrius Jackson",
        position:"CEO",
        ReviewText: "My experience with SoftPlatoon was seamless from start to finish. They took the time to understand my business needs and delivered a website that truly reflects my brand. I’ve received numerous compliments on the design!"
    },
    {
        img: img3 ,
        clientImg:clientImg3 ,
        companyName:"Vendigo",
        clientName: "Sarayu Kocharlakota",
        position:"Founder",
        ReviewText: "I was impressed by SoftPlatoon’s Developers innovative approach to my web application. They integrated cutting-edge technologies that improved performance and scalability. I’m excited about the future growth of my business thanks to their expertise!"
    },
    {
        img: img4 ,
        clientImg:clientImg4 ,
        companyName:"Omega Tour",
        clientName: "Abdul Aziz",
        position:"CEO",
        ReviewText: "SoftPlatoon went above and beyond to ensure my website met all my needs. They provided ongoing support after launch and even helped with SEO optimization. I’ve seen a noticeable increase in traffic and engagement!"
    },
    {
        img: img5 ,
        clientImg:clientImg5 ,
        companyName:"G0-GIVE COACH",
        clientName: "Bob Proctor",
        position:"CEO",
        ReviewText: "The team at SoftPlatoon was incredibly responsive throughout the entire development process. They were quick to address any questions I had and offered valuable suggestions that really enhanced the functionality of my site. Highly recommend!"
    },
    {
        img: img6 ,
        clientImg:clientImg6 ,
        companyName:"Vital Strandz",
        clientName: "MIchelle J. Borland",
        position:"Founder",
        ReviewText: "I worked with SoftPlatoon for my website redesign, and I couldn't be happier. Their team understood my vision and brought it to life with creativity and professionalism. The project was completed on time, and the end result exceeded my expectations!"
    },
    {
        img: img7 ,
        clientImg:clientImg1 ,
        companyName:"BILLY AUDREY",
        clientName: "Audrey Billy",
        position:"Founder",
        ReviewText: "I hired SoftPlatoon’s Developers for my e-commerce site, and the user experience has improved dramatically. Customers love the new layout and easy navigation. Sales have increased significantly since the launch, and I’m thrilled with the outcome!"
    },
    {
        img: img8 ,
        clientImg:clientImg7 ,
        companyName:"Become With Melva",
        clientName: "Melva  Farquharson",
        position:"Founder",
        ReviewText: "SoftPlatoon delivered my website ahead of schedule without compromising quality. Their commitment to timelines was remarkable, and I appreciate their attention to detail. It’s refreshing to work with someone so reliable!"
    },
    {
        img: img9 ,
        clientImg:clientImg8 ,
        companyName:"COOL AND DEADLY REGGEF",
        clientName: "Damon Young",
        position:"Founder",
        ReviewText: "I am blown away by how beautiful my new website looks! SoftPlatoon has a keen eye for design and truly captured my brand’s essence. I’m so proud to share it with my customers!"
    },
]

const Testimonials = () => {
  return (
    <div className="mt-32">
      <h1
        style={{ fontFamily: "Sumana, serif" }}
        className="font-bold text-5xl mb-2"
      >
        Testimonials
      </h1>
      {/* <<<<<<<<<<<<<<<<<<<< cards for large and medium device >>>>>>>>>>>>>>>>>>> */}
      <div className="lg:grid md:grid lg:grid-cols-2 md:grid-cols-1 sm: hidden gap-5 mt-10">
{
  companies.map(({img,clientImg,companyName,clientName,position,ReviewText, rating}, index)=>(
    <div key={index} className='w-full border-t-2 shadow-md px-3 py-5'>
<div className='flex gap-5 items-center'>
  {/* ---------company image ------------  */}
<div className='w-1/6'>
  <img className='w-[100px] mb-2' src={img} alt="" />
<h1 className='font-semibold hover:underline'>{companyName}</h1>
</div>
{/* ---------------- other information ----------------- */}
<div className='relative w-3/4'>
<div className='relative flex items-center  '>
<div className='  flex  gap-2 mb-5'>
  <div><img className='rounded-full w-[50px]' src={clientImg} alt="" /></div>
<div>
  <h1 className='font-semibold'>{clientName}</h1>
  <p className='text-gray-500'>{position}</p>
</div>
</div>
</div>
<p>{ReviewText}</p>
<div className='absolute top-0 -right-10 '>
  <img className='w-[120px]' src={rating} alt="" />
</div>
</div>
</div>
    </div>
  ))
}
      </div>
      {/* <<<<<<<<<<<<<<<<<<<< cards for large and medium device >>>>>>>>>>>>>>>>>>> */}
      <div className="sm: grid lg:hidden md:hidden sm: grid-cols-1 gap-5 mt-10">
{
  companies.map(({img,clientImg,companyName,clientName,position,ReviewText , rating}, index)=>(
    <div key={index}>
<div>
  <img className='' src={img} alt=""  />
  <img className='' src={rating} alt=""  />
</div>
    </div>
  ))
}
      </div>
    </div>
  );
};

export default Testimonials;
