import { Fragment, useState } from "react";
import clsx from "clsx";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "About", href: "#", current: true },
  { name: "Features", href: "#", current: false },
  { name: "Pricing", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuClass = clsx({
    "z-10 bg-gray-200 sm:bg-transparent transition-all duration-500 left-0 w-full absolute sm:static py-4 sm:py-auto pl-2 pl-auto flex sm:flex-row flex-col sm:items-center gap-8 sm:gap-6": true,
    "top-10": isOpen,
    "top-[-48rem]": !isOpen,
  });

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="sticky top-0 bg-gray-200 z-30">
      <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex justify-between items-center text-center text-gray-900">
        <div>
          <img
            className="w-12 cursor-pointer"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="..."
          />
        </div>
        <div className="flex flex-col sm:flex-row">
          <ul className={menuClass}>
            <li>
              <a className="hover:text-gray-500" href="">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-indigo-600 hover:bg-indigo-400 text-white px-5 py-2 rounded-md">
            Dashboard
          </button>
          <div className="sm:hidden" onClick={(e) => toggleMenu()}>
            {isOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
