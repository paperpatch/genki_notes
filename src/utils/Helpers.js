import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useSmoothScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = decodeURIComponent(location.hash);
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    // console.log("scrollToHash");

    scrollToHash();
  }, [location.hash]);
}
