(function () {
  const validTags = ["experimental", "alpha", "beta"];

  function styleNavBadges() {
    const pills = document.querySelectorAll(
      ".nav-tag-pill-text:not([data-badge-processed])"
    );

    pills.forEach((pill) => {
      const tagText = pill.textContent?.trim().toLowerCase() || "";

      if (validTags.includes(tagText)) {
        pill.className = `nav-badge ${tagText}-badge`;
      } else {
        pill.style.opacity = "1";
      }

      pill.setAttribute("data-badge-processed", "true");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", styleNavBadges);
  } else {
    styleNavBadges();
  }

  let timeout;
  const observer = new MutationObserver(() => {
    clearTimeout(timeout);
    timeout = setTimeout(styleNavBadges, 10);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
