import PageProps from "@/interfaces/page-props";
import PageTemplate from "./PageTemplate";
import ReactVisibilitySensor from "react-visibility-sensor";

export default function PageSkills(props: PageProps) {
  const { onVisible } = props;

  return (
    <PageTemplate name="Skills" nextPageName="Projects" onVisible={onVisible}>
      <ReactVisibilitySensor partialVisibility>
        {({ isVisible }: any) => (
          <div
            className={`my-6 ${
              isVisible
                ? "opacity-100 animate__animated animate__slideInLeft"
                : "opacity-0"
            }`}
          >
            Check out some of my main skills:
            <div className="pt-6">
              &lt;<span className="text-hoolywood-cerise">Skills</span>&gt;
              <br />
              &emsp;&lt;<span className="text-hoolywood-cerise">Backend</span>
              &gt;
              <br />
              &emsp;&emsp;&lt;<span className="text-hoolywood-cerise">
                PHP
              </span>{" "}
              /&gt;
              <br />
              &emsp;&emsp;&lt;
              <span className="text-hoolywood-cerise">Laravel</span> /&gt;
              <br />
              &emsp;&emsp;&lt;Lumen /&gt;
              <br />
              &emsp;&emsp;&lt;Livewire /&gt;
              <br />
              &emsp;&lt;/<span className="text-hoolywood-cerise">Backend</span>
              &gt;
              <br />
              &emsp;&lt;<span className="text-hoolywood-cerise">Frontend</span>
              &gt;
              <br />
              &emsp;&emsp;&lt;
              <span className="text-hoolywood-cerise">Javascript</span> /&gt;
              <br />
              &emsp;&emsp;&lt;
              <span className="text-hoolywood-cerise">React.JS</span> /&gt;
              <br />
              &emsp;&emsp;&lt;Vue.JS /&gt;
              <br />
              &emsp;&emsp;&lt;Next.JS /&gt;
              <br />
              &emsp;&emsp;&lt;TypeScript /&gt;
              <br />
              &emsp;&emsp;&lt;ES6 /&gt;
              <br />
              &emsp;&emsp;&lt;Ionic /&gt;
              <br />
              &emsp;&lt;/<span className="text-hoolywood-cerise">Frontend</span>
              &gt;
              <br />
              &emsp;&lt;<span className="text-hoolywood-cerise">Cloud</span>&gt;
              <br />
              &emsp;&emsp;&lt;<span className="text-hoolywood-cerise">
                AWS
              </span>{" "}
              /&gt;
              <br />
              &emsp;&emsp;&lt;GCP /&gt;
              <br />
              &emsp;&lt;/Cloud&gt;
              <br />
              &lt;/<span className="text-hoolywood-cerise">Skills</span>&gt;
            </div>
          </div>
        )}
      </ReactVisibilitySensor>
    </PageTemplate>
  );
}
