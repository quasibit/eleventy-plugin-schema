"use strict";

const image = require("./image");
const video = require("./video");

/**
 * WebPage structured data. See: https://schema.org/WebPage.
 * More info: https://jsonld.com/web-page/.
 *
 * @param {Object} param0 Context.
 * @param {Object} param0.meta Meta data.
 * @param {Object} param0.meta.site Site properties.
 * @param {String} param0.meta.site.name Site name.
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
 * @returns {Object}
 */
module.exports = ({ meta }) => {
  const page = {
    "@type": "WebPage",

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": meta.url,
    },

    url: meta.url,

    isPartOf: {
      "@id": `${meta.site.url}#website`,
    },

    headline: meta.title,
    description: meta.description,
    image: meta.image.src,
    inLanguage: meta.language,

    publisher: {
      "@type": "Organization",
      name: meta.site.name,
      url: `${meta.site.url}#organization`,

      logo: image(meta.site.logo),
    },
  };

  const videoList = video(meta.video);

  if (videoList) {
    page.video = videoList;
  }

  return page;
};
