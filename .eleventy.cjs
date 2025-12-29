"use strict";

/**
 * CommonJS wrapper for the ESM plugin.
 * Uses dynamic import to load the ESM module.
 *
 * @param {Object} eleventyConfig Eleventy Configuration API.
 */
module.exports = async (eleventyConfig) => {
  const { default: script } = await import("./src/script.js");
  const { default: jsonLd } = await import("./src/jsonLd.js");

  eleventyConfig.addShortcode("jsonLdScript", (meta, type, tags) =>
    script({ meta, type, tags })
  );
  eleventyConfig.addShortcode("jsonLd", (meta, type, tags) =>
    jsonLd({ meta, type, tags })
  );
};