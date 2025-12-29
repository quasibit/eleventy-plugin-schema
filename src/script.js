import jsonLd from "./jsonLd.js";

/**
 * Structured data script.
 *
 * @param {Object} param0 Parameters
 * @param {Object} param0.meta Meta data.
 * @param {String} param0.type Type of content ("page" or "post").
 * @param {String[]} param0.tags (Optional) Tags.
 * @returns {String}
 */
export default (data) => {
  if (!data.meta) {
    return "";
  }

  return `<script type="application/ld+json">${jsonLd(data)}</script>`;
};