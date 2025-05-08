import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";
import { featuredProjects } from "../data/projects";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="about" className="section bg-white dark:bg-gray-900">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              I'm a passionate full-stack software engineer with over 2 years of
              experience building modern web applications. I specialize in
              React, Next.js, and creating responsive, user-friendly interfaces
              backed by robust backend systems.
            </p>
            <p className="text-lg mb-6">
              With a background in computer science and a continuous learning
              mindset, I stay up to date with the latest technologies and best
              practices. I enjoy solving complex problems and transforming ideas
              to life through clean, efficient code.
            </p>
            <div className="flex justify-center">
              <Link href="/about" className="btn btn-primary text-text-btn">
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="section bg-gray-50 dark:bg-background-dark"
      >
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 btn btn-primary text-text-btn"
            >
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="section bg-white dark:bg-gray-900">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-center mb-8 max-w-lg mx-auto text-lg">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="btn btn-primary text-text-btn">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
