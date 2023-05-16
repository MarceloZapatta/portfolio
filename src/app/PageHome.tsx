import "./PageHome.scss";
import StringsEffect from "./StringsEffect";
import PageTemplate from "./PageTemplate";
import PageProps from "@/interfaces/page-props";
import { useTranslation } from "react-i18next";

export default function PageHome(props: PageProps) {
  const { onVisible } = props;
  const { t } = useTranslation();

  return (
    <PageTemplate name="Home" nextPageName="About" onVisible={onVisible}>
      <div className="lg:flex justify-between">
        <div className="text-white text-xl flex-1">
          <div className="w-full animate__animated animate__slideInLeft animate__delay-4s">
            {t("Home.intro")}{" "}
            <span className="sm:hidden">
              <br />
              <span className="text-hoolywood-cerise">Fullstack</span> Developer
            </span>
            <div className="text-hoolywood-cerise text-swipe hidden md:block">
              <div className="text-swipe-container">
                <ul>
                  <li className="text-swipe-container__word">
                    Fullstack <span className="text-white">Developer</span>
                  </li>
                  <li className="text-swipe-container__word">
                    Backend <span className="text-white">Developer</span>
                  </li>
                  <li className="text-swipe-container__word">
                    Frontend <span className="text-white">Developer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full text-6xl my-3 animate__animated animate__slideInLeft animate__delay-5s">
            &lt;
            <br />
            <span className="text-hoolywood-cerise big-name">
              Marcelo
              <br />
              Zapatta
            </span>
            <br />
            /&gt;
          </div>
          <div className="w-full animate__animated animate__slideInLeft animate__delay-4s">
            {t("Home.transforming")}{" "}
            <div className="text-hoolywood-cerise text-ideas animate__animated animate__pulse animate__infinite inline-block">
              {t("Home.ideas")}
            </div>{" "}
            {t("Home.into")}{" "}
            <div className="text-hoolywood-cerise text-products animate__animated animate__pulse animate__infinite inline-block">
              {t("Home.products")}
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-1 justify-center items-center animate__animated animate__slideInRight animate__delay-5s">
          <StringsEffect />
        </div>
      </div>
    </PageTemplate>
  );
}
