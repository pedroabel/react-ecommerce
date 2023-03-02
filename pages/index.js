import React from "react";

import { client } from "../lib/client";
import Banner from "../components/Banner";
import Product from "../components/Product";
import FooterBanner from "../components/FooterBanner";

const Home = ({ products, bannerData }) => (
  <div>
    <Banner heroBanner={bannerData.length && bannerData[0]} />
    <div className="justify-center">
      <div class="mx-auto max-w-md text-center">
        <h2 class="text-2xl font-bold sm:text-3xl">Our featured Aroma Range</h2>
        <p class="mt-4 text-base text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
          faucibus massa dignissim tempus.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-5 w-full py-4">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>

    {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
