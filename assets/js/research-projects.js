(() => {
  // Keep native controls as the fallback when JavaScript or observation is unavailable.
  if (!("IntersectionObserver" in window)) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const saveData = navigator.connection?.saveData;
  const previews = new Map();

  const synchronize = (state) => {
    const action = state.video.paused ? "Play" : "Pause";
    state.button.querySelector("[data-preview-label]").textContent = `${action} preview`;
    state.button.querySelector("[data-preview-icon]").textContent = state.video.paused ? "▶" : "Ⅱ";
    state.button.setAttribute("aria-label", `${action} preview of ${state.button.dataset.projectTitle}`);
  };

  const update = (state) => {
    const canPlay = state.visible && !document.hidden && !state.userPaused && (state.userRequested || (!reducedMotion.matches && !saveData));
    if (canPlay) {
      state.video.play().catch(() => synchronize(state));
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
    const button = container.querySelector("button");
    const state = { video, button, visible: false, userPaused: false, userRequested: false };
    previews.set(container, state);
    video.controls = false;
    video.muted = true;
    button.hidden = false;

    video.addEventListener("play", () => synchronize(state));
    video.addEventListener("pause", () => synchronize(state));
    video.addEventListener("error", () => {
      video.controls = true;
      button.hidden = true;
    });

    button.addEventListener("click", () => {
      state.userPaused = !video.paused;
      state.userRequested = video.paused;
      update(state);
    });

    observer.observe(container);
  });

  document.addEventListener("visibilitychange", () => previews.forEach(update));
  reducedMotion.addEventListener("change", () => {
    previews.forEach((state) => {
      state.userRequested = false;
      update(state);
    });
  });
})();
