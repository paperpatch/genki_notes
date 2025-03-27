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

export function scrollToSection(sectionId) {
  const basePath = process.env.NODE_ENV === "development" ? "" : "/genki_notes";

  if (window.location.pathname !== `${basePath}/travel`) {
    window.location.href = `${basePath}/travel#${sectionId}`;

    setTimeout(() => {
      window.history.replaceState(null, "", `${basePath}/travel`);
    }, 1000);
  } else {
    // console.log("scroll into view");
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}
