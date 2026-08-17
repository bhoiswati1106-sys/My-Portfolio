import "../css/Certificates.css";

function Certificates() {
  const certificates = [
    {
      title: "Web Development Intern",
      organization: "Thiranex",
    },
    {
      title: "AI Skills Fest 2026",
      organization: "Microsoft",
    },
    {
      title: "Cyber Job Simulation",
      organization: "Deloitte Australia – Forage",
    },
    {
      title: "Introduction to Generative AI",
      organization: "Simplilearn",
    },
    {
      title: "Career Edge – Young Professional",
      organization: "TCS iON",
    },
  ];

  return (
    <section className="certificates" id="certificates">
      <p className="section-title">Certifications</p>

      <h2>My Certifications</h2>

      <div className="certificates-container">
        {certificates.map((certificate) => (
          <div className="certificate-card" key={certificate.title}>
            <h3>{certificate.title}</h3>
            <p>{certificate.organization}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;