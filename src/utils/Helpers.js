import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useSmoothScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = location.hash;
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

export function scrollToSection(sectionId) {
  if (window.location.pathname !== "/travel") {
    window.location.href = `/travel#${sectionId}`;

    setTimeout(() => {
      window.history.replaceState(null, "", "/travel");
    }, 1000);
  } else {
    // console.log("scroll into view");
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}
