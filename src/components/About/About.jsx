import ProfileImage2 from "../../assests/profile_picture2.jpg";
import {
  HomeOutlined,
  CalendarOutlined,
  FundProjectionScreenOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const About = () => {
  return (
    <div
      id="About"
      className="flex flex-col lg:flex-row items-center mx-6 lg:mx-20 space-y-6 lg:space-y-0 lg:space-x-12"
    >
      {/* About Me Section */}
      <div className="w-full lg:w-3/5 p-6 bg-[#2c2c2c] rounded-3xl">
        <h2 className="text-2xl lg:text-4xl font-bold text-white">About Me</h2>
        <div className="text-gray-300">
          {/* Introduction */}
          <div className="py-4">
            <h1 className="text-xl lg:text-2xl font-semibold leading-normal py-2">
              I build things for the web.
            </h1>
            <p className="text-sm lg:text-md leading-tight">
              I am a passionate Front-end Developer with a strong background in
              building dynamic and visually appealing web applications. With
              hands-on experience in JavaScript, ReactJs, NextJs, and Tailwind
              CSS, I bring a blend of technical expertise and creative design to
              every project.
            </p>
          </div>

          {/* Achievement */}
          <div className="py-4">
            <p className="text-sm lg:text-md leading-tight">
              One of my proudest achievements was winning the Aerothon 6.0
              hackathon, where I led the UI design efforts and contributed to
              the project’s success. I’m always excited to take on new
              challenges and leverage my skills to create impactful solutions.
              Feel free to explore my portfolio and reach out if you’d like to
              collaborate or learn more about my work.
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-4">
            <div className="flex items-center">
              <HomeOutlined />
              <h1 className="text-l ml-2">
                <span className="font-bold text-white">Location:</span>{" "}
                Bengaluru, India
              </h1>
            </div>
            <div className="flex items-center">
              <CalendarOutlined />
              <h1 className="text-l ml-2">
                <span className="font-bold text-white">Date of Birth:</span>{" "}
                14th September 2000
              </h1>
            </div>
            <div className="flex items-center">
              <FundProjectionScreenOutlined />
              <h1 className="text-l ml-2">
                <span className="font-bold text-white">Education:</span> Vellore
                Institute of Technology
              </h1>
            </div>
            <div className="flex items-center">
              <PhoneOutlined />
              <h1 className="text-l ml-2">
                <span className="font-bold text-white">Phone:</span> +91
                7004053038
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Image Section */}
      <div className="w-full lg:w-2/5 flex justify-center">
        <img
          className="rounded-3xl h-[250px] w-[250px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px]"
          src={ProfileImage2}
          alt="profile image"
        />
      </div>
    </div>
  );
};

export default About;
