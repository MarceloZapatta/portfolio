interface HeaderItemProps {
  children: string;
}

export default function HeaderItem(props: HeaderItemProps) {
  const { children } = props;

  return (
    <a
      href={`#${children}`}
      className="text-white cursor-pointer text-base header-item"
    >
      ~/
      <span>{children}</span>$
    </a>
  );
}
