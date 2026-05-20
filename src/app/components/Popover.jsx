"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Kurv from "./Kurv";
import useStore from "./favorit";
import { PiXThin } from "react-icons/pi";

const Popover = () => {
  const { isCartOpen, closeCart } = useStore();
  const pathname = usePathname();

  useEffect(() => {
    closeCart();
  }, [pathname, closeCart]);

  if (!isCartOpen) {
    return null;
  }

  return (
    <>
      <button type="button" onClick={closeCart} className="fixed z-1" />
      <div className="fixed right-0 top-0 z-50 w-[30%] max-sm:w-full border border-black/10 bg-white p-4 shadow-2xl">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="text-lg ml-5 font-semibold">Din kurv</h4>
          <button type="button" onClick={closeCart} className=" px-2 py-1 cursor-pointer text-sm hover:scale-110 hover:duration-300 ease-inOut transition-transform">
            <PiXThin size={50} />
          </button>
        </div>

        <Kurv />
      </div>
    </>
  );
};

export default Popover;
