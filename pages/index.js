import React from "react";

import { client } from "../lib/client";
import Banner from "../components/Banner";
import Product from "../components/Product";
import FooterBanner from "../components/FooterBanner";

const Home = ({ products, bannerData }) => (
  <div>
    <Banner heroBanner={bannerData.length && bannerData[0]} />

    <div className="text-left pt-3 ">
      <h2 className="text-3xl font-semibold">Em destaque</h2>
    </div>

    <div className="flex flex-wrap justify-center gap-4 mt-5 w-full py-4">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
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
