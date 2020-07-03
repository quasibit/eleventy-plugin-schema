"use strict";

const main = require("./main");

/**
 * Structured data script.
 *
 * @param {Object} param0 Parameters
 * @param {Object} param0.meta Meta data.
 * @param {Object} param0.meta.site Site properties.
 * @param {String} param0.meta.site.name Site name.
 * @param {String} param0.meta.site.description Site description.
 * @param {String} param0.meta.site.url Site home URL.
 * @param {Object} param0.meta.site.logo Site logo image properties.
 * @param {String} param0.meta.site.logo.src Image URI.
 * @param {String} param0.meta.site.logo.width Image width.
 * @param {String} param0.meta.site.logo.height Image height.
 * @param {String} param0.meta.url Page URL.
 * @param {String} param0.meta.title Title.
 * @param {String} param0.meta.description Description.
 * @param {String} param0.meta.language Language code (e.g. "en-US" or "en").
 * @param {Object} param0.meta.image Meta image properties.
 * @param {String} param0.meta.image.src Image URI.
 * @param {Object|String} param0.meta.author Author properties.
 * @param {String} param0.meta.author.name Author name.
 * @param {Date} param0.meta.published Published date.
 * @param {Date} param0.meta.modified Modified date.
 * @param {String} param0.meta.section Article section.
 * @param {String} param0.type Type of content ("page" or "post").
 * @param {String[]} param0.tags (Optional) Tags.
 * @returns {String}
 */
module.exports = ({ meta, type, tags = [] }) => {
  const json = main({ meta, type, tags });
  const spaces = 2;

  return `<script type="application/ld+json">
    ${JSON.stringify(json, undefined, spaces)}
  </script>`;
};
