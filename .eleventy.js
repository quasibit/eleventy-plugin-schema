"use strict";

const script = require("./src/script");
const jsonLd = require("./src/jsonLd");

/**
 * Add a shortcode to generate JSON-LD structured data.
 * @param {Object} eleventyConfig Eleventy Configuration API.
 */
module.exports = (eleventyConfig) => {
  eleventyConfig.addShortcode("jsonLdScript", (meta, type, tags) =>
    script({ meta, type, tags })
  );
  eleventyConfig.addShortcode("jsonLd", (meta, type, tags) =>
    jsonLd({ meta, type, tags })
  );
};
