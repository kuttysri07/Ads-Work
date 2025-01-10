import React, { useState } from "react";

const Testimonials = () => {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      text: "“Adswork completely transformed our online presence. Their SEO expertise boosted our website traffic significantly, and their creative digital marketing campaigns have driven incredible results for our business. Highly recommend”",
      name: "Robert",
      role: "CTO, Robert Consultancy",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      id: 2,
      text: "“We were struggling to reach our target audience online. Adswork developed a comprehensive digital marketing strategy that included targeted SEO, engaging social media campaigns, and effective PPC advertising. Their team is professional, responsive, and consistently exceeded our expectations. We've seen a dramatic increase in leads and conversions since partnering with Adswork.”",
      name: "Jeny Doe",
      role: "CEO, Jeny Consultancy",
      image: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
    {
      id: 3,
      text: "“Adswork designed and developed a stunning and user-friendly website for our company. Their team was incredibly talented and patient throughout the entire process. The website is now a valuable asset for our business, showcasing our brand effectively and providing a seamless user experience”",
      name: "Ema Watson",
      role: "Marketing Manager at Stech",
      image: "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  // State to track the currently visible testimonial
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for left and right arrow clicks
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-white  ">
      <div className="container  px-6 py-10 mx-auto">
        <div className="mt-6 md:flex md:items-center md:justify-between  ">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl" data-aos="fade-up">
              What our clients are saying
            </h1>
            <div className="flex mx-auto mt-6"  data-aos="fade-down">
              <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            </div>
          </div>
          <div className="flex justify-between mt-8 md:mt-0">
            <button
              title="left arrow"
              onClick={handlePrevClick}
              className="p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full hover:bg-gray-100"
              data-aos="fade-up"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                 
                />
              </svg>
            </button>
            <button
              title="right arrow"
              onClick={handleNextClick}
              className="p-2 text-gray-800 transition-colors duration-300 border rounded-full hover:bg-gray-100"
              data-aos="fade-up"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Render the current testimonial */}
        <div className="mt-8 lg:w-1/3  mx-auto "  data-aos="fade-up">
          <div className="p-8 border rounded-lg">
            <p className="leading-loose text-gray-500">{testimonials[currentIndex].text}</p>
            <div className="flex items-center mt-8 -mx-2">
              <img
                className="object-cover mx-2 rounded-full w-14 h-14 ring-4 ring-gray-300"
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
              />
              <div className="mx-2">
                <h1 className="font-semibold text-gray-800">
                  {testimonials[currentIndex].name}
                </h1>
                <span className="text-sm text-gray-500">
                  {testimonials[currentIndex].role}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
