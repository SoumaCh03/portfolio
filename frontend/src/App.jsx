import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="space-background">
      {/* Atmospheric Layers */}
      <div className="nebula"></div>
      <div className="stars"></div>
      <div className="grid-overlay"></div>

      {/* Shooting Stars */}
      <div className="shooting-stars">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Main Site Content */}
      <div className="site-content">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Hobbies />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}