"use strict";

const faqList = require("./faqList");

/**
 * FAQPage structured data. See: https://schema.org/FAQPage.
 * More info https://developers.google.com/search/docs/advanced/structured-data/faqpage.
 *
 * @param {Object} param0 Context
 * @param {Array} param0.faq Faq's.
 * @returns {Object|undefined}
 */
module.exports = ({ meta }) => {
  if (!meta.faq) {
    return;
  }

  return {
    "@type": "FAQPage",
    mainEntity: meta.faq.map(faqList),
  };
};
