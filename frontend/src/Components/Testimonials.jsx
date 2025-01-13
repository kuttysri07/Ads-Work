import React from "react";

const Testimonials = () => {
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
    {
      id: 2,
      text: "“We were struggling to reach our target audience online. Adswork developed a comprehensive digital marketing strategy that included targeted SEO, engaging social media campaigns, and effective PPC advertising. Their team is professional, responsive, and consistently exceeded our expectations. We've seen a dramatic increase in leads and conversions since partnering with Adswork.”",
      name: "Jeny Doe",
      role: "CEO, Jeny Consultancy",
      image: "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
  ];

  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl text-center">
          What our clients are saying
        </h1>
        <div className="flex justify-center mt-6">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>
        <div className="mt-10 flex gap-6 overflow-x-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-80 p-6 border rounded-lg bg-gray-50"
            >
              <p className="leading-loose text-gray-500">{testimonial.text}</p>
              <div className="flex items-center mt-6">
                <img
                  className="object-cover w-14 h-14 rounded-full ring-4 ring-gray-300"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
