import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleSearch = () => setShowSearch(!showSearch);

  return (
    <nav className="bg-[#53528f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" legacyBehavior>
                <a className="text-white font-bold text-xl">Your Logo</a>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" legacyBehavior>
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                </Link>
                <Link href="/about" legacyBehavior>
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                </Link>
                <Link href="/contact" legacyBehavior>
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                className="text-gray-300 hover:bg-gray-700 hover:text-white p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                onClick={toggleSearch}
              >
                <span className="sr-only">Search</span>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
          <div className="">
                <button className="text-gray-300 hover:bg-gray-700 hover:text-white p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    onClick={toggleSearch}
                >
                    <span className="sr-only">Search</span>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={faBars} />
            </button>
         
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          showMenu ? "block" : "hidden"
        } md:hidden bg-gray-800`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" legacyBehavior>
            <a className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </Link>
        </div>
        {/* <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <Link href="/" legacyBehavior>
                <a className="text-white font-bold text-xl">Your Logo</a>
              </Link>
            </div>
            <div className="ml-auto">
              <button className="text-gray-300 hover:bg-gray-700 hover:text-white p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                onClick={toggleSearch}
              >
                <span className="sr-only">Search</span>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* Search modal */}
      <div
        className={`${
          showSearch ? "fixed" : "hidden"
        } inset-0 bg-gray-800 bg-opacity-75 z-50`}
      >
        <div className="flex justify-center pt-10">
          <div className="w-full max-w-md">
            <div className="relative">
              <input
                className="w-full bg-white text-gray-900 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-md py-2 pl-10 mb-3"
                type="text"
                placeholder="Search"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar