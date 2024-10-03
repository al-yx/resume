import ProjectCard from "./ProjectCard";
import { Carousel } from "antd";
import AirbusImage from "../../assests/airbusImage.png";
import NotesImage from "../../assests/notesApp.png";
import MovieApp from "../../assests/movieApp.png";
import RealEstate from "../../assests/realEstate.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-4">
        My Work
      </h1>
      <Carousel arrows autoplay>
        <ProjectCard
          image={AirbusImage}
          title="Airbus- Detection of Faulty Wiring and Structural Damage in Aircrafts"
          main="This project is web-based aircraft damage detection system using React.js and CSS to create a responsive interface where users can upload images or videos for analysis by AI models like CNN and YOLOv8. The system features real-time video integration, damage visualization on 3D CAD models, and a technical support chatbot to assist maintenance teams."
          demoLink="https://airbus-hackathon6.netlify.app/#wgpt3"
          githubLink="https://github.com/al-yx/airbus"
        />
        <ProjectCard
          image={NotesImage}
          title="Notes Landing Page"
          main="A responsive landing page built with React.js and Tailwind CSS for a note-taking web application. The page highlights key features of the app, such as note organization, reminders, and categorization. It features clean UI components, smooth animations, and a user-friendly layout to enhance user engagement."
          demoLink="https://master--notes-landing-page.netlify.app/"
          githubLink="https://github.com/al-yx/notes-page"
        />
        <ProjectCard
          image={RealEstate}
          title="Real Estate Website"
          main="This is a web application designed to streamline the real estate search and management process. Built with ReactJs, and styled using CSS, this application provides a user-friendly interface for browsing property listings, filtering searches, and viewing detailed property information."
          demoLink="https://al-yx.github.io/real-estate-alpha/"
          githubLink="https://github.com/al-yx/real-estate-alpha"
        />

        <ProjectCard
          image={MovieApp}
          title="MovieFlix"
          main="The Movie App is a web application developed using React.js and CSS that allows users to browse through a vast collection of movies, search for specific titles, and view detailed information about each film."
          demoLink="https://hello-world-mu-ten.vercel.app/"
          githubLink="https://github.com/al-yx/movie-web"
        />
      </Carousel>
    </div>
  );
};

export default Projects;
