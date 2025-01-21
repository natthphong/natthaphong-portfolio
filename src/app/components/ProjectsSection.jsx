"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [

  {
    id: 5,
    title: "Digital Core Banking (DCB)",
    description: "Digital Core Banking (DCB) is a core banking platform based on Vault Core by Thought Machine. It uses Python for coding smart contracts to control and define the behavior of banking products.",
    image: "/images/projects/private.png",
    tag: ["All", "Work"],
    gitUrl: "/",
    previewUrl: "/images/projects/private.png",
  },
  {
    id: 1,
    title: "Saint Care",
    description: `
    Saint Care is a project for managing the sales of machines and warranty applications. It allows technicians to perform machine maintenance and includes a role-based system with Manager, Supervisor, and Staff roles.
    Technologies used:Frontend: React,Backend: Java Spring Boot,Database: PostgreSQL,DevOps Tool: Jenkins
    `,
    image: "/images/projects/1.png",
    tag: ["All", "Work"],
    gitUrl: "/",
    previewUrl: "/images/projects/1.png",
  },
  {
    id: 2,
    title: "KSAS",
    description: "bond trading application using Java Spring Boot, Redis,\n" +
        "and PostgreSQL databases. Implemented file storage on AWS S3 and utilized AWS SQS for\n" +
        "message queue management",
    image: "/images/projects/private.png",
    tag: ["All", "Work"],
    gitUrl: "/",
    previewUrl: "/images/projects/private.png",
  },
  {
    id: 3,
    title: "Aurora",
    description: "gold trading application using Go Fiber, Redis, and\n" +
        "PostgreSQL databases. Integrated file storage on AWS S3 . Implemented WebSockets for real-\n" +
        "time updates and Kafka for message queue management.",
    image: "/images/projects/private.png",
    tag: ["All", "Work"],
    gitUrl: "/",
    previewUrl: "/images/projects/private.png",
  },
  {
    id: 4,
    title: "Autosale",
    description: "The application facilitated car sales management for sales\n" +
        "representatives and stored customer information. using Java Spring Boot, Redis, and\n" +
        "MSSQL databases",
    image: "/images/projects/private.png",
    tag: ["All", "Work"],
    gitUrl: "/",
    previewUrl: "/images/projects/private.png",
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
        Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Work"
          isSelected={tag === "Work"}
        />
        <ProjectTag
            onClick={handleTagChange}
            name="Personal"
            isSelected={tag === "Personal"}
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
