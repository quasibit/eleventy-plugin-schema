"use strict";

const author = require("./author");
const offer = require("./offer");
const rating = require("./rating");

/**
 * Product structured data. See: https://schema.org/Product.
 * More info: https://jsonld.com/product/.
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
 * @param {Object|String} param0.meta.author Author properties.
 * @param {String} param0.meta.author.name Author name.
 * @param {Date} param0.meta.published Published date.
 * @param {Date} param0.meta.modified Modified date.
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
 * @param {String[]} param0.tags (Optional) Tags.
 * @returns {Object}
 */
// eslint-disable-next-line max-statements, complexity, sonarjs/cognitive-complexity
module.exports = ({ meta, tags = [] }) => {
  const product = {
    "@type": "Product",
    author: author(meta.author),
    aggregateRating: rating(meta.rating),
    offers: offer(meta.offers),
    keywords: tags.join(","),
    url: meta.url,
    description: meta.description,
    image: meta.image.src,
    name: meta.name,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": meta.url,
    },
  };

  if (meta.published) {
    product.datePublished = meta.published;
  }

  if (meta.modified) {
    product.dateModified = meta.modified;
  }

  if (meta.gtin) {
    product.gtin = meta.gtin;
  }

  if (meta.gtin12) {
    product.gtin12 = meta.gtin12;
  }

  if (meta.gtin13) {
    product.gtin13 = meta.gtin13;
  }

  if (meta.gtin14) {
    product.gtin14 = meta.gtin14;
  }

  if (meta.gtin8) {
    product.gtin8 = meta.gtin8;
  }

  if (meta.sku) {
    product.sku = meta.sku;
  }

  if (meta.mpn) {
    product.mpn = meta.mpn;
  }

  if (meta.countryOfOrigin) {
    product.countryOfOrigin = meta.countryOfOrigin;
  }

  if (meta.color) {
    product.color = meta.color;
  }

  if (meta.brand) {
    product.brand = meta.brand;
  }

  if (meta.manufacturer) {
    product.manufacturer = meta.manufacturer;
  }

  if (meta.material) {
    product.material = meta.material;
  }

  if (meta.productID) {
    product.productID = meta.productID;
  }

  if (meta.category) {
    product.category = meta.category;
  }

  if (meta.identifier) {
    product.identifier = meta.identifier;
  }

  // add name
  // add identifier
  // pop headline
  // pop inLanguage
  // pop keywords
  // pop isPartOf
  // pop publisher

  return product;
};
