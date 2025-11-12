import { useEffect } from "react";

const ReadinessBadge = () => {
  const validTags = ["beta", "alpha", "experimental"];

  useEffect(() => {
    const addBadge = () => {
      const tagElement = document.querySelector(".nav-tag-pill-text");
      if (!tagElement) return;

      const tagText = tagElement.textContent?.trim().toLowerCase() || "";
      if (!validTags.includes(tagText)) return;

      const titleElement = document.querySelector(
        "#page-title, .page-title, h1"
      );
      if (!titleElement || titleElement.querySelector(`.${tagText}-badge`))
        return;

      const badge = document.createElement("span");
      badge.className = `badge ${tagText}-badge`;
      badge.textContent = tagText;
      titleElement.appendChild(badge);
    };

    addBadge();
  }, []);
  return null;
};

export default ReadinessBadge;
