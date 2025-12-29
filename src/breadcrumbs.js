import listItem from "./listItem.js";

/**
 * BreadcrumbList structured data. See: https://schema.org/BreadcrumbList.
 * More info https://jsonld.com/breadcrumb/.
 *
 * @param {Object} param0 Context
 * @param {Array} param0.breadcrumbs Breadcrumbs.
 * @returns {Object|undefined}
 */
export default ({ meta }) => {
  if (!meta.breadcrumbs) {
    return;
  }

  return {
    "@type": "BreadcrumbList",
    itemListElement: meta.breadcrumbs.map(listItem),
  };
};