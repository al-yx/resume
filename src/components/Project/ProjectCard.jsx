/* eslint-disable react/prop-types */
const ProjectCard = ({ title, main, image, demoLink, githubLink }) => {
  return (
    <div className="p-6 flex flex-col w-full h-full text-white shadow-xl shadow-grey-900 rounded-3xl">
      <div>
        <img className="p-4 h-3/4 w-full" src={image} alt="" />
        <div>
          <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
            {title}
          </h3>
          <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 px-4">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-80 duration-300 hover:scale-105 rounded-3xl bg-black border-2 border-green-800">
            Demo
          </button>
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-80 duration-300 hover:scale-105 rounded-3xl bg-black border-2 border-white">
            Github Link
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
