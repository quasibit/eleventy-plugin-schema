"use strict";

/**
 * BreadcrumbList structured data. See: https://schema.org/BreadcrumbList.
 * More info https://jsonld.com/breadcrumb/.
 *
 * @param {Object} param0 Context
 * @param {Object} param0.meta Meta data.
 * @param {String} param0.meta.position Crumb position.
 * @param {String} param0.meta.url Crumb url.
 * @param {String} param0.meta.name Crumb name.
 * @param {string} param0.meta.image Crumb image..
 * @returns {Object|undefined}
 */
module.exports = ({ meta }) => {
  if (!meta.breadcrumbs) {
    return;
  }

  const crumblist = meta.breadcrumbs.map(function crumbMap(crumb) {
    return {
      "@type": "ListItem",
      position: crumb.position,

      item: {
        "@id": crumb.url,
        name: crumb.name,
        image: crumb.image,
      },
    };
  });

  return {
    "@type": "BreadcrumbList",
    itemListElement: crumblist,
  };
};
