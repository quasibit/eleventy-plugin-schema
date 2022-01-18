"use strict";

const image = require("./image");

/**
 * Postal Address structured data. See: https://schema.org/ListItem.
 *
 * @param {Object} item List item.
 * @param {String|Number} item.position The position of an item in a series
 * or sequence of items.
 * @param {String} item.url URL of the item.
 * @param {String} item.name The name of the item.
 * @param {String|Object} item.image An image of the item.
 * @returns {Object|undefined}
 */
module.exports = (item) => {
  if (!item) {
    return;
  }

  return {
    "@type": "ListItem",
    position: item.position,

    item: {
      "@id": item.url,
      name: item.name,
      image: image(item.image),
    },
  };
};
