import Image from "next/image";

interface NextPageButtonProps {
  children: string;
  inverted?: boolean;
}

export default function NextPageButton(props: NextPageButtonProps) {
  const { children, inverted } = props;

  return (
    <a
      href={`/#${children}`}
      className={`mx-auto custom-cursor-pointer hover:opacity-70 transition ${
        inverted ? "rotate-180" : ""
      }`}
    >
      <Image
        src="/chevron-down.svg"
        width={24}
        height={24}
        alt="next page button"
      />
    </a>
  );
}

NextPageButton.defaultProps = {
  inverted: false,
};
