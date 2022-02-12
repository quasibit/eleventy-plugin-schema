"use strict";

/**
 * Review item structured data. See: https://schema.org/review.
 *
 * @param {Object} review Review item.
 * @param {String} review.name Review title.
 * @param {String} review.date Review date.
 * @param {String} review.review Review message.
 * @param {String} review.rating Review rating.
 * @param {String} review.author Review author.
 * @param {String} review.publisher Review publisher.
 * @returns {Object|undefined}
 */
module.exports = (review) => {
  if (!review) {
    return;
  }

  const thisReview = {
    "@type": "Review",
    name: review.name,
    datePublished: review.date,
    reviewBody: review.review,
  };

  if (review.rating !== undefined) {
    thisReview.reviewRating = {
      "@type": "Rating",
      ratingValue: review.rating,
    };
  }

  if (review.author !== undefined) {
    thisReview.author = {
      "@type": "Person",
      name: review.author,
    };
  }

  if (review.publisher !== undefined) {
    thisReview.publisher = {
      "@type": "Organization",
      name: review.publisher,
    };
  }

  return thisReview;
};
