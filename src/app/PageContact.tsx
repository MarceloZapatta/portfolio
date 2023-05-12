import PageProps from "@/interfaces/page-props";
import PageTemplate from "./PageTemplate";
import Image from "next/image";
import ReactVisibilitySensor from "react-visibility-sensor";

export default function PageContact(props: PageProps) {
  const { onVisible } = props;

  return (
    <PageTemplate
      name="Contact"
      nextPageName="Home"
      onVisible={onVisible}
      nextPageButtonInverted
    >
      <ReactVisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <div
            className={`flex flex-col gap-12 ${
              isVisible
                ? "opacity-100 animate__animated animate__slideInLeft"
                : "opacity-0"
            }`}
          >
            <div className="flex gap-4">
              <Image src="/email.svg" width={24} height={24} alt="email icon" />
              <a
                href="mailto:marcelozapatta0@gmail.com"
                className="hover:underline"
              >
                marcelozapatta0@gmail.com
              </a>
            </div>
            <div className="flex gap-4">
              <Image src="/phone.svg" width={24} height={24} alt="phone icon" />
              <a href="tel:+5515981837979" className="hover:underline">
                +55 15 98183-7979
              </a>
            </div>
            <div className="flex gap-4">
              <Image
                src="/linkedin-hoolywood-cerise.svg"
                width={24}
                height={24}
                alt="linkedin icon"
              />
              <a
                href="https://linkedin.com/in/marcelo-zapatta"
                className="truncate text-overflow hover:underline"
                target="_blank"
              >
                linkedin.com/in/marcelo-zapatta
              </a>
            </div>
            <div className="flex gap-4">
              <Image
                src="/github.svg"
                width={24}
                height={24}
                alt="github icon"
              />
              <a
                href="https://github.com/MarceloZapatta"
                className="truncate text-overflow hover:underline"
                target="_blank"
              >
                github.com/MarceloZapatta
              </a>
            </div>
          </div>
        )}
      </ReactVisibilitySensor>
    </PageTemplate>
  );
}
