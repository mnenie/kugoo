export default function smoothScroll() {
  const smoothScrollToTop = () => {
    // const scrollDuration = 250;
    const scrollStep = -window.scrollY
    window.scrollBy(0, scrollStep)
    // const scrollInterval = setInterval(() => {
    //   if (window.scrollY !== 0) {
    //     window.scrollBy(0, scrollStep);
    //   } else {
    //     clearInterval(scrollInterval);
    //   }
    // }, 10);
  }
  return{
    smoothScrollToTop
  }
}
