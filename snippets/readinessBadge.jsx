import { useEffect } from "react";

const ReadinessBadge = ({ type }) => {
  const validTags = ["beta", "alpha", "experimental"];

  const tagText = type?.trim().toLowerCase();
  if (!tagText || !validTags.includes(tagText)) return null;

  useEffect(() => {
    const titleElement = document.querySelector("#page-title, .page-title, h1");
    if (!titleElement) return;
    if (titleElement.querySelector(".badge")) return;

    const badge = document.createElement("span");
    badge.className = `badge ${tagText}-badge`;
    badge.textContent = tagText;
    titleElement.appendChild(badge);
  }, []);

  return null;
};

export default ReadinessBadge;
