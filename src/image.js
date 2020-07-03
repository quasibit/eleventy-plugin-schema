"use strict";

/**
 * Image structured data. See https://schema.org/ImageObject.
 *
 * @param {Object} image Image properties.
 * @param {String} image.src Image absolute URL.
 * @param {String} image.width Image width.
 * @param {String} image.height Image height.
 * @returns {Object|undefined}
 */
module.exports = (image) => {
  if (!image) {
    return;
  }

  // eslint-disable-next-line unicorn/prevent-abbreviations
  const { src, width, height } = image;

  return {
    "@type": "ImageObject",
    url: src,
    width,
    height,
  };
};
