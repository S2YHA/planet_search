export function useScroll() {
  function scrollToTop() {
    window.scrollTo(0, 0)
  }

  return { scrollToTop }
}
