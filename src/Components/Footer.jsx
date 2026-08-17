import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3>Swati</h3>

      <p>
        Building, learning, and growing as a Web Developer.
      </p>

      <div className="footer-links">
        <a
          href="https://github.com/bhoiswati1106-sys"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/swati-bhoi"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://www.instagram.com/webdesign_by_swati.11/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>

      <p className="copyright">
        © 2026 Swati. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;