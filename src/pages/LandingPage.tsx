import React, { useState } from 'react';
import logo from "/public/dashboard/logo-memospace.png";
import bg from "/public/dashboard/background-lp.png";
import rules from "/public/dashboard/rules-book.png";
import will from "/public/dashboard/what-will.png";
import vid from "/public/dashboard/vid.mp4";

import Checklist from "/public/dashboard/checklist.svg";
import Ellipse from "/public/dashboard/ellipse.svg";
import iconA from "/public/dashboard/Vector.svg";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative font-poppins bg-black pt-8">
      {/* hero section */}
      <img src={bg} alt="background" className="absolute bg-cover w-full max-h-[1144px] top-0" />
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center mb-20">
          <img src={logo} width={200} height={30} alt="logo" />
          <div className="md:flex items-center">
            <div className="md:hidden flex flex-col ">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                )}
              </button>
            </div>
            <div className={`md:flex items-center space-x-8  ${isOpen ? 'flex flex-col md:flex-row absolute mt-[10px] left-0 right-0 bg-black z-50 ' : 'hidden md:block'}`}>
              <a href="#about-me" className="text-white text-sm">About Me</a>
              <a href="#join-us" className="text-white text-sm">Join Us</a>
              <a href="#benefit" className="text-white text-sm">Benefit</a>
              <button className="text-white border border-[#697275] rounded-[4px] px-[54px] py-[8px]">Login</button>
            </div>
          </div>
        </div>
        <div className="text-white md:w-1/2 w-full flex flex-col gap-y-8 relative">
          <h1 className="w-4/5 bg-gradient-to-r from-[#F5F5F5] to-[#FFFDFF] inline-block text-transparent bg-clip-text font-extrabold text-[48px] leading-[3.5rem]">
            Share your College Experience
          </h1>
          <div className="w-3/4">
            <p className="text-sm leading-loose font-normal decoration-[#F5F8FF] tracking-normal landing-[24px]">
              Campus Ambassador Program has been initiated to recognize smart and dedicated college students and provide them with adequate opportunities to learn the industry-relevant skills, while earning Cash rewards and certifications from our Industry-experts.
            </p>
          </div>
          <button className="w-full md:w-2/4 rounded-3xl bg-white flex justify-center items-center text-[#666666] text-sm font-semibold py-[12px] px-[76px] mt-6">See All Activity Guideline</button>
        </div>
      </div>

      {/* rules and guide section */}
      <div className="relative w-full">
        <div className="flex justify-center items-center my-[140px] px-4 md:px-0">
          <div className="w-full md:w-[960px] container mx-auto bg-white rounded-[48px] flex flex-col md:flex-row items-center drop-shadow-[0px_2px_15px_#ffff] gap-6 md:gap-x-[21px] p-6 md:py-[16px]">
            {[1, 2, 3, 4].map((_, idx) => (
              <div key={idx} className={`flex ${idx === 5 ? '' : 'md:flex-col'} items-center align-middle gap-y-[10px] w-full md:w-[215px]`}>
                <img src={iconA} alt="icon" className="bg-[#F5F8FF] rounded-full p-4 mr-4" />
                <h2 className="font-medium">Smart Notification</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex justify-center content-center w-full mb-9">
            <h3 className="text-white text-3xl font-semibold">
              Rules and Guidelines
            </h3>
          </div>
          <div className="mx-4 md:mx-20 flex flex-col md:flex-row gap-x-7 text-white font-poppins">
            <img src={rules} alt="rules" className="w-full md:w-2/5 flex flex-col mb-4 md:mb-0" />
            <div className="flex flex-col gap-y-2">
              <h6 className="mb-4 font-semibold">Key Point</h6>
              {[
                "Add maximum details to your answer",
                "There should be no plagiarism and negative content about the college",
                "Add maximum details to your answer",
                "There should be no plagiarism and negative content about the college"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-x-2">
                  <img src={Checklist} alt="checklist" />
                  <p>{text}</p>
                </div>
              ))}
              <button
                type="submit"
                className="text-sm border rounded-lg border-white-200 px-4 py-2 w-full md:w-1/2 mt-4"
              >
                Read Terms & Guidelines
              </button>
            </div>
          </div>
        </div>

        {/* what and will section */}
        <div className="container mx-auto px-4">
          <div className="my-[140px] mx-4 md:mx-20 flex flex-col gap-y-[4rem]">
            <h1 className="text-white font-semibold text-3xl">
              What will you be up to?
            </h1>
            <iframe className="border-solid border-4 border-[#fffff] rounded-[8px] aspect-video w-full md:w-9/10" src={vid}></iframe>
          </div>
        </div>
      </div>
      {/* footer section */}
      <div className="relative w-full text-white font-poppins bg-black py-9">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
          <div className="flex flex-col mb-6 md:mb-0">
            <img src={logo} alt="logo" className="w-4/5 mb-6" />
            <p className="text-md">Get started now try our product</p>
          </div>
          <div className="flex gap-7 text-sm">
            <div className="flex flex-col gap-y-7">
              <p>Help and Solution</p>
              <p>Talk to Support</p>
              <p>Support Docs</p>
              <p>System Status</p>
              <p>Covid Response</p>
            </div>
            <div className="flex flex-col gap-y-7">
              <p>Product</p>
              <p>Update</p>
              <p>Security</p>
              <p>Beta Test</p>
              <p>Pricing Product</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between mt-9 text-md">
          <p>© 2023 Rewards&Review Inc. Copyright and rights reserved</p>
          <div className="flex items-center gap-x-3">
            <p>Terms and Conditions</p>
            <span>
              <img src={Ellipse} alt="ellipse" />
            </span>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
