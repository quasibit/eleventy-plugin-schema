"use strict";

/**
 * Postal Address structured data. See: https://schema.org/PostalAddress.
 *
 * @param {Object} address Address.
 * @param {String|Object} address.addressCountry The country.
 * For example, USA. You can also provide the two-letter ISO 3166-1 alpha-2
 * country code.
 * @param {String} address.addressLocality The locality in which the
 * street address is, and which is in the region. For example, Mountain View.
 * @param {String} address.addressRegion The region in which the locality
 * is, and which is in the country. For example, California or another
 * appropriate first-level Administrative division
 * @param {String} address.postOfficeBoxNumber The post office box number
 * or PO box addresses.
 * @param {String} address.postalCode The postal code. For example, 94043.
 * @param {String} address.streetAddress The street address. For example,
 * 1600 Amphitheatre Pkwy.
 * @returns {Object|undefined}
 */
module.exports = (address) => {
  if (!address) {
    return;
  }

  return {
    "@type": "PostalAddress",
    addressCountry: address.addressCountry,
    addressLocality: address.addressLocality,
    addressRegion: address.addressRegion,
    postOfficeBoxNumber: address.postOfficeBoxNumber,
    postalCode: address.postalCode,
    streetAddress: address.streetAddress,
  };
};
