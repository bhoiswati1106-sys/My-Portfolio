import "../CSS/Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">
      <p className="section-title">Experience</p>

      <h2>My Work Experience</h2>

      <div className="experience-card">
        <div className="experience-header">
          <div>
            <h3>Web Development Intern</h3>
            <h4>Thiranex</h4>
          </div>

          <span>1 Jun 2026 – 30 Jun 2026</span>
        </div>

        <ul>
          <li>
            Developed responsive web applications using HTML, CSS, JavaScript,
            and React.js.
          </li>
          <li>
            Built projects including Portfolio, To-Do List, Weather App, and
            My Library Hub.
          </li>
          <li>Used Git & GitHub for version control and project management.</li>
          <li>Fixed bugs and improved UI for better user experience.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;