(() => {
  // Keep poster images when JavaScript or observation is unavailable.
  if (!("IntersectionObserver" in window)) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const saveData = navigator.connection?.saveData;
  const previews = new Map();

  const update = (state) => {
    const canPlay = state.visible && !document.hidden && !reducedMotion.matches && !saveData;
    if (canPlay) {
      state.video.play().catch(() => {
        // Leave the poster visible if the browser prevents automatic playback.
      });
    } else {
      state.video.pause();
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const state = previews.get(entry.target);
        state.visible = entry.isIntersecting && entry.intersectionRatio >= 0.25;
        update(state);
      });
    },
    { threshold: [0, 0.25] }
  );

  document.querySelectorAll("[data-research-preview]").forEach((container) => {
    const video = container.querySelector("video");
    const state = { video, visible: false };
    previews.set(container, state);
    video.muted = true;

    observer.observe(container);
  });

  document.addEventListener("visibilitychange", () => previews.forEach(update));
  reducedMotion.addEventListener("change", () => previews.forEach(update));
})();
