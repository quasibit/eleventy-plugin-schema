"use strict";

/**
 * AggregateRating structured data. See https://schema.org/AggregateRating.
 *
 * @param {Object} rating AggregateRating properties.
 * @param {String} rating.ratingValue The rating for the content.
 * @param {String} rating.bestRating The highest value allowed.
 * @param {String} rating.worstRating The lowest value allowed.
 * @param {String} rating.ratingCount Total number of ratings.
 * @param {String} rating.reviewCount Total number of reviews.
 * @returns {Object|undefined}
 */
module.exports = (rating) => {
  if (!rating) {
    return;
  }

  return {
    "@type": "AggregateRating",
    ratingValue: rating.ratingValue,
    bestRating: rating.bestRating,
    worstRating: rating.worstRating,
    ratingCount: rating.ratingCount,
    reviewCount: rating.reviewCount,
  };
};
