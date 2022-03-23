/** @format */

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";

import { HeaderLogo, TextWithIcon } from "../components";
import { LoginIcon, ServiceIcon } from "../icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isLgScreen = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const router = useRouter();

  const leftSideLinks = (
    <div className={` bg-[#FF733C] `}>
      <ul
        className={`text-gray-600 text-lg tracking-wide flex flex-col lg:flex-row`}>
        <li className="navbar-leftside-elements">
          <Link href="/">
            <a className="pl-8 lg:pl-0">Apply</a>
          </Link>
        </li>
        <li className="navbar-leftside-elements">
          <Link href="/">
            <a className="pl-8">How it works</a>
          </Link>
        </li>
        <li className="navbar-leftside-elements">
          <Link href="/">
            <a className="pl-8">About Us</a>
          </Link>
        </li>
        <li className="navbar-leftside-elements">
          <Link href="/">
            <a className="pl-8">Blog</a>
          </Link>
        </li>
      </ul>
    </div>
  );
  const mobileScreenLayout = (
    <>
      <HeaderLogo />
      <nav>
        <div
          onClick={() => setIsOpen((prevVal) => !prevVal)}
          className="navbar-icon">
          <div
            className={`navbar-icon-slices  ${
              isOpen ? "-rotate-45  absolute" : "rotate-0"
            }`}
          />
          <div
            className={`navbar-icon-slices ${
              isOpen ? "opacity-0" : "opacity-100"
            } `}
          />

          <div
            className={`navbar-icon-slices ${
              isOpen ? "rotate-45  absolute" : "rotate-0"
            }`}
          />
        </div>
      </nav>
    </>
  );

  const lgScreenLayout = (
    <>
      {leftSideLinks}
      <HeaderLogo />
      <div className="flex items-center gap-3">
        <div
          className="relative cursor-pointer"
          onClick={() => router.replace("/register")}>
          <TextWithIcon
            text="Partner sign up"
            order="fromRight"
            icon={<ServiceIcon fill="black" />}
          />
          {router?.pathname === "/register" && (
            <div
              data-testid="register"
              className="bg-black w-32 rounded-tl-lg rounded-tr-lg h-2 absolute -bottom-4"></div>
          )}
        </div>
        <div data-testid="register-btn" className="py-1.5 px-2.5 border border-black rounded-full cursor-pointer transition-all hover:bg-white">
          <TextWithIcon
            text="Partner Login"
            order="fromRight"
            icon={<LoginIcon />}
          />
        </div>
      </div>
    </>
  );

  return (
    <div className="lg:bg-[#5A698C] lg:p-6">
      <header className="layout-container py-5 lg:py-1.5 bg-[#FF733C] flex justify-between items-center lg:rounded-r-full lg:rounded-l-full">
        {isLgScreen ? lgScreenLayout : mobileScreenLayout}
      </header>
      {isOpen && !isLgScreen && leftSideLinks}
    </div>
  );
};

export default Header;
