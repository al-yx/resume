import {
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiMysql } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">
        Core tech stack
      </h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <FaReact color="#61DAFB" size={50} />
          <FaJs color="#F7DF1E" size={50} />
          <RiTailwindCssFill color="#1572B6" size={50} />
          <FaHtml5 color="#E34F26" size={50} />
          <FaNodeJs color="#3C873A" size={50} />
          <FaJava color="#5382a1" size={50} />
          <SiTypescript color="#007acc" size={50} />
          <FaFigma color="#F24E1E" size={50} />

          <FaGithub color=" #6e5494" size={50} />
          <SiMysql color=" #FFA500" size={50} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
