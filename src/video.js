"use strict";

const videoList = require("./videoList");

/**
 * Video structured data. See: https://schema.org/VideoObject.
 * More info https://jsonld.com/video/.
 *
 * @param {Object} param0 Context
 * @param {Array} param0.video Videos's.
 * @returns {Object|undefined}
 */
module.exports = (video) => {
  if (!video) {
    return;
  }

  return video.map(videoList);
};
