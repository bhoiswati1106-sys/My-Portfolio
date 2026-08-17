import "../CSS/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="section-title">Contact</p>

      <h2>Let's Connect</h2>

      <p className="contact-text">
        I'm always open to discussing new opportunities, projects, or ideas.
      </p>

      <div className="contact-links">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=bhoiswati11806@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/swati-bhoi"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/bhoiswati1106-sys"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.instagram.com/webdesign_by_swati.11/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
    </section>
  );
}

export default Contact;
