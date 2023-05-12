import { Project } from "@/interfaces/project";
import Image from "next/image";
import "./ProjectCard.scss";

interface ProjectProps {
  project: Project;
}

export default function ProjectCard(props: ProjectProps) {
  const { name, description, image, technologies, url } = props.project;

  return (
    <a
      href={url}
      className={`flex flex-col justify-between border border-r custom-cursor-pointer transition
      border-hoolywood-cerise ${image ? "" : "p-3"} hover:opacity-70 h-44`}
      target="_blank"
    >
      <div className="project-card min-h-28">
        {image ? (
          <div className="relative h-24 project-image-container">
            <Image
              src={image}
              alt="project"
              fill={true}
              style={{ objectFit: "cover" }}
              className=""
            />
            <div className="text-white absolute truncate overflow-hidden bottom-0 left-3 z-10 drop-shadow">
              {name}
            </div>
          </div>
        ) : (
          <div>
            <Image
              src="/folder.svg"
              width={24}
              height={24}
              alt="project"
              className="pb-5 pt-4 mx-auto"
            />
            <div className="truncate overflow-hidden">{name}</div>
          </div>
        )}
      </div>
      <div className={image ? "p-3 pt-0" : ""}>
        <div className="text-sm my-3 truncate overflow-hidden h-4">
          {description}
        </div>
        <div className="flex gap-3.5">
          {technologies.map((technology) => (
            <div className="text-hoolywood-cerise" key={technology}>
              {technology}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
}
