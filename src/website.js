"use strict";

const potentialAction = require("./potentialAction");

/**
 * WebSite structured data. See: https://schema.org/WebSite.
 * More info https://jsonld.com/website/.
 *
 * @param {Object} param0 Context
 * @param {Object} param0.meta Meta data.
 * @param {Object} param0.meta.site Site properties.
 * @param {String} param0.meta.site.name Site name.
 * @param {String} param0.meta.site.description Site description.
 * @param {String} param0.meta.site.url Site home URL.
 * @param {String} param0.meta.language Language code (e.g. "en-US" or "en").
 * @returns {Object}
 */
module.exports = ({ meta }) => {
  const website = {
    "@type": "WebSite",
    "@id": `${meta.site.url}#website`,
    url: meta.site.url,
    name: meta.site.name,
    description: meta.site.description,
    inLanguage: meta.language,
  };

  const action = potentialAction({ meta });

  if (action) {
    website.potentialAction = action;
  }

  return website;
};
