// src/utils/scrollToId.ts
interface ScrollToIdOptions {
  /** Pixels to leave above the element, e.g. for a fixed header */
  offset?: number;
  behavior?: ScrollBehavior;
}

export const scrollToId = (
  id: string,
  { offset = 0, behavior = "smooth" }: ScrollToIdOptions = {},
): boolean => {
  if (typeof window === "undefined") return false;

  const element = document.getElementById(id.replace(/^#/, ""));
  if (!element) return false;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const top = element.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top,
    behavior: prefersReducedMotion ? "auto" : behavior,
  });

  return true;
};
