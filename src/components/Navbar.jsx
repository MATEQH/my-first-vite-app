import { Fragment, useState, useEffect } from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { MdInterpreterMode } from "react-icons/md";

const navData = [
  {
    id: "hero",
    title: "Home",
    to: "#hero",
    onlyMobile: false,
  },
  {
    id: "second",
    title: "About",
    to: "#second",
    onlyMobile: false,
  },
  {
    id: "pricing",
    title: "Pricing",
    to: "#pricing",
    onlyMobile: false,
  },
  {
    id: "dashboard",
    title: "Dashboard",
    to: "/dashboard",
    onlyMobile: true,
  },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.target.id);
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Állítsd be az observer-t minden szakaszra az oldalon
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="sticky w-full top-0 left-0 bg-gray-200 z-30">
      <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-14 flex items-center justify-between bg-gray-200">
        <a className="text-3xl font-semibold" href="">
          LOGO
        </a>
        <div className="w-full md:w-fit">
          <div className="hidden md:flex gap-4 items-center">
            {navData.map((item, index) => (
              <a
                className={`${
                  (item.id === "dashboard" || activeSection === item.id) &&
                  "py-1 px-2 rounded bg-indigo-600 text-white"
                }`}
                key={item.id}
                href={item.to}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <div className="block md:hidden" onClick={(e) => toggleMenu()}>
          {isOpen ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
        </div>
      </nav>
      <div
        className={`fixed md:hidden left-0 top-0 py-4 w-full bg-gray-200 bg-opacity-90 transform transition-transform duration-1000 ease-in-out ${
          isOpen ? "translate-y-14" : "-translate-y-full"
        } border-y-2 border-white -z-20`}
      >
        <div className="flex flex-col gap-4 items-center text-2xl">
          {navData.map((item, index) => (
            <a
              className={`${
                (item.id === "dashboard" || activeSection === item.id) &&
                "py-1 px-2 rounded bg-indigo-600 text-white"
              }`}
              key={item.id}
              href={item.to}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
