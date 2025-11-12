(function () {
  const tagElement = document.querySelector(".nav-tag-pill-text");
  if (!tagElement) return;

  const tagText = tagElement.textContent?.trim().toLowerCase() || "";
  const validTags = ["beta", "alpha", "experimental"];

  if (!validTags.includes(tagText)) return;

  function addBadge() {
    const titleElement = document.querySelector("#page-title, .page-title, h1");
    if (!titleElement || titleElement.querySelector(`.${tagText}-badge`))
      return;

    const badge = document.createElement("span");
    badge.className = `badge ${tagText}-badge`;
    badge.textContent = tagText
    titleElement.appendChild(badge);
  }

  addBadge();
  new MutationObserver(addBadge).observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
