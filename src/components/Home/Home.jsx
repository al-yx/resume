import ProfileImage from "../../assests/profile_picture.jpeg";
import {
  GithubFilled,
  LinkedinFilled,
  DownloadOutlined,
} from "@ant-design/icons";
import Typer from "../Typer/Typer";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full items-center md:items-start py-10 md:py-20 space-y-10 md:space-y-0 md:space-x-10">
      {/* Profile Image Section */}
      <div className="w-full md:w-2/5 flex justify-center">
        <img
          className="rounded-3xl w-4/5 md:w-full"
          src={ProfileImage}
          alt="profile image"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-full md:w-2/5 p-6 md:p-12 bg-[#2c2c2c] rounded-3xl flex flex-col space-y-4">
        {/* Typing Effect Section */}
        <div className="hidden md:flex items-center text-center md:text-left">
          <p>{`<`}</p>
          <p className="text-green-800">{`code`}</p>
          <p>{`>`}</p>
          <p className="text-gray-300 ml-2">{`I build`}</p>
          <Typer
            heading=""
            dataText={[
              "scalable frontend products.",
              "responsive, mobile-friendly interfaces.",
              "smooth, animated user experiences.",
              "third-party API integrations seamlessly.",
              "designs in Figma.",
            ]}
          />
          <p>{`</`}</p>
          <p className="text-green-800">{`code`}</p>
          <p>{`>`}</p>
        </div>

        {/* Name and Social Links */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <h1 className="text-3xl md:text-4xl font-bold leading-normal tracking-tighter">
            Shruti Kumari
          </h1>
          <div className="flex gap-x-4 text-2xl text-gray-200">
            <a
              href="https://github.com/al-yx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubFilled />
            </a>
            <a
              href="https://www.linkedin.com/in/shruti-kumari-7aa4451b5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinFilled />
            </a>
          </div>
        </div>

        {/* Introduction Text */}
        <p className="text-sm md:text-lg text-gray-300">
          {`I am a passionate Frontend Developer dedicated to creating
          user-centric web experiences. I specialise in JavaScript, ReactJs,
          NextJs, and Tailwind CSS, bringing designs to life with a focus on
          accessibility and seamless navigation. I'm excited to collaborate and
          build amazing products!`}
        </p>

        {/* Buttons Section */}
        <div className="flex sm:flex-row md:flex-row gap-4">
          <button
            onClick={() => window.open("./shruti-2024.pdf")}
            className="flex items-center justify-center text-white py-2 px-4 text-sm md:text-lg hover:opacity-80 duration-300 hover:scale-105 rounded-3xl bg-black border-2 border-green-800"
          >
            <DownloadOutlined className="mr-2" />
            Resume
          </button>
          <a href="mailto:shrutikumari14092k@gmail.com">
            <button className="flex items-center justify-center text-white py-2 px-4 text-sm md:text-lg hover:opacity-80 duration-300 hover:scale-105 rounded-3xl bg-black border-2 border-white">
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
