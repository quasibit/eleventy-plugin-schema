import videoList from "./videoList.js";

/**
 * Video structured data. See: https://schema.org/VideoObject.
 * More info https://jsonld.com/video/.
 *
 * @param {Object} param0 Context
 * @param {Array} param0.video Videos's.
 * @returns {Object|undefined}
 */
export default (video) => {
  if (!video) {
    return;
  }

  return video.map(videoList);
};