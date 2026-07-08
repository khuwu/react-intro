import Khushiprofile from "../assets/Khushiprofile.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">

        <h3>Hi, I am</h3>

        <h1>Khushi Thami</h1>

        <h2>Frontend Developer | Media Designer | Content Creator</h2>

        <p>
          I build aesthetic, responsive websites and create engaging content
          that helps brands grow. I enjoy turning ideas into digital experiences.
        </p>

        <div className="hero-buttons">

            <button>View Projects</button>
            <button>Contact Me</button>

        </div>

      </div>

      <div className="hero-image">

        <img src={Khushiprofile} alt="Khushi" />

      </div>

    </section>
  );
}

export default Hero;