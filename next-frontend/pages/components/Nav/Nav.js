import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";

const Nav = () => {
  const [activeTab, setActiveTab] = useState(false);


  console.log(activeTab);
  return (
    <>
      <nav
        id="header"
        className="fixed w-full z-30 top-0 text-white bg-gradient-to-r from-[#080055] to-[#008ab9]"
      >
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <Link href="/" scroll={false}>
              <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl font-thunderLight">
                José Pablo Arancibia Linker
              </a>
            </Link>
          </div>
          <div className="block pr-4">
            <button
              className="flex items-center p-1 text-white hover:text-teal-500 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              onClick={() => setActiveTab(!activeTab)}
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <CSSTransition
            in={activeTab}
            timeout={300}
            classNames="tab"
            unmountOnExit
          >
            <div
              className="w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 lg:bg-transparent text-white p-4 lg:p-0 z-20"
            >
              <ul className="list-reset flex flex-col lg:flex justify-end flex-1 items-center">
                <li className="mr-3">
                  <Link href="#sobremi" scroll={false}>
                    <a className="inline-block text-white font-bold transition-all duration-300 ease-in-out hover:text-teal-300 hover:tracking-wide hover:scale-110 py-2 px-4">
                      Sobre Mi
                    </a>
                  </Link>
                </li>
                <li className="mr-3">
                  <Link href="#competencias" scroll={false}>
                    <a className="inline-block text-white font-bold transition-all duration-300 ease-in-out hover:text-teal-300 hover:tracking-wide hover:scale-110 py-2 px-4">
                      Competencias
                    </a>
                  </Link>
                </li>
                <li className="mr-3">
                  <Link href="#proyectos" scroll={false}>
                    <a className="inline-block text-white font-bold transition-all duration-300 ease-in-out hover:text-teal-300 hover:tracking-wide hover:scale-110 py-2 px-4">
                      Proyectos/Desarrollos
                    </a>
                  </Link>
                </li>
                <li className="mr-3">
                  <Link href="#trabajos" scroll={false}>
                    <a className="inline-block text-white font-bold transition-all duration-300 ease-in-out hover:text-teal-300 hover:tracking-wide hover:scale-110 py-2 px-4">
                      Trabajo/Clientes
                    </a>
                  </Link>
                </li>
                <li className="mr-3">
                  <Link href="#contacto" scroll={false}>
                    <a className="inline-block text-white font-bold transition-all duration-300 ease-in-out hover:text-teal-300 hover:tracking-wide hover:scale-110 py-2 px-4">
                      Contacto
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </CSSTransition>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
    </>
  );
};

export default Nav;
