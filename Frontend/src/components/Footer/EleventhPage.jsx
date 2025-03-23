import React, { useState } from "react";
import trust from "../../assets/trust.png";
import india from "../../assets/India.png";
import WTI from "../../assets/WTI.png";
import facebook from "../../assets/Facebook.png";
import instagram from "../../assets/Instagram.png";
import twitter from "../../assets/twitter.png";
import Form from "../../lib/Form";
import Earth from "../../assets/LogoEarth.png";
import Button from "../../lib/Button";

const footerLinks = [
  {
    title: "Explore",
    items: ["Our Mission", "Our Accountability", "Newsroom", "Find Events"],
  },
  {
    title: "Connect",
    items: ["Contact Us", "Careers", "FAQ", "Ethics Helpline"],
  },
  {
    title: "Give",
    items: [
      "Donate Now",
      "API Reference",
      "Membership",
      "Gift & Estate Planning",
    ],
  },
];

const EleventhPage = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="w-full  min-h-screen p-4 sm:p-6 flex justify-center items-center bg-[#F2F1F6]">
      <div className="w-full max-w-[1400px] h-full bg-green-200 p-5 mt-5 rounded-xl flex flex-col gap-6">
        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Section - Slogan, Heading, Form */}
          <div className="w-full lg:w-1/2 relative flex flex-col items-center">
            <div className="w-full relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
              {/* Slogan */}
              <h3 className="text-black text-sm sm:text-base md:text-lg text-center sm:text-left absolute top-6 sm:top-10 md:top-20 left-2 sm:left-4 px-2 sm:px-0">
                Together, our small actions can create a greener, safer
                tomorrow.
              </h3>

              {/* Main Heading */}
              <h1 className="text-black font-bold absolute text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl top-20 sm:top-28 md:top-36 lg:top-40 left-2 sm:left-4 md:left-8 leading-tight sm:leading-none">
                Let’s Save{" "}
                <span className="inline-block h-[40px] w-[40px] sm:h-[60px] sm:w-[60px] md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px] align-middle">
                  <img
                    className="w-full h-full object-cover"
                    src={Earth}
                    alt="Earth"
                  />
                </span>
                <br />
                Earth Today.
              </h1>

              {/* Form */}
              <div className="w-[80%] sm:w-[60%] md:w-[50%] absolute top-[75%] left-1/2 -translate-x-1/2">
                {showForm && <Form />}
              </div>
            </div>
          </div>

          {/* Right Section - Partners & Footer Links */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start items-center gap-4 px-2">
            {/* Partners */}
            <div className="w-full flex flex-col justify-center items-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-4">
                Our Partners
              </h1>
              <div className="w-full border-b-2 border-black flex justify-evenly items-center flex-wrap gap-4 pb-4">
                <img
                  src={trust}
                  alt="Trust"
                  className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] object-contain"
                />
                <img
                  src={india}
                  alt="India"
                  className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] object-contain"
                />
                <img
                  src={WTI}
                  alt="WTI"
                  className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] object-contain"
                />
              </div>
            </div>

            {/* Footer Links */}
            <div className="w-full flex flex-wrap justify-evenly items-start gap-y-6 px-2">
              {footerLinks.map((section, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2"
                >
                  <h3 className="text-lg sm:text-xl text-zinc-900 font-semibold mb-2 sm:mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-1 sm:space-y-2 text-base sm:text-lg text-gray-600">
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <a href="#" className="hover:underline">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Call-to-Action Button */}
            <div className="mt-6 w-full flex justify-center">
              <Button
                title="Connect with us"
                onClick={() => setShowForm(!showForm)}
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="w-full flex flex-col items-center px-4 sm:px-6 py-4 space-y-3">
          <div className="w-full border-b-2 border-black flex flex-wrap justify-center sm:justify-evenly items-center gap-3 sm:gap-6 pb-3">
            <h2 className="text-lg sm:text-xl md:text-2xl text-black">
              Follow Us
            </h2>
            <a href="#" className="hover:underline">
              <img
                src={facebook}
                alt="Facebook"
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
            </a>
            <a href="#" className="hover:underline">
              <img
                src={instagram}
                alt="Instagram"
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
            </a>
            <a href="#" className="hover:underline">
              <img
                src={twitter}
                alt="Twitter"
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
            </a>
          </div>
          <h1 className="text-center text-sm sm:text-base text-black">
            © 2021 World Resources Institute. All Rights Reserved.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default EleventhPage;
