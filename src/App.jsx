import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Project/Projects";

const App = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://timbaker.me/assets/svg/striped-background.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-auto w-full overflow-hidden"
    >
      <NavBar />
      <div
        style={{
          backgroundColor: "rgba(26, 26, 26, 1)",
          borderRadius: "1.5rem",
        }}
        className="bg-gray-700 m-10"
      >
        <Home />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default App;
