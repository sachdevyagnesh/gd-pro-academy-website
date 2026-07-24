import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use instant scroll on route change so above-the-fold content is
    // immediately visible. Smooth scroll caused new pages to mount at the
    // previous page's scroll offset and animate down, making the hero look
    // blank until the animation finished.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}
