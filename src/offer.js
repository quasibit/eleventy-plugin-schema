"use strict";

/**
 * Offer structured data. See https://schema.org/Offer.
 *
 * @param {Object} offer Offer properties.
 * @param {String} offer.priceCurrency The currency of the price.
 * @param {String} offer.price The offer price of a product.
 * @param {String} offer.priceValidUntil The date after which the price is no longer available.
 * @param {String} offer.availability The availability of this item—for example In stock, Out of stock, Pre-order, etc.
 * @param {String} offer.availabilityStarts The beginning of the availability of the product or service included in the offer.
 * @param {String} offer.availabilityEnds The end of the availability of the product or service included in the offer.
 * @param {String} offer.itemCondition A predefined value from OfferItemCondition specifying the condition of the product
 * @returns {Object|undefined}
 */
module.exports = (offer) => {
  if (!offer) {
    return;
  }

  const productOffer = {
    "@type": "Offer"
    }

  if (offer.priceCurrency) {
    productOffer.priceCurrency = offer.priceCurrency;
  }

  if (offer.price) {
    productOffer.price = offer.price;
  }

  if (offer.priceValidUntil) {
    productOffer.priceValidUntil = offer.priceValidUntil;
  }

  if (offer.availability) {
    productOffer.availability = offer.availability;
  }

  if (offer.availabilityStarts) {
    productOffer.availabilityStarts = offer.availabilityStarts;
  }

  if (offer.availabilityEnds) {
    productOffer.availabilityEnds = offer.availabilityEnds;
  }

  if (offer.category) {
    productOffer.category = offer.category;
  }

  if (offer.itemCondition) {
    productOffer.itemCondition = offer.itemCondition;
  }

  return productOffer;
};
