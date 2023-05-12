import ReactVisibilitySensor from "react-visibility-sensor";
import Breadcomb from "./Breadcomb";
import NextPageButton from "./NextPageButton";

interface PageTemplateProps {
  onVisible: (currentPage: string) => void;
  name: string;
  nextPageName: string;
  children: string | JSX.Element | JSX.Element[];
  nextPageButtonInverted?: boolean;
}

export default function PageTemplate(props: PageTemplateProps) {
  const { onVisible, name, nextPageName, children, nextPageButtonInverted } =
    props;

  function handleChangeVisible(isVisible: Boolean) {
    if (isVisible) {
      onVisible(name);
    }
  }

  return (
    <div
      id={name}
      className="flex flex-col justify-between min-h-screen min-w-screen bg-night pt-24 pb-6 text-white"
    >
      <ReactVisibilitySensor onChange={handleChangeVisible}>
        <Breadcomb>{name}</Breadcomb>
      </ReactVisibilitySensor>
      {children}
      <NextPageButton inverted={nextPageButtonInverted}>
        {nextPageName}
      </NextPageButton>
    </div>
  );
}

PageTemplate.defaultProps = {
  nextPageButtonInverted: false,
};
