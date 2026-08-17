import "../CSS/Skills.css";

function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Fetch API",
    "Responsive Web Design",
    "Git & GitHub",
    "C/C++ Programming",
    "MySQL",
    "DBMS",
  ];

  return (
    <section className="skills" id="skills">
      <p className="section-title">My Skills</p>

      <h2>Technologies I work with</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;