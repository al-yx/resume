import { BsCaretRight } from "react-icons/bs";

const TimelineItem = ({ year, companyName, description, companyUrl, role }) => {
  return (
    <div>
      {/* Timeline Header */}
      <div className="flex flex-col md:flex-row gap-2 items-start md:items-center mb-4">
        <button className="text-white border border-green-800 px-3 py-1 rounded-full text-xs md:text-sm">
          {year}
        </button>
        <h3 className="text-base md:text-lg font-bold text-gray-300 p-1">
          {role}{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={companyUrl}
            className="text-green-500 hover:text-green-300 transition-all duration-200"
          >
            {companyName}
          </a>
        </h3>
      </div>

      {/* Timeline Content */}
      <div className="mb-6 md:mb-8 flex flex-col gap-4 px-6 md:px-10 text-gray-300 py-4">
        {description.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <BsCaretRight className="text-green-800 mt-1 flex-shrink-0" />
            <p className="text-xs md:text-sm lg:text-base leading-relaxed">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineItem;
