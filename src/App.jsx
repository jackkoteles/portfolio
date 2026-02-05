import Typewriter from "./components/Typewriter";

// App.jsx
export default function App() {
  return (
    <>
      <section id="landing" className="landing">
        <nav className="pill-nav">
          <a href="#landing">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <Typewriter
          className="blurb"
          text="Computer and Data Science student exploring software, analytics, and machine learning."
          speed={30}
          delay={200}
        />

        <div className="name-title">Jack Koteles</div>
      </section>

      <section id="about" className="about"></section>
      <section id="projects"></section>
      <section id="contact"></section>
    </>
  );
}
