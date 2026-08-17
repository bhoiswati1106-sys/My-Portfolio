import "../CSS/Projects.css";

function Projects() {
  const projects = [
    {
      title: "My Library Hub",
      description:
        "A web application for managing and exploring a personal library.",
      technologies: "HTML, CSS, JavaScript, React.js",
    },
    {
      title: "Weather App",
      description:
        "A weather application that displays weather information using JavaScript.",
      technologies: "HTML, CSS, JavaScript",
    },
    {
      title: "To-Do List App",
      description:
        "A simple task management application for adding and managing daily tasks.",
      technologies: "HTML, CSS, JavaScript",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio website to showcase my skills and projects.",
      technologies: "HTML, CSS, JavaScript",
    },
    {
      title: "ATM Management System",
      description:
        "A C programming project that simulates basic ATM operations.",
      technologies: "C Programming",
    },
    {
      title: "Digital Clock",
      description:
        "A simple digital clock project built for practicing programming concepts.",
      technologies: "C Programming",
    },
    {
      title: "Calendar",
      description:
        "A calendar project created to practice programming logic.",
      technologies: "C Programming",
    },
    {
      title: "Login System",
      description:
        "A basic login system project created for practicing programming concepts.",
      technologies: "C Programming",
    },
  ];

  return (
    <section className="projects" id="projects">
      <p className="section-title">My Projects</p>

      <h2>Things I've Built</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span>{project.technologies}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;