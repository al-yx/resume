import Timeline from "./Timeline";
import { TIMELINE_ITEMS, EXPERIENCE_ITEMS } from "./education.constants";

const Education = () => {
  return (
    <div id="Education" className="flex justify-between ">
      <div className="flex-1 ">
        <h1 className="text-4xl font-bold text-white p-8">Education</h1>
        <Timeline items={TIMELINE_ITEMS} />
      </div>
      <div className="flex-1 ">
        <h1 className="text-4xl font-bold text-white p-8">Experience</h1>

        <Timeline items={EXPERIENCE_ITEMS} />
      </div>
    </div>
  );
};

export default Education;
