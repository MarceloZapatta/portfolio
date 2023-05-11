import Image from "next/image";

interface NextPageButtonProps {
  children: string;
}

export default function NextPageButton(props: NextPageButtonProps) {
  const { children } = props;
  return (
    <a href={`/#${children}`} className="mx-auto">
      <Image
        src="/chevron-down.svg"
        width={24}
        height={24}
        alt="next page button"
      />
    </a>
  );
}
