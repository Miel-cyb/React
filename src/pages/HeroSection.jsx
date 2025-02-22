import React from "react";

function HeroSection() {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center text-center px-6"
      style={{ backgroundImage: "url('/netflix.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="bg-[black] bg-opacity-80 p-6 max-[320px]:text-[13px] w-full inset-0 h-screen absolute flex flex-col justify-center items-center">
        <h1 className="max-[320px]:text-2xl text-4xl sm:text-6xl font-bold leading-tight mt-20">
          Unlimited movies, TV <br /> shows, and more.
        </h1>
        <p className="text-lg md:text-1xl mt-5">
          <b>Watch anywhere. Cancel anytime.</b>
        </p>
        <p className="text-md md:text-lg mt-6">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 w-full max-w-lg">
          <input
            type="email"
            placeholder="Email address"
            className="p-3 w-full sm:w-3/4 rounded-md bg-[gray] bg-opacity-40 text-white placeholder-gray-400 outline-none border border-gray-600 focus:border-white"
          />
          <button className="bg-netflixRed text-white px-3 py-3 rounded-md text-md hover:bg-[#d43434]">
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;
