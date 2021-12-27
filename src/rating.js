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
// eslint-disable-next-line max-statements
module.exports = (rating) => {
  if (!rating) {
    return;
  }

  const aggregateRating = {
    "@type": "AggregateRating",
  };

  if (rating.ratingValue) {
    aggregateRating.ratingValue = rating.ratingValue;
  }

  if (rating.bestRating) {
    aggregateRating.bestRating = rating.bestRating;
  }

  if (rating.worstRating) {
    aggregateRating.worstRating = rating.worstRating;
  }

  if (rating.ratingCount) {
    aggregateRating.ratingCount = rating.ratingCount;
  }

  if (rating.reviewCount) {
    aggregateRating.reviewCount = rating.reviewCount;
  }

  return aggregateRating;
};
