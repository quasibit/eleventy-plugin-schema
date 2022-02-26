"use strict";

/**
 * Organization structured data. See: https://schema.org/ContactPoint.
 *
 * @param {Object|Array} contactPoint Contact point object(s).
 * @param {String|Object} contactPoint.areaServed The geographic area where a
 * service or offered item is provided. Supersedes serviceArea.
 * @param {String|Object} contactPoint.availableLanguage A language someone may
 * use with or at the item, service or place. Please use one of the language
 * codes from the IETF BCP 47 standard. See also inLanguage
 * @param {Object} contactPoint.contactOption An option available on this
 * contact point (e.g. a toll-free number or support for hearing-impaired
 * callers).
 * @param {String} contactPoint.contactType A person or organization can have
 * different contact points, for different purposes. For example, a sales
 * contact point, a PR contact point and so on. This property is used to specify
 * the kind of contact point.
 * @param {String} contactPoint.email Email address.
 * @param {String} contactPoint.faxNumber The fax number.
 * @param {Object} contactPoint.hoursAvailable The hours during which this
 * service or contact is available.
 * @param {String|Object} contactPoint.productSupported The product or service
 * this support contact point is related to (such as product support for a
 * particular product line). This can be a specific product or product line
 * (e.g. "iPhone") or a general category of products or services
 * (e.g. "smartphones").
 * @param {String} contactPoint.telephone The telephone number.
 * @param {String} contactPoint.url Url for contact point.
 * @returns {Object|undefined}
 */
module.exports = (contactPoint) => {
  if (!contactPoint) {
    return;
  }

  if (Array.isArray(contactPoint)) {
    return contactPoint.map(module.exports);
  }

  return {
    "@type": "ContactPoint",
    areaServed: contactPoint.areaServed,
    availableLanguage: contactPoint.availableLanguage,
    contactOption: contactPoint.contactOption,
    contactType: contactPoint.contactType,
    email: contactPoint.email,
    faxNumber: contactPoint.faxNumber,
    hoursAvailable: contactPoint.hoursAvailable,
    productSupported: contactPoint.productSupported,
    telephone: contactPoint.telephone,
    url: contactPoint.url,
  };
};
