"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/6.png",
    tag: ["All", "Work"],
    gitUrl: "/",
    previewUrl: "/images/projects/6.png",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Work"],
    gitUrl: "/",
    previewUrl: "/images/projects/2.png",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Work"],
    gitUrl: "/",
    previewUrl: "/images/projects/3.png",
  },
  {
    id: 7,
    title: "Simple java api framework",
    description: "A lightweight Java library for building APIs with ease. It simplifies development using modern practices, offering built-in support for RESTful endpoints, routing, and request handling, all with minimal configuration. Designed to be fast, extendable, and developer-friendly, it's perfect for creating efficient and clean APIs in Java.",
    image: "/images/projects/7.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/natthphong/catalyst",
    previewUrl: "/images/projects/7.png",
  },
  {
    id: 8,
    title: "Saving calculator",
    description: `
    Saving Calculator Features:
    Compound Interest Simulation Calculates savings growth with compounded interest (monthly/yearly). AND Flexible Contributions Customize monthly/yearly contributions and dynamic growth rates.
    and Visualization Tools Interactive graph and detailed table for savings growth and yearly summaries.
    `,
    image: "/images/projects/8.png",
    tag: ["All", "Personal"],
    gitUrl: "https://github.com/natthphong/saving_calculator",
    previewUrl: "/images/projects/8.png",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Personal"
          isSelected={tag === "Personal"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Work"
          isSelected={tag === "Work"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
