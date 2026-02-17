import image from "./image.js";
import offer from "./offer.js";
import rating from "./rating.js";
import review from "./review.js";

/**
 * Service structured data. See: https://schema.org/Service.
 *
 * @param {Object} param0 Context.
 * @param {Object} param0.meta Meta data.
 * @param {String} param0.meta.name Service name.
 * @param {String} param0.meta.description Service description.
 * @param {String} param0.meta.url Service URL.
 * @param {String} param0.meta.serviceType Service type.
 * @param {Object} param0.meta.image Service image.
 * @param {Object|String|Array} param0.meta.areaServed Service area.
 * @param {Object} param0.meta.offers Service offers.
 * @param {Object} param0.meta.rating Service rating.
 * @param {Array} param0.meta.reviews Service reviews.
 * @returns {Object}
 */
export default ({ meta }) => {
  const service = {
    "@type": "Service",
    name: meta.name,
    aggregateRating: rating(meta.rating),
    offers: offer(meta.offers),
    review: review(meta.reviews),
    serviceType: meta.serviceType,
    url: meta.url,
    description: meta.description,
  };

  if (meta.image?.src) {
    service.image = image(meta.image);
  }

  if (meta.provider?.name) {
    service.provider = {
      "@type": meta.provider.type || "Organization",
      name: meta.provider.name,
    };
  }

  if (meta.areaServed) {
    service.areaServed = meta.areaServed;
  }

  return service;
};
