import { Carousel } from "flowbite-react";

export const Home = () => {
  return (
    <div className="h-screen">
      <Carousel>
        {/* Slide 1 */}
        <div
          className="flex flex-wrap items-center gap-4 md:gap-0"
          style={{
            backgroundImage: "url(./back2.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        >
          {/* Left Section: Image */}
          <div className="w-full absolute top-10 lg:static md:static md:w-1/2 flex justify-center md:justify-end px-4 md:px-10">
            <img
              src="./girl 1.png"
              className="w-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              alt="Brand Illustration"
            />
          </div>

          {/* Right Section: Text Content */}
          <div className="w-full absolute md:static lg:static md:w-1/2 text-white flex flex-col justify-center items-center px-4 md:px-10">
            <p className="text-xs sm:text-sm md:text-lg uppercase tracking-wide text-gray-300 mb-2">
              Brand New
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-gray-300">
              Ad's Work
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
              Your Partner in Digital Success. We help businesses grow with
              strategic digital marketing solutions that drive results and
              enhance your brand.
            </p>
          </div>
        </div>

        <div
          className="flex flex-wrap items-center gap-4 md:gap-0"
          style={{
            backgroundImage: "url(./back2.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        >
          {/* Left Section: Image */}
          <div className="w-full absolute top-10 lg:static md:static md:w-1/2 flex justify-center md:justify-end px-4 md:px-10">
            <img
              src="./girl3.png"
              className="w-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              alt="Brand Illustration"
            />
          </div>

          {/* Right Section: Text Content */}
          <div className="w-full absolute md:static lg:static md:w-1/2 text-white flex flex-col justify-center items-center px-4 md:px-10">
            <p className="text-xs sm:text-sm md:text-lg uppercase tracking-wide text-gray-300 mb-2">
              Brand New
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-gray-300">
              Ad's Work
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
              Your Partner in Digital Success. We help businesses grow with
              strategic digital marketing solutions that drive results and
              enhance your brand.
            </p>
          </div>
        </div>

        <div
          className="flex flex-wrap items-center gap-4 md:gap-0"
          style={{
            backgroundImage: "url(./back2.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        >
          {/* Left Section: Image */}
          <div className="w-full absolute top-10 lg:static md:static md:w-1/2 flex justify-center md:justify-end px-4 md:px-10">
            <img
              src="./girl2.png"
              className="w-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              alt="Brand Illustration"
            />
          </div>

          {/* Right Section: Text Content */}
          <div className="w-full absolute md:static lg:static md:w-1/2 text-white flex flex-col justify-center items-center px-4 md:px-10">
            <p className="text-xs sm:text-sm md:text-lg uppercase tracking-wide text-gray-300 mb-2">
              Brand New
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-gray-300">
              Ad's Work
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
              Your Partner in Digital Success. We help businesses grow with
              strategic digital marketing solutions that drive results and
              enhance your brand.
            </p>
          </div>
        </div>

        {/* Additional Slides */}
      </Carousel>
    </div>
  );
};
