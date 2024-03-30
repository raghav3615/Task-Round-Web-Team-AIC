import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Hero from "./components/Hero";
import What from "./components/What";
import Offer from "./components/MissionVision";
import Team from "./components/Team";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="">
            <NavBar />
            <Hero />
            <About />
            <What />
            <Offer />
            <Team />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
