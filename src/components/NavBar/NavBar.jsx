import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import { useState } from "react";

const NavBar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  // return (
  //   <div style={{ padding: "20px", background: "black" }}>
  //     <Anchor
  //       direction="horizontal"
  //       items={[
  //         {
  //           key: "about",
  //           href: "#About",
  //           title: <span className="text-white font-bold">About</span>,
  //         },
  //         {
  //           key: "education",
  //           href: "#Education",
  //           title: <span className="text-white font-bold">Education</span>,
  //         },
  //         {
  //           key: "experience",
  //           href: "#Experience",
  //           title: <span className="text-white font-bold">Tech Stack</span>,
  //         },
  //         {
  //           key: "projects",
  //           href: "#Projects",
  //           title: <span className="text-white font-bold">Projects</span>,
  //         },
  //         {
  //           key: "footer",
  //           href: "#Footer",
  //           title: <span className="text-white font-bold">Contact Me</span>,
  //         },
  //       ]}
  //     />
  //   </div>
  // );
  return (
    <nav className="flex flex-wrap justify-end md:items-center text-white px-10 pt-6 md:px-20 ">
      {/* <span className="text-xl font-bolf tracking-widest">Shruti Kumari </span> */}
      <span>
        <ul
          className={` ${
            menu ? "block" : "hidden"
          } x-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
        >
          <a href="#About">
            <li className="text-md transition-all duration-300 p-1 md:p-0">
              About
            </li>
          </a>

          <a href="#Education">
            <li className="text-md transition-all duration-300 p-1 md:p-0">
              Experience
            </li>
          </a>
          <a href="#Experience">
            <li className="text-md transition-all duration-300 p-1 md:p-0">
              Tech Stack
            </li>
          </a>
          <a href="#Projects">
            <li className="text-md transition-all duration-300 p-1 md:p-0">
              Projects
            </li>
          </a>
          <a href="#Footer">
            <li className="text-md transition-all duration-300 p-1 md:p-0">
              Contact Me
            </li>
          </a>
        </ul>
      </span>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowMenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(menu);
            setShowMenu(showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default NavBar;
