import "../css/Education.css";

function Education() {
  const education = [
    {
      degree: "BCA",
      college: "Matrushri L J Gandhi BCA College, Modasa",
      year: "2025 – 2028",
      result: "Semester 1: 66% | Semester 2: 60%",
    },
    {
      degree: "12th",
      college: "Sarvodaya High School",
      year: "2024",
      result: "64%",
    },
    {
      degree: "10th",
      college: "Sarvodaya High School",
      year: "2022",
      result: "82%",
    },
  ];

  return (
    <section className="education" id="education">
      <p className="section-title">Education</p>

      <h2>My Education</h2>

      <div className="education-container">
        {education.map((item) => (
          <div className="education-card" key={item.degree}>
            <h3>{item.degree}</h3>
            <h4>{item.college}</h4>
            <span>{item.year}</span>
            <p>{item.result}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;