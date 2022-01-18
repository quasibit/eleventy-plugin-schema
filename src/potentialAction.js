"use strict";

const searchAction = require("./searchAction");

/**
 * potentialAction structured data. See: https://schema.org/potentialAction.
 * More info https://developers.google.com/search/docs/advanced/structured-data/sitelinks-searchbox
 *
 * @param {Object} param0 Context
 * @param {Object} param0.meta Meta data.
 * @param {String} param0.meta.potentialAction.type potentialAction type.
 * @param {Object} param0.meta.potentialAction potentialAction
 * @returns {Object|undefined}
 */

module.exports = ({ meta }) => {
  if (!meta.potentialAction) {
    return;
  }

  const action = {
    "@type": meta.potentialAction.type,
  };

  if (meta.potentialAction.type === "SearchAction") {
    const { target, query } = searchAction(meta.potentialAction);

    action.target = target;
    action["query-input"] = query;
  }

  return action;
};
