import ProfileImage from "../../assests/profile_picture.jpeg";
import {
  GithubFilled,
  LinkedinFilled,
  DownloadOutlined,
} from "@ant-design/icons";
import Typer from "../Typer/Typer";

const Home = () => {
  return (
    <div className="text-white flex w-full items-start py-10 md:py-20 ">
      <div>
        <img
          className="rounded-r-3xl h-3/6 md:h-3/6"
          src={ProfileImage}
          alt="profile image"
          width={500}
        />
      </div>
      <div
        className="md:w-2/4 md:p-12 bg-[#2c2c2c] rounded-3xl mt-12 absolute"
        style={{ left: "500px" }}
      >
        <div>
          <span className="flex">
            <p>{`<`}</p>
            <p className="text-green-800">{`code`}</p>
            <p>{`>`}</p>
            <p className="text-gray-300">{`I build`}</p>
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
          </span>
        </div>
        <div className="flex gap-y-2 py-4 items-center">
          <h1 className="text-3xl md:text-3xl font-bold flex leading-normal tracking-tighter mr-4">
            Shruti Kumari
          </h1>
          <div className="flex gap-x-6 sm:gap-x-3 text-xl text-gray-200">
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
        <p className="text-sm md:text-xl tracking-tight text-gray-300">
          {`
I am a passionate Frontend Developer dedicated to creating user-centric web experiences. I specialise in JavaScript, ReactJs, NextJs, and Tailwind CSS, bringing designs to life with a focus on accessibility and seamless navigation. I'm excited to collaborate and build amazing products!`}
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={() => window.open("./shruti-2024.pdf")}
            className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-80 duration-300 hover:scale-105 rounded-3xl bg-black border-2 border-green-800		"
          >
            <DownloadOutlined size={12} className="mr-2" />
            Resume
          </button>
          <a href="mailto:shrutikumari14092k@gmail.com">
            <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-80 duration-300 hover:scale-105 rounded-3xl bg-black border-2 border-white	">
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
