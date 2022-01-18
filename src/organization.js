"use strict";

const postalAddress = require("./postalAddress");
const contactPoint = require("./contactPoint");
const image = require("./image");
const person = require("./person");

/**
 * Organization structured data. See: https://schema.org/Organization.
 * More info https://jsonld.com/organization/.
 *
 * @param {Object} param0 Context
 * @param {Object} param0.meta Meta data.
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
 * @returns {Object|undefined}
 */
module.exports = ({ meta }) => {
  if (!meta.organization) {
    return;
  }

  return {
    "@type": "Organization",
    "@id": `${meta.organization.url}#organization`,
    name: meta.organization.name,
    description: meta.organization.description,
    url: meta.organization.url,
    address: postalAddress(meta.organization.address),
    contactPoint: contactPoint(meta.organization.contactPoint),
    foundingDate: meta.organization.foundingDate,
    legalName: meta.organization.legalName,
    logo: image(meta.organization.logo),
    founder: person(meta.organization.founder),
    founders: person(meta.organization.founders),
    sameAs: meta.organization.sameAs,
  };
};
