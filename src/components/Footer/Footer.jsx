import {
  MailOutlined,
  GithubOutlined,
  PhoneOutlined,
  LinkedinFilled,
} from "@ant-design/icons";
const Footer = () => (
  <div id="Footer" className=" text-gray-300">
    <div className="flex flex-col items-center justify-center text-center my-20 mx-40">
      <p className="text-5xl font-bold px-10 text-white">Get in Touch</p>
      <span className="px-20 mt-5">
        {`Got a project in mind or any questions about my work? I'd love to
        connect! Feel free to reach out via email or LinkedIn and I'll get back
        to you as soon as possible.`}
      </span>
      <a href="mailto:shrutikumari14092k@gmail.com">
        <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-80 duration-300 hover:scale-105 rounded-3xl bg-black border-2 border-green-800">
          Say Hello
        </button>
      </a>
    </div>

    <div className="flex justify-between items-center gap-4 px-20 py-10">
      <div className="flex items-center">
        <MailOutlined />
        <a href="mailto:shrutikumari14092k@gmail.com" className="text-l ml-2">
          shrutikumari14092k@gmail.com
        </a>
      </div>

      <div className="flex items-center">
        <GithubOutlined />
        <a
          href="https://github.com/al-yx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-l ml-2"
        >
          alyx
        </a>
      </div>

      <div className="flex items-center">
        <PhoneOutlined />
        <h1 className="text-l ml-2">Phone: 7004053038</h1>{" "}
      </div>

      <div className="flex items-center">
        <LinkedinFilled />
        <a
          href="https://www.linkedin.com/in/shruti-kumari-7aa4451b5/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-l ml-2"
        >
          Shruti Kumari
        </a>
      </div>
    </div>

    <div className="bg-[#2c2c2c] rounded-b-3xl 	">
      <h1 className="text-sm text-white p-8 text-center">
        © 2024 Shruti Kumari
      </h1>
    </div>
  </div>
);

export default Footer;
