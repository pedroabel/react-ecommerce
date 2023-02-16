import React from "react";
import Link from "next/link";

import { urlFor } from "@/lib/client";

const Banner = ({ heroBanner }) => {
  return (
    <div className=" py-12 px-10 bg-gray-100 p-2 relative h-96 w-full leading-3 overflow-auto">
      <div>
        <div className="absolute right-0 p-9 w-2/5">
          <p className="text-base text-purple-900 font-medium">
            {heroBanner && heroBanner.category}
          </p>
          <h1 className="text-4xl font-semibold py-2">{heroBanner.title}</h1>
          <p className="text-gray-600 leading-6">{heroBanner.desc}</p>
          <Link
            href={`/product/${heroBanner.product}`}
            className="pt-10 float-right pr-5"
          >
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-100 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {heroBanner.buttonText}
              </span>
            </button>
          </Link>
        </div>

        <img
          src={urlFor(heroBanner.image)}
          className="top-0 w-3/5 h-full left-0 absolute"
        />
      </div>
    </div>
  );
};

export default Banner;
