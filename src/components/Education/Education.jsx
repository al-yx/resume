import Timeline from "./Timeline";
import { TIMELINE_ITEMS, EXPERIENCE_ITEMS } from "./education.constants";

const Education = () => {
  return (
    <div
      id="Education"
      className="flex flex-col md:flex-row justify-between px-2 md:px-8 py-6 md:py-12"
    >
      {/* Education Section */}
      <div className="flex-1">
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-8">
          Education
        </h1>
        <Timeline items={TIMELINE_ITEMS} />
      </div>

      {/* Experience Section */}
      <div className="flex-1">
        <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-8">
          Experience
        </h1>
        <Timeline items={EXPERIENCE_ITEMS} />
      </div>
    </div>
  );
};

export default Education;
