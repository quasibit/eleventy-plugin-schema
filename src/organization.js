"use strict";

/**
 * Organization structured data. See: https://schema.org/Organization.
 * More info https://jsonld.com/organization/.
 *
 * @param {Object} param0 Context
 * @param {Object} param0.meta Meta data.
 * @param {Object} param0.meta.site Site properties.
 * @param {String} param0.meta.site.name Site name.
 * @param {String} param0.meta.site.description Site description.
 * @param {String} param0.meta.site.url Site home URL.
 * @param {String} param0.meta.language Language code (e.g. "en-US" or "en").
 * @returns {Object}
 */
// eslint-disable-next-line max-statements, complexity, sonarjs/cognitive-complexity
module.exports = ({ meta }) => {
  if (!meta.organization) {
    return;
  }

  const org = {
    "@type": "Organization",
    "@id": `${meta.organization.url}#organization`,
    name: meta.organization.name,
    url: meta.organization.url,
  };

  if (meta.organization.legalName) {
    org.legalName = meta.organization.legalName;
  }

  if (meta.organization.logo) {
    org.logo = meta.organization.logo;
  }

  if (meta.organization.description) {
    org.description = meta.organization.description;
  }

  if (meta.organization.foundingDate) {
    org.foundingDate = meta.organization.foundingDate;
  }

  if (meta.organization.founders) {
    org.founders = meta.organization.founders.map(function personMap(person) {
      return {
        "@type": "Person",
        name: person.name,
      };
    });
  }

  if (meta.organization.address) {
    const address = {
      "@type": "PostalAddress",
    };

    if (meta.organization.address.streetAddress) {
      address.streetAddress = meta.organization.address.streetAddress;
    }

    if (meta.organization.address.addressLocality) {
      address.addressLocality = meta.organization.address.addressLocality;
    }

    if (meta.organization.address.addressRegion) {
      address.addressRegion = meta.organization.address.addressRegion;
    }

    if (meta.organization.address.postalCode) {
      address.postalCode = meta.organization.address.postalCode;
    }

    if (meta.organization.address.addressCountry) {
      address.addressCountry = meta.organization.address.addressCountry;
    }

    org.address = address;
  }

  if (meta.organization.contactPoint) {
    // eslint-disable-next-line max-statements
    org.contactPoint = meta.organization.contactPoint.map(function contactMap(
      contactPoint
    ) {
      const contact = {
        "@type": "ContactPoint",
      };

      if (contactPoint.telephone) {
        contact.telephone = contactPoint.telephone;
      }

      if (contactPoint.contactType) {
        contact.contactType = contactPoint.contactType;
      }

      if (contactPoint.contactOption) {
        contact.contactOption = contactPoint.contactOption;
      }

      if (contactPoint.areaServed) {
        if (typeof contactPoint.areaServed === "string") {
          contact.areaServed = contactPoint.areaServed;
        } else {
          contact.areaServed = contactPoint.areaServed.map(function areaMap(
            area
          ) {
            return area;
          });
        }
      }

      if (contactPoint.availableLanguage) {
        if (typeof contactPoint.availableLanguage === "string") {
          contact.availableLanguage = contactPoint.availableLanguage;
        } else {
          contact.availableLanguage = contactPoint.availableLanguage.map(
            function languageMap(language) {
              return language;
            }
          );
        }
      }

      return contact;
    });
  }

  if (meta.organization.sameAs) {
    if (typeof meta.organization.sameAs === "string") {
      org.sameAs = meta.organization.sameAs;
    } else {
      org.sameAs = meta.organization.sameAs.map(function sameMap(same) {
        return same;
      });
    }
  }

  return org;
};
