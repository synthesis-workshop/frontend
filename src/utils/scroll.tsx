import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToAnchor = () => {
  const location = useLocation();
  const lastHash = useRef("");

  // listen to location change using useEffect with location as dependency
  // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        const yOffset = -100;
        const element = document.getElementById(lastHash.current);

        if (element) {
          const y =
            element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
        lastHash.current = "";
      }, 100);
    }
  }, [location]);

  return null;
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
