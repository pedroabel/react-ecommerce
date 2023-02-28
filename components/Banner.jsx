import React from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

import { urlFor } from "@/lib/client";

const Banner = ({ heroBanner }) => {
  return (
    <div className=" container mx-auto py-9 md:py-12 px-4 md:px-6">
      <div className="flex pt-10 items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
        <div className="flex flex-col md:flex-row items-strech justify-between bg-gray-100 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
          <div className="flex flex-col justify-center md:w-1/2">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
              {heroBanner.title}
            </h1>
            <p className="text-base lg:text-xl text-gray-800 mt-2">
              Save upto <span className="font-bold">{heroBanner.discount}</span>
            </p>
            <Link href={`/product/${heroBanner.product}`}>
              <span className="   flex ">
                <p className="text-base underline decoration-purple-800 decoration- underline-offset-8">
                  {heroBanner.buttonText}
                </p>
                <MdKeyboardArrowRight size={30} />
              </span>
            </Link>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
            <img src={urlFor(heroBanner.image)} alt="" />
          </div>
        </div>
        <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-100 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
              Game Console
            </h1>
            <p className="text-base lg:text-xl text-gray-800">
              Save Upto <span className="font-bold">30%</span>
            </p>
            <Link href={`/product/${heroBanner.product}`}>
              <span className="   flex ">
                <p className="text-base underline decoration-purple-800 decoration- underline-offset-8">
                  {heroBanner.buttonText}
                </p>
                <MdKeyboardArrowRight size={30} />
              </span>
            </Link>
          </div>
          <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
            <img
              src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png"
              alt=""
              className="md:w-20 md:h-20 lg:w-full lg:h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
