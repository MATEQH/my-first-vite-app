import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-12 sticky top-0 border flex items-center bg-gray-200 px-2 sm:px-2 md:px-12 lg:px-32">
      <nav className="flex items-center text-2xl md:text-xl w-full uppercase justify-between">
        <a className="font-semibold" href="">
          LOGO
        </a>
        <ul className="hidden md:flex gap-x-4">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
        </ul>
        <div className="flex gap-x-2 items-center">
          <button className="hidden sm:block border px-4 py-1 text-white rounded bg-indigo-600">
            <a href="">PANEL</a>
          </button>
          <span
            className="block md:hidden border px-2 py-1"
            onClick={(e) => setIsOpen(!isOpen)}
          >
            {isOpen ? <MdClose size={36} /> : <MdMenu size={36} />}
          </span>
        </div>
      </nav>
    </header>
  );
}
