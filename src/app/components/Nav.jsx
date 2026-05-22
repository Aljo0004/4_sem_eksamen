"use client";
import { useState } from "react";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useStore from "./favorit";

const Nav = () => {
  const [navActive, setNavActive] = useState(false);
  const pathname = usePathname();
  const { openCart } = useStore();

  const isActiveRoute = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const desktopLinkClass = (href) => `relative pb-4 transition-[font-weight] duration-300 ease-out after:absolute after:bottom-0 after:left-0 after:h-1.5 after:bg-[var(--primary-blue)] after:transition-[width] after:duration-300 after:ease-out ${isActiveRoute(href) ? "font-bold after:w-full" : "font-normal after:w-0 hover:font-bold hover:after:w-full"}`;

  const mobileLinkClass = (href) => `block px-4 py-3 ${isActiveRoute(href) ? "font-bold text-[var(--primary-blue)]" : "text-black"}`;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden pl-[50px] pr-[50px] justify-between bg-[var(--primary-color)] p-4 text-[var(--secondary-color)] uppercase sm:flex">
        <div>
          <Link href="/">
            <img src="/Images/Logo.svg" alt="logo" className="w-60" />
          </Link>
        </div>
        <ul className="m-4 flex gap-8">
          <li>
            <Link href="/" className={desktopLinkClass("/")}>
              Forside
            </Link>
          </li>
          <li>
            <Link href="/productlist" className={desktopLinkClass("/productlist")}>
              Værker
            </Link>
          </li>
          <li>
            <Link href="/artists" className={desktopLinkClass("/artists")}>
              Kunstnere
            </Link>
          </li>
          <li>
            <Link href="/about" className={desktopLinkClass("/about")}>
              Om Kæntt
            </Link>
          </li>
          <li>
            <Link href="/events" className={desktopLinkClass("/events")}>
              Events
            </Link>
          </li>
          <li>
            <button type="button" onClick={openCart} aria-label="Open cart" className="relative cursor-pointer duration-300 ease-out after:absolute after:bottom-0 after:left-0 after:h-1.5 after:w-0 after:bg-[var(--primary-blue)] after:transition-[width] after:duration-300 after:ease-out hover:font-bold hover:after:w-full">
              <RiShoppingBasket2Line size={40} className="relative pb-4" />
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="flex items-center justify-between bg-background p-4 text-black uppercase sm:hidden">
        <Link href="/">
          <img src="/Images/LogoSmall.svg" alt="logo" width={50} height={20} />
        </Link>

        {/* Burger Button */}
        <button id="burger" onClick={() => setNavActive(!navActive)} className={`${navActive ? "hidden" : "relative"} z-50 flex cursor-pointer flex-col gap-1.5`}>
          <div className="h-0.5 w-6 border border-black"></div>
          <div className="h-0.5 w-6 border border-black"></div>
          <div className="h-0.5 w-6 border border-black"></div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {navActive && <div className="fixed inset-0 z-40 bg-white" onClick={() => setNavActive(false)}></div>}

      {/* Mobile Menu Modal */}
      {navActive && (
        <ul id="nav-links" className="fixed top-1/2 left-1/2 z-50 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col justify-center gap-0 rounded-lg p-4 text-center uppercase">
          {/* Close Button */}
          <button onClick={() => setNavActive(false)} className="absolute top-6 right-2 cursor-pointer text-2xl text-black transition-colors">
            <RxCross2 size={40} color="black" />
          </button>

          <li>
            <Link href="/" onClick={() => setNavActive(false)} className={mobileLinkClass("/")}>
              Forside
            </Link>
          </li>
          <li>
            <Link href="/productlist" onClick={() => setNavActive(false)} className={mobileLinkClass("/productlist")}>
              Værker
            </Link>
          </li>
          <li>
            <Link href="/artists" onClick={() => setNavActive(false)} className={mobileLinkClass("/artists")}>
              Kunstnere
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setNavActive(false)} className={mobileLinkClass("/about")}>
              Om Kæntt
            </Link>
          </li>
          <li>
            <Link href="/events" onClick={() => setNavActive(false)} className={mobileLinkClass("/events")}>
              Events
            </Link>
          </li>
          <li>
            <button type="button" onClick={openCart} aria-label="Open cart" className="">
              <RiShoppingBasket2Line size={50} className="relative pt-2" />
            </button>
          </li>
        </ul>
      )}
    </>
  );
};

export default Nav;
