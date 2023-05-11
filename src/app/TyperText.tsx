"use client";

import { useEffect, useRef } from "react";
import typer from "typer-js";

interface TyperTextProps {
  children: string;
}

export default function TyperText(props: TyperTextProps) {
  const { children } = props;
  const typingDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typingDiv.current) {
      typer(typingDiv.current)
        .pause(4000)
        .line("FullStack")
        .pause(2000)
        .back("all")
        .continue("Backend")
        .pause(2000)
        .back("all")
        .continue("Frontend")
        .pause(2000)
        .back("all")
        .repeat(Infinity);
    }
  }, [children]);

  return <div ref={typingDiv}></div>;
}
