import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <nav className="relative bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900  w-full z-20 top-0 left-0 border-b  border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center">
          <img
            src="insights-low-resolution-logo-color-on-transparent-background.png"
            className="h-10"
          />
        </div>
        <div className="flex md:order-2">
          <button
            type="button"
            className="cart-icon cursor-pointer relative border-none text-2xl flex"
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShopping />
            <span className="text-sm font-semibold rounded text-purple-600 flex">
              {totalQuantities}
            </span>
          </button>
        </div>
        <div className="items-center justify-between  w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col uppercase p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li></li>
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Home
              </a>
            </li>
            <li>
              <p className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Serviços
              </p>
            </li>
            <li>
              <p className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Contato
              </p>
            </li>
          </ul>
        </div>
      </div>
      {showCart && <Cart />}
    </nav>
  );
};

export default Navbar;
