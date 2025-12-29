import script from "./src/script.js";
import jsonLd from "./src/jsonLd.js";

/**
 * Add a shortcode to generate JSON-LD structured data.
 * @param {Object} eleventyConfig Eleventy Configuration API.
 */
export default (eleventyConfig) => {
  eleventyConfig.addShortcode("jsonLdScript", (meta, type, tags) =>
    script({ meta, type, tags })
  );
  eleventyConfig.addShortcode("jsonLd", (meta, type, tags) =>
    jsonLd({ meta, type, tags })
  );
};