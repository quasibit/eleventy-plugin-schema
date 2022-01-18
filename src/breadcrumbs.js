"use strict";

const listItem = require("./listItem");

/**
 * BreadcrumbList structured data. See: https://schema.org/BreadcrumbList.
 * More info https://jsonld.com/breadcrumb/.
 *
 * @param {Object} param0 Context
 * @param {Array} param0.breadcrumbs Breadcrumbs.
 * @returns {Object|undefined}
 */
module.exports = ({ meta }) => {
  if (!meta.breadcrumbs) {
    return;
  }

  return {
    "@type": "BreadcrumbList",
    itemListElement: meta.breadcrumbs.map(listItem),
  };
};
