import React from "react";
import boxshotImage from "../assets/images/boxshot.png"
import ProptTypes from "prop-types"


function FeatureSection({image,
                        showboxshot=false,
                        boxshot,
                        video,
                        showvideo =false,
                        title,
                        description,
                        reverse = false, 

}) {
  return (
    <>
    <hr className="text-netflixGray"/>
      <section className="mt-11 p-8 w-auto overflow-hidden ">
        <div>
          <div className={`flex flex-col  gap-2 ${reverse ? "md:flex-row-reverse" : "md:flex-row" } relative w-auto`}>
            <div className="relative mx-auto grid place-items-center my-[2%] max-[640px]:w-[400px] max-[640px]:left-1/2 max-[640px]:-translate-x-1/2" >
              <img src={image} className="w-full "/>
              {showvideo && (
                <div className="absolute">
                  <video autoPlay loop muted src={video} ></video>
                </div>
              ) }
              {showboxshot && (
                <div className="flex bg-[black] border-[2px] border-netflixGray h-14 w-48 md:w-72 rounded-md   z-[1px] absolute bottom-0 left-1/2 -translate-x-1/2">
                <img src={boxshotImage}/>
                <p className="text-center mt-4 ml-5">Stranger Things</p>
              </div>
              )}
              
            </div>
              <div className="relative mt-10 text-center  flex flex-col justify-center lg:text-2xl ">
                <h1>{title}</h1>
                <p>{description}</p>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeatureSection;
