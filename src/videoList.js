"use strict";

const image = require("./image");
const person = require("./person");

/**
 * mainEntity FAQ List structured data. See: https://schema.org/mainEntity.
 *
 * @param {Object} item List item.
 * @param {String} item.name Name of video.
 * @param {String} item.datePublished First broadcast date.
 * @param {String} item.description Description of video.
 * @param {String} item.caption Video caption text.
 * @param {String} item.thumbnailUrl Url to thumnail image.
 * @param {Object} item.thumbnail Thumbnail image object.
 * @param {String} item.duration Duration of video in ISO 8601 date format.
 * @param {String} item.uploadDate Date video was uploaded to site.
 * @param {String} item.embedUrl SRC url to video.
 * @param {String} item.contentUrl Link to video bytes.
 * @param {String} item.contentRating Video content rating, ex MPAA PG-13.
 * @param {String} item.dateCreated Date video was added to feed.
 * @param {Object} item.author Video author.
 * @param {String} item.dateModified Date video was modified.
 * @param {String} item.keywords Video topic list.
 * @param {String} item.teaches Learning outcome of video.
 * @param {String} item.typicalAgeRange Video age range, ex 11+.
 * @returns {Object|undefined}
 */

module.exports = (item) => {
  if (!item) {
    return;
  }

  return {
    "@type": "VideoObject",
    name: item.name,
    datePublished: item.datePublished,
    description: item.description,
    caption: item.caption,
    thumbnailUrl: item.thumbnailUrl,
    thumbnail: image(item.thumbnail),
    duration: item.duration,
    uploadDate: item.uploadDate,
    embedUrl: item.embedUrl,
    contentUrl: item.contentUrl,
    contentRating: item.contentRating,
    dateCreated: item.dateCreated,
    author: person(item.author),
    dateModified: item.dateModified,
    keywords: item.keywords,
    teaches: item.teaches,
    typicalAgeRange: item.typicalAgeRange,
  };
};
