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
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-10">
        Core Tech Stack
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {/* Each icon is wrapped in a div to ensure spacing and responsiveness */}
        <div className="flex justify-center items-center">
          <FaReact color="#61DAFB" size={50} aria-label="React" />
        </div>
        <div className="flex justify-center items-center">
          <FaJs color="#F7DF1E" size={50} aria-label="JavaScript" />
        </div>
        <div className="flex justify-center items-center">
          <RiTailwindCssFill
            color="#1572B6"
            size={50}
            aria-label="Tailwind CSS"
          />
        </div>
        <div className="flex justify-center items-center">
          <FaHtml5 color="#E34F26" size={50} aria-label="HTML5" />
        </div>
        <div className="flex justify-center items-center">
          <FaNodeJs color="#3C873A" size={50} aria-label="Node.js" />
        </div>
        <div className="flex justify-center items-center">
          <FaJava color="#5382a1" size={50} aria-label="Java" />
        </div>
        <div className="flex justify-center items-center">
          <SiTypescript color="#007acc" size={50} aria-label="TypeScript" />
        </div>
        <div className="flex justify-center items-center">
          <FaFigma color="#F24E1E" size={50} aria-label="Figma" />
        </div>
        <div className="flex justify-center items-center">
          <FaGithub color="#6e5494" size={50} aria-label="GitHub" />
        </div>
        <div className="flex justify-center items-center">
          <SiMysql color="#FFA500" size={50} aria-label="MySQL" />
        </div>
      </div>
    </div>
  );
};

export default Experience;
