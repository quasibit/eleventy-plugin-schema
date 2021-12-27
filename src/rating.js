"use strict";

/**
 * AggregateRating structured data. See https://schema.org/AggregateRating.
 *
 * @param {Object} rating AggregateRating properties.
 * @param {String} rating.ratingValue The rating for the content.
 * @param {String} rating.bestRating The highest value allowed in this rating system.
 * @param {String} rating.worstRating The lowest value allowed in this rating system.
 * @param {String} rating.ratingCount The count of total number of ratings.
 * @param {String} rating.reviewCount The count of total number of reviews.
 * @returns {Object|undefined}
 */
module.exports = (rating) => {
  if (!rating) {
    return;
  }

  const aggregateRating = {
    "@type": "AggregateRating"
    }

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
