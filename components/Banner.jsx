import React from "react";
import Link from "next/link";

import { urlFor } from "@/lib/client";

const Banner = ({ heroBanner }) => {
  return (
    <div className=" container mx-auto py-9 md:py-12 px-4 md:px-6">
      <div className="flex pt-10 items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
        <div className="flex flex-col md:flex-row items-strech justify-between bg-gray-100 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-6/12 xl:w-7/12 ">
          <div className="flex flex-col justify-center md:w-1/2 gap-2">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
              {heroBanner[0].title}
            </h1>
            <p className="text-base lg:text-xl text-gray-800 mt-2">
              Poupe até
              <span className="font-bold pl-1">{heroBanner[0].discount}</span>
            </p>
            <Link href={`/product/${heroBanner[0].product}`} className="pt-2">
              <button
                type="button"
                class=" text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
              >
                {heroBanner[0].buttonText}
              </button>
            </Link>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
            <img src={urlFor(heroBanner[0].image)} className="h-fit" />
          </div>
        </div>

        <div className="md:w-4/12  lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-100 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
              {heroBanner[1].title}
            </h1>
            <p className="text-base lg:text-xl text-gray-800 mt-2">
              Poupe até
              <span className="font-bold pl-1">{heroBanner[1].discount}</span>
            </p>
            <Link href={`/product/${heroBanner[1].product}`} className="pt-2">
              <button
                type="button"
                class=" text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
              >
                {heroBanner[1].buttonText}
              </button>
            </Link>
          </div>
          <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
            <img
              src={urlFor(heroBanner[1].image)}
              className="w-20 h-20 lg:w-40 lg:h-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
