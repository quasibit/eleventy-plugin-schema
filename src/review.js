"use strict";

const reviewList = require("./reviewList");

/**
 * Review structured data. See: https://schema.org/Review.
 * More info https://jsonld.com/review/
 *
 * @param {Object} param0 Context
 * @param {Array} param0.reviews reviews's.
 * @returns {Object|undefined}
 */

module.exports = (reviews) => {
  if (!reviews) {
    return;
  }

  return reviews.map(reviewList);
};
