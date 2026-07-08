import Khushiprofile from "../assets/Khushiprofile.png";

function About() {
  return (
    <section className="about" id="about">

      <h1>About Me</h1>

      <div className="about-container">

        <div className="about-image">

          <img
            src={Khushiprofile}
            alt="Khushi Thami"
          />

        </div>

        <div className="about-text">

          <h2>Who am I?</h2>

          <p>
            I'm a Computer Science student passionate about building modern
            websites and creating digital content. I enjoy learning new
            technologies and solving problems through design and code.
          </p>

          <div className="skills">

            <p>✔ Frontend Development</p>

            <p>✔ React Development</p>

            <p>✔ UI / UX Design</p>

            <p>✔ Content Creation</p>

          </div>

          <button>Download CV</button>

        </div>

      </div>

    </section>
  );
}

export default About;