export default function App() {
  const skills = [
    "Laravel",
    "PHP",
    "MySQL",
    "AWS",
    "REST APIs",
    "JavaScript",
    "Python",
    "Git",
  ];

  const projects = [
    {
      title: "Freshma ERP",
      desc: "ERP system serving 60K+ users with dashboards, workflows, and business operations.",
    },
    {
      title: "School ERP & CRM",
      desc: "Academic operations, examination workflows, result management, and CRM modules.",
    },
    {
      title: "AramMilk",
      desc: "Subscription delivery platform with admin workflows and automated operations.",
    },
    {
      title: "Zlaata",
      desc: "Fashion e-commerce platform with scalable backend services and admin management.",
    },
  ];

  return (
    <div style={{ background: "#020617", color: "white", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <header style={{ padding: "24px 20px", borderBottom: "1px solid rgba(255,255,255,0.1)", position: "sticky", top: 0, background: "#020617" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontWeight: "bold", letterSpacing: "2px", color: "#67e8f9" }}>MANIKANDAN A</div>
            <div style={{ fontSize: "12px", color: "#94a3b8" }}>Full-Stack & Backend Developer</div>
          </div>
          <a
            href="mailto:amanikandan141@gmail.com"
            style={{
              background: "#22d3ee",
              color: "#020617",
              padding: "10px 16px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Contact
          </a>
        </div>
      </header>

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" }}>
        <section style={{ marginBottom: "40px" }}>
          <h1 style={{ fontSize: "42px", lineHeight: 1.2, marginBottom: "16px" }}>
            I build scalable business products with strong backend systems.
          </h1>
          <p style={{ color: "#cbd5e1", fontSize: "18px", lineHeight: 1.7, maxWidth: "800px" }}>
            Full-Stack Developer focused on Laravel, MySQL, AWS, APIs, ERP, CRM, logistics,
            healthcare, e-commerce, and education platforms.
          </p>

          <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="mailto:amanikandan141@gmail.com"
              style={{
                background: "#22d3ee",
                color: "#020617",
                padding: "12px 18px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Hire Me
            </a>
            <a
              href="/resume.pdf"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
                padding: "12px 18px",
                borderRadius: "10px",
                textDecoration: "none",
              }}
            >
              Download Resume
            </a>
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>About</h2>
          <div style={{ background: "#111827", padding: "24px", borderRadius: "18px", color: "#cbd5e1", lineHeight: 1.8 }}>
            I specialize in building secure, scalable, and production-ready applications. My experience includes
            backend architecture, API development, cloud services, business dashboards, admin systems, and workflow automation.
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Skills</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {skills.map((skill) => (
              <span
                key={skill}
                style={{
                  background: "#111827",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "10px 14px",
                  borderRadius: "999px",
                  color: "#e2e8f0",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Projects</h2>
          <div style={{ display: "grid", gap: "16px" }}>
            {projects.map((project) => (
              <div
                key={project.title}
                style={{
                  background: "#111827",
                  padding: "24px",
                  borderRadius: "18px",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <h3 style={{ marginTop: 0, marginBottom: "10px" }}>{project.title}</h3>
                <p style={{ margin: 0, color: "#cbd5e1", lineHeight: 1.7 }}>{project.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>Contact</h2>
          <div style={{ background: "#111827", padding: "24px", borderRadius: "18px", color: "#cbd5e1", lineHeight: 2 }}>
            <div>Email: amanikandan141@gmail.com</div>
            <div>Phone: +91 9003993474</div>
            <div>Location: Namakkal, Tamil Nadu</div>
            <div>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/manikandan-a-b15343241"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#67e8f9" }}
              >
                Profile
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
