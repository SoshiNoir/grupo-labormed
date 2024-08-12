"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-gray-100 shadow w-full">
      <div className="max-w-screen-xl mx-auto p-4 flex-row sm:flex-col items-center">
        <div className="flex justify-center items-center">
          <Link href="/">
            <Image
              src="/horizontalcrop.png"
              alt="logo"
              width={isScrolled ? 253 : 506}
              height={isScrolled ? 144 : 288}
              className="transition-all duration-300 object-contain"
            />
          </Link>
          <div className="flex justify-end items-center ml-auto lg:hidden">
            <Image
              src="menu.svg"
              alt="menu"
              width={32}
              height={32}
              className="inline-block cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>

        <div className="mt-4 w-full">
          <ul className="hidden h-full lg:flex justify-between w-full">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link href={link.href}>
                  <span className="tracking-wider regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-90 lg:regular-16 lg:text-center 3xl:regular-18">
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
            <div className="lg:flexCenter hidden">
              <Button
                type="button"
                title="Resultados"
                variant="btn_dark_green"
                href="https://labormed.dyndns.org/matrixnet/wfrmLogin.aspx"
                target="_blank"
              />
            </div>
          </ul>
        </div>

        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-white shadow-lg z-40 lg:hidden flex flex-col">
            <div className="flex justify-end p-4">
              <button
                className="text-gray-600 text-2xl"
                onClick={toggleMenu}
              >
                &times;
              </button>
            </div>
            <ul className="flex flex-col items-center justify-center h-full">
              {NAV_LINKS.map((link) => (
                <li key={link.key} className="py-4">
                  <Link href={link.href}>
                    <span className="block text-gray-900 hover:text-green-700 text-lg sm:text-base">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="py-4">
                <Button
                  type="button"
                  title="Resultados"
                  variant="btn_dark_green"
                  href="https://labormed.dyndns.org/matrixnet/wfrmLogin.aspx"
                  target="_blank"
                />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
