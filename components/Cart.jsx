import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { toast } from "react-hot-toast";
import { useStateContext } from "@/context/StateContext";
import { urlFor } from "@/lib/client";
import getStripe from "@/lib/getStripe";

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode == 500) return;

    const data = await response.json();
    toast.loading("Redirecting");
    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div
      class="relative z-10"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
      ref={cartRef}
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div class="pointer-events-auto w-screen max-w-md">
              <div class="flex h-full flex-col  bg-white shadow-xl">
                <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                  <div class="flex items-start justify-between">
                    <h2
                      class="text-lg font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      Carrinho
                    </h2>
                    <div class="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        class="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        onClick={() => setShowCart(false)}
                      >
                        <span class="sr-only">Fechar</span>
                        <svg
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className=" place-content-center m-32 pb-80">
                    <h3 className="text-center text-gray-600 font-semibold">
                      Seu carrinho está vázio
                    </h3>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6 ">
                    <div className="mt-6">
                      <a
                        href="/"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Continuar comprando
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>

                  {cartItems.length >= 1 &&
                    cartItems.map((item) => (
                      <div className="mt-8 border-b pb-4">
                        <div className="flow-root">
                          <div className="flex" key={item._id}>
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={urlFor(item?.image[0])}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                            <div class="ml-4 flex flex-1 flex-col">
                              <div>
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href="#">{item.name}</a>
                                  </h3>
                                  <p class="ml-4">R$ {item.price}</p>
                                </div>
                                <p class="mt-1 text-sm text-gray-500 uppercase">
                                  {item.category}
                                </p>
                              </div>
                              <div class="flex flex-1 items-end justify-between text-sm">
                                <div>
                                  <p className="flex rounded-sm border-gray-400 p-1">
                                    <span
                                      className="text-base py-2 px-2 cursor-pointer"
                                      onClick={() =>
                                        toggleCartItemQuantity(item._id, "dec")
                                      }
                                    >
                                      <AiOutlineMinus />
                                    </span>
                                    <span className="text-xl px-1">
                                      {item.quantity}
                                    </span>
                                    <span
                                      className="text-base py-2 px-2 cursor-pointer"
                                      onClick={() =>
                                        toggleCartItemQuantity(item._id, "inc")
                                      }
                                    >
                                      <AiOutlinePlus />
                                    </span>
                                  </p>
                                </div>

                                <div class="flex py-2 ">
                                  <button
                                    type="button"
                                    class="font-medium text-indigo-600 hover:text-indigo-500"
                                    onClick={() => onRemove(item)}
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                {cartItems.length >= 1 && (
                  <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div class="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>R$ {totalPrice.toFixed(2)}</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">
                      Entrega será calculda no final da compra.
                    </p>
                    <div class="mt-6">
                      <a
                        class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        onClick={handleCheckout}
                      >
                        Comprar
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
