"use strict";

const script = require("./src/script");

/**
 * Add a shortcode to generate JSON-LD structured data.
 * @param {Object} eleventyConfig Eleventy Configuration API.
 */
module.exports = (eleventyConfig) => {
  eleventyConfig.addShortcode("jsonLdScript", (meta, type, tags) =>
    script({ meta, type, tags })
  );
};
