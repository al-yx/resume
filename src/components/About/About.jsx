import ProfileImage2 from "../../assests/profile_picture2.jpg";
import {
  HomeOutlined,
  CalendarOutlined,
  FundProjectionScreenOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
const About = () => {
  return (
    <div id="About" className="flex mx-20">
      <div className="md:w-4/5 p-12 m-6 bg-[#2c2c2c] rounded-3xl">
        <h2 className="text-2xl md:text-4xl font-bold text-white">About me</h2>
        <div className=" text-gray-300">
          <div className="flex py-4">
            <span className="w-96">
              <h1 className="text-xl md:text-2xl font-semibold leading-normal py-2">
                I build things for the web.
              </h1>
              <p className="text-sm md:text-md leading-tight">
                I am a passionate Front-end Developer with a strong background
                in building dynamic and visually appealing web applications.
                With hands-on experience in JavaScript, ReactJs, NextJs, and
                Tailwind CSS, I bring a blend of technical expertise and
                creative design to every project.
              </p>
            </span>
          </div>
          <div className="flex py-2">
            <span className="w-96">
              <p className="text-sm md:text-md leading-tight">
                One of my proudest achievements was winning the Aerothon 6.0
                hackathon, where I led the UI design efforts and contributed to
                the project’s success. I’m always excited to take on new
                challenges and leverage my skills to create impactful solutions.
                Feel free to explore my portfolio and reach out if you’d like to
                collaborate or learn more about my work.
              </p>
            </span>
          </div>
          <div className="grid grid-cols-2 gap-5 py-2">
            <div className="flex items-center">
              <HomeOutlined />
              <h1 className="text-l ml-2">
                <span className="font-bold text-white"> Location:</span>{" "}
                Bengaluru, India
              </h1>
            </div>
            <div className="flex items-center">
              <CalendarOutlined />
              <h1 className="text-l ml-2">
                <span className="font-bold text-white"> Date of Birth: </span>
                14th September 2000
              </h1>
            </div>
            <div className="flex items-center">
              <FundProjectionScreenOutlined />
              <h1 className="text-l ml-2">
                <span className="font-bold text-white"> Education: </span>
                Vellore Institute of Technology
              </h1>
            </div>
            <div className="flex items-center">
              <PhoneOutlined />
              <h1 className="text-l ml-2">
                <span className="font-bold text-white"> Phone: </span>
                +91 7004053038
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-[300px] top-[800px] h-[300px] w-[400px]">
        <img
          className="rounded-3xl h-[400px] "
          src={ProfileImage2}
          alt="profile image"
        />
      </div>
    </div>
  );
};

export default About;
