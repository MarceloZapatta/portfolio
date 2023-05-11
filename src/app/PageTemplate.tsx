import ReactVisibilitySensor from "react-visibility-sensor";
import Breadcomb from "./Breadcomb";
import NextPageButton from "./NextPageButton";

interface PageTemplateProps {
  onVisible: (currentPage: string) => void;
  name: string;
  nextPageName: string;
  children: string | JSX.Element | JSX.Element[];
}

export default function PageTemplate(props: PageTemplateProps) {
  const { onVisible, name, nextPageName, children } = props;

  function handleChangeVisible(isVisible: Boolean) {
    if (isVisible) {
      onVisible(name);
    }
  }

  return (
    <ReactVisibilitySensor onChange={handleChangeVisible}>
      <div
        id={name}
        className="flex flex-col justify-between min-h-screen min-w-screen bg-night pt-24 pb-6 text-white"
      >
        <Breadcomb>{name}</Breadcomb>
        {children}
        <NextPageButton>{nextPageName}</NextPageButton>
      </div>
    </ReactVisibilitySensor>
  );
}
