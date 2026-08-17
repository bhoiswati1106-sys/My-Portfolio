import "../CSS/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-small">Hi, I'm</p>

        <h1>Swati Bhoi</h1>

        <h2>Web Developer</h2>

        <p className="hero-text">
          I like building websites and learning new things in web development.
        </p>

        <div className="hero-buttons">
          <a href="#projects">View My Work</a>
          <a href="#contact">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;