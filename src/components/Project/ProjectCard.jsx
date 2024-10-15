const ProjectCard = ({ title, main, image, demoLink, githubLink }) => {
  return (
    <div className="p-6 flex flex-col w-full h-full text-white shadow-xl shadow-grey-900 rounded-3xl bg-[#2c2c2c]">
      {/* Image Section */}
      <div>
        <img
          className="p-4 h-48 md:h-64 lg:h-72 w-full object-cover rounded-xl"
          src={image}
          alt={`${title} project preview`}
        />
        {/* Title and Description */}
        <div>
          <h3 className="px-4 text-lg md:text-2xl font-bold leading-snug">
            {title}
          </h3>
          <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
        </div>
      </div>

      {/* Buttons for Demo and GitHub */}
      <div className="flex flex-col md:flex-row gap-4 px-4 mt-4 md:mt-6">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="text-white py-2 px-3 text-sm md:text-lg hover:opacity-80 duration-300 hover:scale-105 rounded-3xl bg-black border-2 border-green-800">
            Demo
          </button>
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <button className="text-white py-2 px-3 text-sm md:text-lg hover:opacity-80 duration-300 hover:scale-105 rounded-3xl bg-black border-2 border-white">
            GitHub Link
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
