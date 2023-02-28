import React from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

import { urlFor } from "@/lib/client";

const Banner = ({ heroBanner }) => {
  return (
    <div className="w-full z-0">
      <div className="absolute min-h-min py-12 px-10 ">
        <span className="px-3 py-0 uppercase rounded-sm bg-white text-center p-1 font-semibold">
          {heroBanner && heroBanner.category}
        </span>
        <h1 className="text-6xl pt-8 text-white font-semibold">
          {heroBanner.brand}
        </h1>
        <h1 className="text-6xl font-light pt-6 text-white">
          {heroBanner.title}
        </h1>
        <div className="pt-12">
          <Link href={`/product/${heroBanner.product}`}>
            <span className=" text-white   flex ">
              <p className="text-xl underline decoration-purple-800 decoration- underline-offset-8">
                {heroBanner.buttonText}
              </p>
              <MdKeyboardArrowRight size={30} />
            </span>
          </Link>
        </div>
      </div>
      <img src={urlFor(heroBanner.image)} className="" />
    </div>
  );
};

export default Banner;
