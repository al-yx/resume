import TimelineItem from "./TimeLineItem";

const Timeline = ({ items }) => (
  <div className="p-8 flex">
    <div className="border-l border-neutral-600 absolute"></div>
    <div>
      {items.map(
        ({ year, companyName, description, role, companyUrl }, index) => (
          <TimelineItem
            key={index}
            year={year}
            role={role}
            companyUrl={companyUrl}
            companyName={companyName}
            description={description}
          />
        )
      )}
    </div>
  </div>
);

export default Timeline;
