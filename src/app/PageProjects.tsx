"use client";

import PageProps from "@/interfaces/page-props";
import PageTemplate from "./PageTemplate";
import ProjectCard from "./ProjectCard";
import { Project } from "@/interfaces/project";
import ReactVisibilitySensor from "react-visibility-sensor";

export default function PageProjects(props: PageProps) {
  const { onVisible } = props;

  const projects: Project[] = [
    {
      name: "Simple Resource Management",
      description: "CRUD Example",
      technologies: ["Laravel", "Vue.JS"],
      url: "https://github.com/MarceloZapatta/simple-resources-management",
    },
    {
      name: "Lumen API",
      description: "A REST API example",
      technologies: ["Laravel", "Lumen"],
      url: "https://github.com/MarceloZapatta/laravel-api",
    },
    {
      name: "Bookings APP",
      description: "A mobile application for booking",
      technologies: ["Ionic", "Angular"],
      url: "https://github.com/MarceloZapatta/ionic-angular-course",
    },
    {
      name: "Portfolio",
      description: "This awesome portfolio!",
      technologies: ["Next.JS", "Tailwind"],
      url: "https://github.com/MarceloZapatta/portfolio",
    },
    {
      name: "Tempo Real Notícias",
      description: "News portal",
      technologies: ["Puppeteer", "Nest.JS", "Next.JS"],
      image: "/portfolio/projects/tempo-real-noticias.png",
      url: "https://temporealnoticias.com.br",
    },
    {
      name: "Tem Vegano",
      description: "In construction",
      technologies: ["Next.JS"],
      url: "https://github.com.br",
    },
    {
      name: "Real Estate on Rails",
      description:
        "Simple API using Ruby on Rails with some main features of Rails",
      technologies: ["Ruby", "Rails"],
      url: "https://github.com/MarceloZapatta/real-estate-ruby-rails",
    },
  ];

  return (
    <PageTemplate name="Projects" nextPageName="Contact" onVisible={onVisible}>
      <ReactVisibilitySensor partialVisibility>
        {({ isVisible }: any) => (
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4 ${
              isVisible
                ? "opacity-100 animate__animated animate__slideInRight"
                : "opacity-0"
            }`}
          >
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        )}
      </ReactVisibilitySensor>
    </PageTemplate>
  );
}
