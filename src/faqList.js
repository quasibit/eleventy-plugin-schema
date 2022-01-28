"use strict";

/**
 * mainEntity FAQ List structured data. See: https://schema.org/mainEntity.
 *
 * @param {Object} item List item.
 * @param {String} item.question Question text.
 * @param {String} item.answer Answer text.
 * @returns {Object|undefined}
 */
module.exports = (item) => {
  if (!item) {
    return;
  }

  return {
    "@type": "Question",
    name: item.question,

    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  };
};
