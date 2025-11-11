import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectList = [
    {
      title: "Mini Book Finder Website",
      description:
        "A responsive web app built with HTML, CSS, and JavaScript that allows users to search books using the OpenLibrary API and view book titles, authors, and publication years dynamically.",
      link: "https://github.com/Manasa529/Book-Finder",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React showcasing my skills, projects, and resume with a responsive design and modern layout.",
      link: "https://github.com/Manasa529/Portfolio",
    },
    {
      title: "QuestMortgage Project",
      description:
        "A Salesforce project automating loan management processes using Apex triggers, validation rules, and Lightning components.",
      link: "https://github.com/Manasa529/QuestMortgage",
    },
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
