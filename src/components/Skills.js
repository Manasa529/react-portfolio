import React from "react";

const Skills = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React",
    "Bootstrap", "Python", "Salesforce", "Git & GitHub"
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
