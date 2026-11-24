
const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["C", "Python", "JavaScript"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "React"],
  },
  {
    title: "Database",
    skills: ["SQL", "DBMS"],
  },
  {
    title: "Core Concepts",
    skills: ["Data Structures", "OOP", "Problem Solving"],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="section-heading">
        <p className="section-tag">WHAT I KNOW</p>
        <h2>My <span>Skills</span></h2>
        <p className="section-subtitle">
          Technologies and concepts I have been learning.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
