import logo from "../../../../public/Icons/LogoSoftPlatoonjpg-removebg-preview.png";
import facebookLogo from "../../../../public/Icons/facebook.png";
import instagramLogo from "../../../../public/Icons/instagram.png";
import linkedinLogo from "../../../../public/Icons/linkedin.png";
import twitterLogo from "../../../../public/Icons/twitter.png";

const Footer = () => {
  return (
    <div
      style={{ fontFamily: "Open Sans,sans-serif" }} className="bg-white" >
<footer className="footer p-10  text-base-content">
  <nav>
    <h6 className="footer-title text-[#095868] text-xl">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title text-[#095868] text-xl">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title text-[#095868] text-xl">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer> 
<footer className="footer px-10 py-4 border-t  text-base-content border-base-300">
  <aside className="items-center grid-flow-col">
    <a href="" target="_blank"><img className="w-[50px] h-[50px]" src={logo} alt="" /></a>
    <p className="font-bold">SoftPlatoon. <br/>Providing reliable tech since 2022</p>
  </aside> 

  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
   <a href="" target="_blank"><img className="w-[30px] h-[30px]" src={facebookLogo} alt="" /></a> 
   <a href="" target="_blank"><img className="w-[30px] h-[30px]" src={instagramLogo} alt="" /></a> 
   <a href="" target="_blank"><img className="w-[30px] h-[30px]" src={linkedinLogo} alt="" /></a> 
   <a href="" target="_blank"><img className="w-[33px] h-[33px]" src={twitterLogo} alt="" /></a> 
    </div>
  </nav>
</footer>
    </div>
  );
};

export default Footer;
