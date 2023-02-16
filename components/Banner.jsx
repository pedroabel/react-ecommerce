import React from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

import { urlFor } from "@/lib/client";

const Banner = ({ heroBanner, fullBanner }) => {
  console.log(fullBanner);
  console.log(heroBanner[1]);

  return (
    <div className="">
      <div class="container mx-auto">
        <div class="grid-cols-3 py-12 space-y-2  lg:space-y-0 lg:grid lg:gap-3 ">
          {/* Banner Principal */}
          <div class="w-full col-span-2 row-span-2 rounded">
            <div className="absolute w-4/12 py-12 px-10 middle ">
              <span className="px-3 py-0 uppercase rounded-sm bg-white text-center p-1 font-semibold">
                {heroBanner && heroBanner.category}
              </span>
              <h1 className="text-6xl pt-8 text-white font-semibold">
                {fullBanner.brand}
              </h1>
              <h1 className="text-6xl font-light pt-6 text-white">
                {heroBanner.title}
              </h1>
              <div className="pt-12">
                <Link href={`/product/${heroBanner.product}`}>
                  <span class=" text-white   flex ">
                    <p className="text-xl underline decoration-green-800 decoration- underline-offset-8">
                      {heroBanner.buttonText}
                    </p>
                    <MdKeyboardArrowRight size={30} />
                  </span>
                </Link>
              </div>
            </div>
            <img src={urlFor(heroBanner.image)} className="pb-0" />
          </div>

          {/* Banner Secundario */}
          <div class="w-full rounded">
            <img src={urlFor(fullBanner[1].image)} alt="image" />
          </div>

          {/* Banner Terciario */}
          <div class="w-full rounded">
            <img src={urlFor(heroBanner.image)} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
