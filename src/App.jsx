
import About from "./components/about";
import Skills from "./components/Skills";

import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <section id="home" className="hero">
        <p className="hero-tag">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Gopika</span>
        </h1>

        <h2>
          Computer Science Student
        </h2>

        <p className="hero-description">
          I am passionate about technology, programming,
          and building creative solutions through code.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View My Work
          </a>

          <a href="#contact" className="secondary-button">
            Contact Me
          </a>
        </div>
      </section>
      <About />
<Skills />
    </div>
  );
}

export default App;
