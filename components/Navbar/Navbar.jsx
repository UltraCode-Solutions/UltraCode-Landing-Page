"use client";
import Link from "next/link";
import NavLink from "./Navlink";
import { useState } from "react";
import NavMobile from "./NavMobile";
import Image from "next/image.js";
const navLinks = [
   { title: "About", path: "#about", offset: -55 },
   { title: "Projects", path: "#projects", offset: -110 },
   { title: "Contact", path: "#contact", offset: -130 },
   { title: "Work with Us", path: "#work", offset: -130 },
];

export default function Navbar() {
   const [navbarOpen, setNavbarOpen] = useState(false);

   const scrollToSection = (path, offset) => {
      const element = document.querySelector(path);
      if (element) {
         const offsetTop = element.offsetTop + offset;
         window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
         });
         setNavbarOpen(false);
      }
   };

   return (
      <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-100 z-50 lg:bg-opacity-95 lg:mb-4 border-b-2 border-[#33353f] pb-3">
         <div className="flex flex-wrap items-center justify-between  p-3 pb-0">
            <Link href={"/"} className="text-2xl md:text-3xl text-white font-semibold">
               <p className="ml-4 text-base flex items-center md:text-2xl 2xl:text-4xl 2xl:mb-2">
                  <Image
                     src="/ultracode.jpg"
                     width={50}
                     height={50}
                     alt="Picture of the author"
                  ></Image>
                  <span className="text-transparent bg-[#043D7A] bgClipText">Ultra</span>
                  <span className=" text-black bgClipText">Code</span>
               </p>
            </Link>
            <div className="mobile-menu block md:hidden">
               {navbarOpen ? (
                  <button
                     onClick={() => setNavbarOpen(false)}
                     className="flex items-center rounded px-3 py-2 border border-black text-black "
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M6 18L18 6M6 6l12 12"
                        />
                     </svg>
                  </button>
               ) : (
                  <button
                     onClick={() => setNavbarOpen(true)}
                     aria-label="Navbar Button"
                     className="flex items-center rounded px-3 py-2 border border-black text-black"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                     </svg>
                  </button>
               )}
            </div>
            <div className="flex justify-between w-3/4">
               <div
                  className="menu hidden md:flex  md:w-auto z-50 justify-between "
                  id="navbar"
               >
                  <ul className="flex md:space-x-8">
                     {navLinks.map((link, index) => (
                        <li key={index}>
                           <NavLink
                              onClick={() => scrollToSection(link.path, link.offset)}
                              title={link.title}
                           />
                        </li>
                     ))}
                  </ul>
               </div>
               <div> Darkmode</div>
            </div>
         </div>
         <ul className=" flex flex-col items-center">
            {navbarOpen
               ? navLinks.map((link, index) => (
                    <li key={index}>
                       <NavMobile
                          onClick={() => scrollToSection(link.path, link.offset)}
                          title={link.title}
                       />
                    </li>
                 ))
               : null}
         </ul>
      </nav>
   );
}
