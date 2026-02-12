import Typewriter from "./components/Typewriter";

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

      <section id="about" className="about">
        <div className="sub-title">About Me</div>
        <div className="paragraph-text">Hello, and welcome! I'm Jack and I am currently a sophomore at the University of 
          Wisconsin-Madison studying Computer Science and Data Science, with a certificate in consulting. Through my cousework and 
          projects I have gained experience in software development, data analysis, and machine learning. Additonally on campus, I am 
          am an active member of our dotData and AI@UW organizations. I am passionate about using data and technology to solve 
          problems and answer questions. </div>
        <div className="paragraph-text">Outside of the classroom, I love sports, specifically football and the Chicago Bears. However,
          you will most often find me playing ice hockey or on a golf course. In this past year I have also become an avid runner, 
          and hope to run my first marathon in Madison in November. I also enjoy playing card games - namely euchre and poker - and 
          am always looking for a game with my friends. During the summers I work at a sports camp, and you will always see me on a 
          lake on the weekends.
          </div>
        <div className="paragraph-text">Thanks for visiting! Feel free to check out some of my work below or reach out.
          </div>
      </section>
      <section id="projects">
        <div className="sub-title">Projects</div>
      </section>
      <section id="contact">
        <div className="sub-title">Contact Me</div>
      </section>
    </>
  );
}
