import React, { useState } from "react";
import  Link from "next/link";

function Nav({ onSearchButtonClick }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
  
      <div className="hidden md:block">
        <nav className="flex bg-black">
          <div className="flex basis-3/4 justify-evenly items-center mr-4">
            <div
              onClick={() => {
                toggleMenu();
                onSearchButtonClick();
              }}
              className="text-white focus:outline-none cursor-pointer ">
              {isMenuOpen ? (
                // Close icon (X)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white text-[0.937rem] font-bold">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </div>
            <Link
            href="/"
            exact
            className="text-white text-[0.937rem] font-bold"
            activeClassName="font-bold">
            হোম
          </Link>
            <Link
              href="/category/Latest"
              className="text-white text-[0.937rem] font-bold">
              সর্বশেষ
            </Link>
            <Link
              href="/category/Politics"
              className="text-white text-[0.937rem] font-bold">
             রাজনীতি
            </Link>
            <Link
              href="/category/National"
              className="text-white text-[0.937rem] font-bold">
              বাংলাদেশ
            </Link>
            <Link
              href="/category/Crime"
              className="text-white text-[0.937rem] font-bold">
              অপরাধ
            </Link>
            <Link
              href="/category/World"
              className="text-white text-[0.937rem] font-bold">
              বিশ্ব
            </Link>
            
            <Link
              href="/category/Science"
              className="text-white text-[0.937rem] font-bold">
              বিজ্ঞান
            </Link>
            <Link
              href="/category/Education"
              className="text-white text-[0.937rem] font-bold">
              শিক্ষাঙ্গন
            </Link>
            <Link
              href="/category/Health"
              className="text-white text-[0.937rem] font-bold">
              স্বাস্থ্য
            </Link>
            <Link
              href="/category/Entertainment"
              className="text-white text-[0.937rem] font-bold">
              বিনোদন
            </Link>
            <Link
              href="/category/Sports"
              className="text-white text-[0.937rem] font-bold">
              খেলাধুলা
            </Link>
          </div>
          <div className="flex basis-1/4 justify-evenly items-center ">
          <Link
              href="/category/Distric"
              className="text-white text-[0.937rem] font-bold">
              বিভাগ
            </Link>
            <Link
              href="/category/Zila"
              className="text-white text-[0.937rem] font-bold">
              জেলা
            </Link>
            <Link
              href="/category/Local"
              className="text-white text-[0.937rem] font-bold">
              স্থানীয়
            </Link>
            <div className=" cursor-pointer" onClick={onSearchButtonClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <Link
              href="/auth/login"
              className="text-white p-1 rounded text-[0.937rem] border border-white font-bold">
              লগ-ইন
            </Link>
          </div>
        </nav>
      </div>
      <div className="block md:hidden bg-black text-white py-3">
        <div className="flex justify-between">
          <div className="flex items-center">
            {/* <div className="menu-bar pl-3 pr-3 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white text-[0.937rem] font-bold ">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div> */}
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none lg:hidden ">
              {isMenuOpen ? (
                // Close icon (X)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white text-[0.937rem] font-bold">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
            {/* <div className="logo flex justify-center ">
              <img src="/images/header/logo.png" className="h-10 " alt="" />
            </div> */}
          </div>

          <div className="flex items-center pl-3 pr-3">
            <div
              className=" cursor-pointer mr-43"
              onClick={onSearchButtonClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <div>লাইভ টিভি</div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="md:hidden block">
        <div
          className={`flex flex-col lg:flex flex-grow items-center  bg-black pb-4 ${
            isMenuOpen ? "block" : "hidden"
          }`}>
          <Link
            href="/"
            exact
            className="text-white text-[0.937rem] font-bold"
            activeClassName="font-bold">
            হোম
          </Link>
          <Link
              href="/category/Latest"
              className="text-white text-[0.937rem] font-bold">
              সর্বশেষ
            </Link>
            <Link
              href="/category/Politics"
              className="text-white text-[0.937rem] font-bold">
             রাজনীতি
            </Link>
            <Link
              href="/category/National"
              className="text-white text-[0.937rem] font-bold">
              বাংলাদেশ
            </Link>
            <Link
              href="/category/Crime"
              className="text-white text-[0.937rem] font-bold">
              অপরাধ
            </Link>
            <Link
              href="/category/World"
              className="text-white text-[0.937rem] font-bold">
              বিশ্ব
            </Link>
            
            <Link
              href="/category/Science"
              className="text-white text-[0.937rem] font-bold">
              বিজ্ঞান
            </Link>
            <Link
              href="/category/Education"
              className="text-white text-[0.937rem] font-bold">
              শিক্ষাঙ্গন
            </Link>
            <Link
              href="/category/Health"
              className="text-white text-[0.937rem] font-bold">
              স্বাস্থ্য
            </Link>
            <Link
              href="/category/Entertainment"
              className="text-white text-[0.937rem] font-bold">
              বিনোদন
            </Link>
            <Link
              href="/category/Sports"
              className="text-white text-[0.937rem] font-bold">
              খেলাধুলা
            </Link>
          </div>
          <div className="flex basis-1/4 justify-evenly items-center ">
            <Link
              href="/category/Distric"
              className="text-white text-[0.937rem] font-bold">
              বিভাগ
            </Link>
            <Link
              href="/category/Zila"
              className="text-white text-[0.937rem] font-bold">
              জেলা
            </Link>
            <Link
              href="/category/Local"
              className="text-white text-[0.937rem] font-bold">
              স্থানীয়
            </Link>
            <div className=" cursor-pointer" onClick={onSearchButtonClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <Link
              href="/auth/login"
              className="text-white p-1 rounded text-[0.937rem] border border-white font-bold">
              লগ-ইন
            </Link>

          {/* Add more NavLink components as needed */}
        </div>
      </div>
    </>
  );
}

export default Nav;
