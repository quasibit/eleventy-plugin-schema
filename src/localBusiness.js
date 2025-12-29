import image from "./image.js";

/**
 * LocalBusiness structured data. See: https://schema.org/LocalBusiness.
 *
 * @param {Object} param0 Context.
 * @param {Object} param0.meta Meta data.
 * @param {String} param0.meta.name Business name.
 * @param {String} param0.meta.description Business description.
 * @param {String} param0.meta.url Business URL.
 * @param {String} param0.meta.telephone Business phone number.
 * @param {String} param0.meta.email Business email.
 * @param {String} param0.meta.priceRange Price range (e.g. "$$$").
 * @param {Object} param0.meta.image Business image.
 * @param {Object} param0.meta.address Business address.
 * @param {String} param0.meta.address.streetAddress Street address.
 * @param {String} param0.meta.address.addressLocality City.
 * @param {String} param0.meta.address.addressRegion State/Province.
 * @param {String} param0.meta.address.postalCode Postal code.
 * @param {String} param0.meta.address.addressCountry Country.
 * @param {Object} param0.meta.geo Geographic coordinates.
 * @param {Number} param0.meta.geo.latitude Latitude.
 * @param {Number} param0.meta.geo.longitude Longitude.
 * @param {Array} param0.meta.openingHours Opening hours specifications.
 * @param {String} param0.meta.businessType Specific business type (e.g. "Restaurant").
 * @returns {Object}
 */
export default ({ meta }) => {
  if (!meta?.name) {
    return;
  }

  const business = {
    "@type": meta.businessType || "LocalBusiness",
    name: meta.name,
  };

  if (meta.description) {
    business.description = meta.description;
  }

  if (meta.url) {
    business.url = meta.url;
  }

  if (meta.telephone) {
    business.telephone = meta.telephone;
  }

  if (meta.email) {
    business.email = meta.email;
  }

  if (meta.priceRange) {
    business.priceRange = meta.priceRange;
  }

  if (meta.image?.src) {
    business.image = image(meta.image);
  }

  if (meta.address) {
    business.address = {
      "@type": "PostalAddress",
    };

    if (meta.address.streetAddress) {
      business.address.streetAddress = meta.address.streetAddress;
    }

    if (meta.address.addressLocality) {
      business.address.addressLocality = meta.address.addressLocality;
    }

    if (meta.address.addressRegion) {
      business.address.addressRegion = meta.address.addressRegion;
    }

    if (meta.address.postalCode) {
      business.address.postalCode = meta.address.postalCode;
    }

    if (meta.address.addressCountry) {
      business.address.addressCountry = meta.address.addressCountry;
    }
  }

  if (meta.geo?.latitude && meta.geo?.longitude) {
    business.geo = {
      "@type": "GeoCoordinates",
      latitude: meta.geo.latitude,
      longitude: meta.geo.longitude,
    };
  }

  if (meta.openingHours && Array.isArray(meta.openingHours)) {
    business.openingHoursSpecification = meta.openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    }));
  }

  if (meta.sameAs) {
    business.sameAs = meta.sameAs;
  }

  return business;
};
