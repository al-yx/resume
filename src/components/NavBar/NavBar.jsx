import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { useState } from "react";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex justify-between items-center text-white px-6 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-widest">Shruti Kumari</span>
      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden">
        {menu ? (
          <RiCloseLine
            size={30}
            className="transition-all duration-300"
            onClick={() => setMenu(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="transition-all duration-300"
            onClick={() => setMenu(true)}
          />
        )}
      </div>

      {/* Menu Items */}
      <ul
        className={`${
          menu ? "block" : "hidden"
        } md:flex md:gap-6 md:items-center md:static absolute top-16 left-0 w-full bg-black md:bg-transparent bg-opacity-80 md:py-0 py-4 text-center md:text-left z-10`}
      >
        <li className="py-2 md:py-0">
          <a
            href="#About"
            className="text-md transition-all duration-300 hover:text-gray-400"
          >
            About
          </a>
        </li>
        <li className="py-2 md:py-0">
          <a
            href="#Experience"
            className="text-md transition-all duration-300 hover:text-gray-400"
          >
            Experience
          </a>
        </li>
        <li className="py-2 md:py-0">
          <a
            href="#TechStack"
            className="text-md transition-all duration-300 hover:text-gray-400"
          >
            Tech Stack
          </a>
        </li>
        <li className="py-2 md:py-0">
          <a
            href="#Projects"
            className="text-md transition-all duration-300 hover:text-gray-400"
          >
            Projects
          </a>
        </li>
        <li className="py-2 md:py-0">
          <a
            href="#Footer"
            className="text-md transition-all duration-300 hover:text-gray-400"
          >
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
