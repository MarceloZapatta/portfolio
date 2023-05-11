interface HeaderItemProps {
  children: string;
  active: boolean;
}

export default function HeaderItem(props: HeaderItemProps) {
  const { children, active } = props;

  return (
    <a
      href={`#${children}`}
      className="cursor-pointer text-base header-item text-white"
    >
      ~/
      <span className={active ? "text-hoolywood-cerise" : ""}>{children}</span>$
    </a>
  );
}
