import { BsCaretRight } from "react-icons/bs";

const TimelineItem = ({ year, companyName, description, companyUrl, role }) => {
  return (
    <div>
      <div className="flex gap-1 items-center">
        <button className="text-white border border-green-800 px-4 py-2 rounded-full text-sm">
          {year}
        </button>
        <h3 className="text-lg font-bold text-gray-300 p-1">
          {role}
          <a target="_blank" rel="noopener noreferrer" href={companyUrl}>
            {companyName}
          </a>
        </h3>
      </div>

      <div className="mb-8 flex flex-col gap-4 px-10 text-gray-300 py-4">
        {description.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <BsCaretRight
              className="text-green-800 w-1/4"
              style={{ width: "10%" }}
            />
            <p className="text-sm md:text-base w-3/4" style={{ width: "90%" }}>
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineItem;
