"use strict";

const main = require("./main");

/**
 * Structured data script.
 *
 * @param {Object} param0 Parameters
 * @param {Object} param0.meta Meta data.
 * @param {Object} param0.meta.site Site properties.
 * @param {String} param0.meta.site.name Site name.
 * @param {String} param0.meta.site.description Site description.
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
 * @param {Object|String} param0.meta.author Author properties.
 * @param {String} param0.meta.author.name Author name.
 * @param {Date} param0.meta.published Published date.
 * @param {Date} param0.meta.modified Modified date.
 * @param {String} param0.meta.section Article section.
 * @param {String} param0.type Type of content ("page" or "post").
 * @param {String[]} param0.tags (Optional) Tags.
 * @param {Object} param0.meta.offers Product offers.
 * @param {Object} param0.meta.rating Product rating.
 * @param {String} param0.meta.gtin A Global Trade Item Number (GTIN).
 * @param {String} param0.meta.gtin12 The GTIN-12 code of the product.
 * @param {String} param0.meta.gtin13 The GTIN-13 code of the product
 * @param {String} param0.meta.gtin14 The GTIN-14 code of the product.
 * @param {String} param0.meta.gtin8 The GTIN-8 code of the product.
 * @param {String} param0.meta.sku The Stock Keeping Unit.
 * @param {String} param0.meta.mpn The Manufacturer Part Number of the product.
 * @param {String} param0.meta.countryOfOrigin The country of origin.
 * @param {String} param0.meta.color The color of the product.
 * @param {String} param0.meta.brand The brand(s) associated with a product.
 * @param {String} param0.meta.manufacturer The manufacturer of the product.
 * @param {String} param0.meta.material A material that something is made from.
 * @param {String} param0.meta.productID The product identifier, such as ISBN.
 * @param {String} param0.meta.productionDate The date of production.
 * @param {String} param0.meta.category A category for the item.
 * @param {String} param0.meta.identifier A identifier for the item.
 * @returns {String}
 */
module.exports = ({ meta, type, tags = [] }) => {
  const json = main({ meta, type, tags });
  const spaces = 2;

  return `<script type="application/ld+json">
    ${JSON.stringify(
      json,
      (key, value) =>
        Array.isArray(value)
          ? value.filter((element) => element !== null && element !== undefined)
          : value,
      spaces
    )}
  </script>`;
};
