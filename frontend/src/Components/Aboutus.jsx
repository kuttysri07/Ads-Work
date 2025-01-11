import React from "react";

const Aboutus = () => {
  return (
    <div className="  py-10 px-5 leading-4 rounded mx-2 sm:mx-5 lg:mx-10 mt-10">
         <h1 className="text-4xl font-bold text-green-900 mb-6 text-center ">
         <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">About Us</span>
            </span>{' '}
            
          </h1>
      <div className="max-w-7xl mx-auto flex flex-wrap items-center">
        {/* Left Section: Image */}
        <div className="flex items-center justify-center w-full md:w-1/2 mb-8 md:mb-0 ">
          <img
            src="./about.png"
            alt="About AdsWork"
            className="w-3/4 h-auto rounded-lg "
          />
        </div>

        {/* Right Section: Content */}
        <div className="w-full md:w-1/2 md:pl-10">
         

          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Welcome to AdsWork – The Leading Digital Marketing Agency in Chennai!
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At AdsWork, we pride ourselves on being the most trusted name in digital marketing, serving businesses of all sizes with unmatched expertise and commitment.
          </p>

          <h2 className="text-xl font-semibold text-green-900 mb-3">
            Why Choose AdsWork?
          </h2>
          <ul className=" list-inside text-gray-600 space-y-3 mb-6 leading-5">
            <li>
              <strong>Proven Track Record:</strong> With years of experience, we’ve partnered with top brands across industries to deliver exceptional results.
            </li>
            <li>
              <strong>Innovative Solutions:</strong> We tailor our strategies to meet the unique needs of every client, ensuring maximum ROI and measurable growth.
            </li>
            <li>
              <strong>Expert Team:</strong> Our dedicated professionals specialize in high-quality, engaging content and cutting-edge digital strategies.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-green-900 mb-3">
            Our Values
          </h2>
          <ul className=" list-inside text-gray-600 space-y-3 mb-6 leading-5">
            <li>
              <strong>Client-Centric:</strong> At AdsWork, your success defines our success.
            </li>
            <li>
              <strong>Reliability:</strong> Trusted by top-tier companies for our consistent quality and results-driven approach.
            </li>
            <li>
              <strong>Relationships:</strong> We don’t just deliver services—we build lasting partnerships with our clients.
            </li>
          </ul>

          <p className="text-gray-600 leading-relaxed">
            Choose AdsWork for digital marketing services that elevate your brand, engage your audience, and drive growth. Together, we’ll navigate the digital world and achieve your business aspirations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
