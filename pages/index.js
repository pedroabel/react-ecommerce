import React from "react";

import { client } from "../lib/client";
import Banner from "../components/Banner";
import Product from "../components/Product";

const Home = ({ products, bannerData }) => (
  <div>
    <Banner heroBanner={bannerData.length && bannerData} />
    <div class="mx-auto  py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Nossos produtos em destaque
        </h2>
        <p className="mt-4 text-base text-gray-700">
          Aqui você encontrará uma seleção especial dos nossos melhores
          produtos, selecionados para atender às suas necessidades e desejos.
        </p>
      </div>

      <div>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
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
