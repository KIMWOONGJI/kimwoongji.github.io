// Looping figure videos (.motion-figure video[data-src], _projects/parametric_array_loudspeakers.md).
// A video's source is attached only when its figure comes near the viewport, and playback pauses
// while the figure is off screen, so the page loads only the posters up front and decodes only the
// videos in view. With prefers-reduced-motion the poster stays: it is the first frame, the same
// picture as the static figure. Without JavaScript, or when the browser refuses autoplay (e.g. iOS
// Low Power Mode), the poster is all that shows.
(function () {
  const videos = document.querySelectorAll(".motion-figure video[data-src]");
  if (!videos.length) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  function play(v) {
    if (!v.getAttribute("src")) v.src = v.dataset.src;
    v.muted = true;
    const p = v.play();
    if (p) p.catch(() => {});
  }

  if (!("IntersectionObserver" in window)) {
    if (!reduce.matches) videos.forEach(play);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting && !reduce.matches) play(e.target);
        else if (!e.isIntersecting && !e.target.paused) e.target.pause();
      }
    },
    { rootMargin: "200px 0px" }
  );
  videos.forEach((v) => io.observe(v));

  // Follow a change of the motion setting: pause everything, or re-observe so the videos in view resume.
  reduce.addEventListener?.("change", () => {
    videos.forEach((v) => {
      if (reduce.matches) v.pause();
      io.unobserve(v);
      io.observe(v);
    });
  });
})();
