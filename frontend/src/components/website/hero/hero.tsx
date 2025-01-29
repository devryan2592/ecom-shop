import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-2 md:px-1 max-h-[calc(100vh-360px)]">
      <div className="grid grid-cols-12 grid-rows-2 gap-6">
        <div className="relative col-span-12 md:col-span-6 row-span-2 bg-red-500 md:aspect-square w-full aspect-video">
          <Image
            src="/ecom-banner-1.jpg"
            alt="hero-banner"
            width={2000}
            height={2000}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="grid grid-rows-2 col-span-12 sm:col-span-6 md:col-span-3 row-span-2 gap-6 h-full">
          <div className="relative row-span-1 bg-green-500 aspect-video md:aspect-square w-full">
            <Image
              src="/ecom-banner-2.jpg"
              alt="hero-banner"
              width={2000}
              height={2000}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative flex items-center justify-center row-span-1 bg-teal-600 aspect-video md:aspect-square w-full">
            <div className="flex items-center justify-center relative h-[95%] w-[95%]">
              <Image
                src="/ecom-banner-3.jpg"
                alt="hero-banner"
                width={2000}
                height={2000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="relative col-span-12 sm:col-span-6 md:col-span-3 row-span-2  md:h-full aspect-video w-full ">
          <Image
            src="/ecom-banner-4.jpg"
            alt="hero-banner"
            width={2000}
            height={2000}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
