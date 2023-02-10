import React from "react";

import { client } from "../lib/client";
import Banner from "../components/Banner";
import Product from "../components/Product";
import FooterBanner from "../components/FooterBanner";

const Home = ({ productsData, bannerData }) => (
  <div>
    <Banner heroBanner={bannerData[0]} />
    {console.log(productsData)}
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {console.log(productsData)}
      {productsData?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const productsQuery = '*[_type == "product"]';
  const productsData = await client.fetch(productsQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { productsData, bannerData },
  };
};

export default Home;
