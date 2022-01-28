"use strict";

const page = require("./page");
const post = require("./post");
const website = require("./website");
const product = require("./product");
const organization = require("./organization");
const breadcrumbs = require("./breadcrumbs");
const faq = require("./faq");

/**
 * Structured data for the current context.
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
 * @param {String} param0.meta.brand The brand(s) of a product.
 * @param {String} param0.meta.manufacturer The manufacturer.
 * @param {String} param0.meta.material A material that it is made from.
 * @param {String} param0.meta.productID The product identifier, such as ISBN.
 * @param {String} param0.meta.productionDate The date of production.
 * @param {String} param0.meta.category A category for the item.
 * @param {String} param0.meta.identifier A identifier for the item.
 * @param {String} param0.meta.organization.name Organization name.
 * @param {String} param0.meta.organization.description Organization
 * description.
 * @param {String} param0.meta.organization.url Organization URL.
 * @param {Object} param0.meta.organization.address Organization address.
 * @param {Object} param0.meta.organization.contactPoint Organization contact
 * point.
 * @param {String} param0.meta.organization.foundingDate Organization founding
 * date.
 * @param {String} param0.meta.organization.legalName Organization legal name.
 * @param {String|Object} param0.meta.organization.logo Organization logo.
 * @param {String|Object} param0.meta.organization.founder Organization founder.
 * @param {Array} param0.meta.organization.founders Organization founders.
 * @param {String|Array} param0.meta.organization.sameAs URL of a reference Web
 * page that unambiguously indicates the item's identity. E.g. the URL of the
 * item's Wikipedia page, Wikidata entry, or official website.
 * @returns {Object}
 */
module.exports = ({ meta, type, tags = [] }) => {
  let content = page({ meta });

  if (type === "post") {
    content = post({ meta, tags });
  } else if (type === "product") {
    content = product({ meta });
  }

  return {
    "@context": "https://schema.org",

    "@graph": [
      organization({ meta }),
      breadcrumbs({ meta }),
      website({ meta }),
      faq({ meta }),
      content,
    ],
  };
};
