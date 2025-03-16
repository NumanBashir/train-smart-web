import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-[#A8CB62] text-black relative flex justify-end">
      <Image
        src="/assets/taastrup_sort_tekst.png"
        alt="Taastrup FC"
        height={125}
        width={125}
        className="absolute top-2 left-2 z-10"
      />
      <div className="flex-none items-end">
        <ul className="menu menu-horizontal px-1">
          <li className="relative group">
            <a className="cursor-pointer flex items-center">
              Klubben
              <span className="ml-[-2px] transition-transform duration-300 group-hover:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </span>
            </a>
            <ul className="text-black absolute left-[-16px] mt-9 w-48 shadow-md bg-base-100 rounded-2xl p-2 hidden group-hover:block">
              <li>
                <a href="#">Om klubben</a>
              </li>
              <li>
                <a href="#">Ledere og trænere</a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <a className="cursor-pointer flex items-center">
              Nyheder
              <span className="ml-[-2px] transition-transform duration-300 group-hover:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </span>
            </a>
            <ul className="text-black absolute left-[-16px] mt-9 w-48 shadow-md bg-base-100 rounded-2xl p-2 hidden group-hover:block">
              <li>
                <a href="#">dwdw nyt</a>
              </li>
              <li>
                <a href="#">Ledere og trænere</a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <a className="cursor-pointer flex items-center">
              Herre/Drenge
              <span className="ml-[-2px] transition-transform duration-300 group-hover:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </span>
            </a>
            <ul className="text-black absolute left-[-16px] mt-9 w-48 shadow-md bg-base-100 rounded-2xl p-2 hidden group-hover:block">
              <li>
                <a href="#">Om klubben</a>
              </li>
              <li>
                <a href="#">Ledere og trænere</a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <a className="cursor-pointer flex items-center">
              Kvinder/piger
              <span className="ml-[-2px] transition-transform duration-300 group-hover:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </span>
            </a>
            <ul className="text-black absolute left-[-16px] mt-9 w-48 shadow-md bg-base-100 rounded-2xl p-2 hidden group-hover:block">
              <li>
                <a href="#">Om klubben</a>
              </li>
              <li>
                <a href="#">Ledere og trænere</a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <a className="cursor-pointer flex items-center">
              Praktisk
              <span className="ml-[-2px] transition-transform duration-300 group-hover:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </span>
            </a>
            <ul className="text-black absolute left-[-16px] mt-9 w-48 shadow-md bg-base-100 rounded-2xl p-2 hidden group-hover:block">
              <li>
                <a href="#">Om klubben</a>
              </li>
              <li>
                <a href="#">Ledere og trænere</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
