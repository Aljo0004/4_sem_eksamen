"use client";
import { useState } from "react";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const Nav = () => {
  const [navActive, setNavActive] = useState(false);
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="main-border hidden justify-evenly bg-[var(--primary-color)] p-4 text-[var(--secondary-color)] uppercase sm:flex">
        <div>
          <Link href="/">
            <img src="/assets/Logo.png" alt="logo" />
          </Link>
        </div>
        <ul className="m-4 flex gap-8">
          <li>
            <Link href="/" className="relative pb-4 font-normal transition-[font-weight] duration-300 ease-out after:absolute after:bottom-0 after:left-0 after:h-1.5 after:w-0 after:bg-[var(--purple)] after:transition-[width] after:duration-300 after:ease-out hover:font-bold hover:after:w-full">
              Forside
            </Link>
          </li>
          <li>
            <Link href="/productlist" className="relative pb-4 font-normal transition-[font-weight] duration-300 ease-out after:absolute after:bottom-0 after:left-0 after:h-1.5 after:w-0 after:bg-[var(--purple)] after:transition-[width] after:duration-300 after:ease-out hover:font-bold hover:after:w-full">
              Værker
            </Link>
          </li>
          <li>
            <Link href="/artists" className="relative pb-4 font-normal transition-[font-weight] duration-300 ease-out after:absolute after:bottom-0 after:left-0 after:h-1.5 after:w-0 after:bg-[var(--purple)] after:transition-[width] after:duration-300 after:ease-out hover:font-bold hover:after:w-full">
              Kunstnere
            </Link>
          </li>
          <li>
            <Link href="/about" className="relative pb-4 font-normal transition-[font-weight] duration-300 ease-out after:absolute after:bottom-0 after:left-0 after:h-1.5 after:w-0 after:bg-[var(--purple)] after:transition-[width] after:duration-300 after:ease-out hover:font-bold hover:after:w-full">
              Om Kæntt
            </Link>
          </li>
          <li>
            <Link href="/events" className="relative pb-4 font-normal transition-[font-weight] duration-300 ease-out after:absolute after:bottom-0 after:left-0 after:h-1.5 after:w-0 after:bg-[var(--purple)] after:transition-[width] after:duration-300 after:ease-out hover:font-bold hover:after:w-full">
              Events
            </Link>
          </li>
          <li>
            <RiShoppingBasket2Line size={40} className="relative pb-4" />
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="main-border flex items-center justify-between bg-background p-4 pr-12 pl-12 text-black uppercase sm:hidden">
        <Link href="/">
          <img src="assets/Logo.png" alt="logo" className="h-8" width={150} height={50} />
        </Link>

        {/* Burger Button */}
        <button id="burger" onClick={() => setNavActive(!navActive)} className="z-50 flex cursor-pointer flex-col gap-1.5">
          <div className="h-0.5 w-6 border border-black"></div>
          <div className="h-0.5 w-6 border border-black"></div>

          <div className="h-0.5 w-6 border border-black"></div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {navActive && <div className="fixed inset-0 z-40 bg-white" onClick={() => setNavActive(false)}></div>}

      {/* Mobile Menu Modal */}
      {navActive && (
        <ul id="nav-links" className="fixed top-1/2 left-1/2 z-50 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col justify-center gap-0 rounded-lg border p-4 text-center uppercase">
          {/* Close Button */}
          <button onClick={() => setNavActive(false)} className="absolute top-4 right-4 cursor-pointer text-2xl text-black transition-colors">
            <RxCross2 size={40} color="black" />
          </button>

          <li>
            <Link href="/" onClick={() => setNavActive(false)} className="block px-4 py-3 text-black">
              Forside
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={() => setNavActive(false)} className="block px-4 py-3 text-black">
              Værker
            </Link>
          </li>
          <li>
            <Link href="/booktable" onClick={() => setNavActive(false)} className="block px-4 py-3 text-black">
              Kunstnere
            </Link>
          </li>
          <li>
            <Link href="/contactus" onClick={() => setNavActive(false)} className="block px-4 py-3 text-black">
              Om Kæntt
            </Link>
          </li>
          <li>
            <Link href="/" onClick={() => setNavActive(false)} className="block px-4 py-3 text-black">
              Events
            </Link>
          </li>
          <li></li>
        </ul>
      )}
    </>
  );
};

export default Nav;
