import Image from "next/image";
import React from "react";
import Right from "../icons/Right";

const Hero = () => {
  return (
    <>
      <section className="grid grid-cols-2">
        <div className="py-12 ml-[12rem] w-[550px] mt-[2rem]">
          <h1 className="text-6xl font-semibold leading-tight ">
            Everything is better
            <br />
            with a&nbsp;
            <span className="text-[#f13a01]">Pizza</span>
          </h1>
          <p className="my-6 text-gray-700 text-base text-justify">
            Pizza is the missing piece that makes every day complete, a simple
            yet delicious joy in life. "Slice into Convenience: Your Ultimate
            Pizza Ordering Experience Awaits!"
          </p>
          <div className="flex gap-4">
            <button className="bg-[#f13a01] font-semibold text-white px-6 py-4 rounded-full flex items-center gap-2 uppercase text-sm">
              Order now
              <Right />
            </button>
            <button className="flex gap-2 py-4 text-gray-600 font-semibold">
              Learn more
              <Right />
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            src={`/pizza.jpg`}
            alt="pizzaImage"
            width={700}
            height={200}
            objectFit={"contain"}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
