"use strict";

/**
 * Postal Address structured data. See: https://schema.org/SearchAction.
 *
 * @param {Object} potentialAction SearchAction.
 * @param {url} potentialAction.action Search. Must include
 * {search_term_string} in the url.
 * @returns {Object|undefined}
 */
module.exports = (potentialAction) => {
  if (!potentialAction) {
    return;
  }

  return {
    target: {
      "@type": "EntryPoint",
      urlTemplate: potentialAction.url,
    },

    query: "required name=search_term_string",
  };
};
