import Image from "next/image";
import Link from "next/link";

const Nav = () => {
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
          {/* <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
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
          </div> */}
          <div
            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-end flex-1 items-center">
              <li className="mr-3">
                <Link href="#sobremi" scroll={false}>
                  <a className="inline-block text-black font-bold transition-all duration-300 ease-in-out hover:text-white hover:tracking-wide hover:scale-110 py-2 px-4">
                    Sobre Mi
                  </a>
                </Link>
              </li>
              <li className="mr-3">
                <Link href="#competencias" scroll={false}>
                  <a className="inline-block text-black font-bold transition-all duration-300 ease-in-out hover:text-white hover:tracking-wide hover:scale-110 py-2 px-4">
                    Competencias
                  </a>
                </Link>
              </li>
              <li className="mr-3">
                <Link href="#proyectos" scroll={false}>
                  <a className="inline-block text-black font-bold transition-all duration-300 ease-in-out hover:text-white hover:tracking-wide hover:scale-110 py-2 px-4">
                    Proyectos/Desarrollos
                  </a>
                </Link>
              </li>
              <li className="mr-3">
                <Link href="#trabajos" scroll={false}>
                  <a className="inline-block text-black font-bold transition-all duration-300 ease-in-out hover:text-white hover:tracking-wide hover:scale-110 py-2 px-4">
                    Trabajo/Clientes
                  </a>
                </Link>
              </li>
              <li className="mr-3">
                <Link href="#contacto" scroll={false}>
                  <a className="inline-block text-black font-bold transition-all duration-300 ease-in-out hover:text-white hover:tracking-wide hover:scale-110 py-2 px-4">
                    Contacto
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
      {/* <div className="bg-gradient-to-r from-[#080055] via-[#005fa7] to-[#008ab9]">
        <div className="h-full w-full p-20">
          <div className="flex lg:flex-row mx-20 justify-between md:flex-col md:items-center flex-col">
            <ul className="flex sm:flex-row  flex-col items-center justify-center my-24">
              <li className="text-4xl text-[#4ddcc2] mx-5 font-bold body-font font-thunderMedium tracking-widest">
                Jose Pablo Arancibia Linker.
              </li>
            </ul>
            <ul className="flex flex-col items-center justify-center sm:flex-row my-24">
              <li className="text-2xl text-[#080055] mx-5 body-font font-thunderMedium cursor-pointer hover:bg-[#080055] hover:text-[#4ddcc2] hover:rounded-xl transition-all duration-500 px-5 py-1 rounded-xl">
                Item 1
              </li>
              <li className="text-2xl text-[#080055] mx-5 body-font font-thunderMedium cursor-pointer hover:bg-[#080055] hover:text-[#4ddcc2] hover:rounded-xl transition-all duration-500 px-5 py-1 rounded-xl">
                Item 2
              </li>
              <li className="text-2xl text-[#080055] mx-5 body-font font-thunderMedium cursor-pointer hover:bg-[#080055] hover:text-[#4ddcc2] hover:rounded-xl transition-all duration-500 px-5 py-1 rounded-xl">
                Item 3
              </li>
              <li className="text-2xl text-[#080055] mx-5 body-font font-thunderMedium cursor-pointer hover:bg-[#080055] hover:text-[#4ddcc2] hover:rounded-xl transition-all duration-500 px-5 py-1 rounded-xl">
                Item 4
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Nav;
