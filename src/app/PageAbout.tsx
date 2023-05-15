import Image from "next/image";
import PageTemplate from "./PageTemplate";
import PageProps from "@/interfaces/page-props";
import ReactVisibilitySensor from "react-visibility-sensor";

export default function PageAbout(props: PageProps) {
  const { onVisible } = props;

  return (
    <PageTemplate name="About" nextPageName="Skills" onVisible={onVisible}>
      <ReactVisibilitySensor partialVisibility>
        {({ isVisible }: any) => (
          <div
            className={`flex flex-col gap-3 my-6 ${
              isVisible
                ? "opacity-100 animate__animated animate__slideInLeft"
                : "opacity-0"
            }`}
          >
            <p>
              Hello! I am a FullStack developer with over 5 years of
              professional experience. My expertise lies in technologies like{" "}
              <span className="text-hoolywood-cerise">Laravel</span> and{" "}
              <span className="text-hoolywood-cerise">React.JS</span> and many
              more.
            </p>
            <p>
              Apart from my dedication to software development, I am also
              passionate about maintaining a vegan lifestyle 🌱. In my free
              time, I enjoy watching TV shows and embarking on adventures to
              discover new places around the world ⛰️. Inspired by my love for
              travel and work, I am planing to have an digital nomad lifestyle
              💻.
            </p>
            <p>
              If you&apos;re interested in delving deeper into my background and
              experience, I invite you to{" "}
              <span className="text-hoolywood-cerise">
                take a look at my full profile:
              </span>
            </p>
          </div>
        )}
      </ReactVisibilitySensor>
      <ReactVisibilitySensor partialVisibility>
        {({ isVisible }: any) => (
          <a
            href="https://www.linkedin.com/in/marcelo-zapatta/"
            target="_blank"
            className={`flex py-3 mb-6 px-6 bg-hoolywood-cerise rounded-lg w-fit mx-auto
            transition hover:bg-hoolywood-cerise-600 custom-cursor-pointer ${
              isVisible
                ? "opacity-100 animate__animated animate__slideInRight"
                : "opacity-0"
            }`}
          >
            <Image
              src="/linkedin-icon.svg"
              width={24}
              height={24}
              alt="linkedin icon"
              className="mr-3.5"
            />
            LinkedIn profile
          </a>
        )}
      </ReactVisibilitySensor>
    </PageTemplate>
  );
}
