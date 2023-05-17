import { useState, useEffect } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setIsMobile(false);
    }

    return () => setIsMobile(true);
  }, []);

  return isMobile;
}
