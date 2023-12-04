import { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navData = [
  {
    id: "hero",
    title: "Hero",
    to: "#hero",
    onlyMobile: false,
  },
  {
    id: "features",
    title: "Features",
    to: "#features",
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
  const [scrollY, setScrollY] = useState(0);
  const sectionRefs = useRef([]);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);

    // Find the active section based on scroll position
    let currentSection = "";
    for (let i = sectionRefs.current.length - 1; i >= 0; i--) {
      const section = sectionRefs.current[i];
      if (section.offsetTop <= scrollY + 100) {
        currentSection = section.id;
        break;
      }
    }

    setActiveSection(currentSection);
  };

  useEffect(() => {
    handleScroll();

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Store section refs in the array
    sectionRefs.current = Array.from(document.querySelectorAll("section"));

    handleScroll();
  }, []);

  return (
    <header
      className={`sticky w-full top-0 left-0 z-30 bg-gray-200 ${
        scrollY > 150 ? "md:bg-gray-200" : "md:bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-16 flex items-center justify-between`}
      >
        <a className="text-3xl font-semibold" href="">
          LOGO
        </a>
        <div className="w-full md:w-fit text-xl">
          <div className="hidden md:flex gap-4 items-center">
            {navData.map((item, index) => (
              <span
                className={`cursor-pointer ${
                  (item.id === "dashboard" || activeSection === item.id) &&
                  "py-1 px-2 rounded bg-indigo-600 text-white"
                }`}
                key={item.id}
                onClick={() => {
                  const section = document.getElementById(item.id);
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item.title}
              </span>
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
        className={`fixed md:hidden left-0 top-0 py-4 w-full bg-gray-200 bg-opacity-90 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-16" : "-translate-y-full"
        } border-y-2 border-white -z-20`}
      >
        <div className="flex flex-col gap-4 items-center text-2xl">
          {navData.map((item, index) => (
            <a
              className={`cursor-pointer ${
                (item.id === "dashboard" || activeSection === item.id) &&
                "py-1 px-2 rounded bg-indigo-600 text-white"
              }`}
              onClick={() => {
                const section = document.getElementById(item.id);
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
