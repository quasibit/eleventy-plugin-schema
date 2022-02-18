"use strict";

const test = require("ava");

const video = require("../src/video");
const parsedEqual = require("../utils/parsedEqual");

test("video single", (t) => {
  const metaVideo = [
    {
      name: "Funny Cat Poses 2.0",

      description:
        "A short description of your video, we'd keep it at 140 characters just to be safe.",

      thumbnailUrl: "http://www.example.com/thumbnail.jpg",

      uploadDate: "2015-04-05T08:00:00+02:00",
      duration: "PT1M33S",
      contentUrl: "http://www.example.com/movie.mov",
      embedUrl: "http://www.example.com/embed?videoetc",
    },
    {
      name: " nice vid",
      datePublished: "2015-04-05T08:00:00+02:00",
      description: "Some nice description",
      caption: "Some nice caption",
      thumbnailUrl: "https://no.where/png",

      thumbnail: {
        src: "https://no.where/png",
        width: "100px",
        height: "100px",
      },

      duration: "P1Y2M10DT2H30M",
      uploadDate: "2015-04-05T08:00:00+02:00",
      embedUrl: "https://no.where",
      contentRating: "PG",
      dateCreated: "2015-04-05T08:00:00+02:00",

      author: { name: "Mr Cool" },

      dateModified: "2015-04-05T08:00:00+02:00",
      keywords: "just,an,amazing,vid",
      teaches: "pretty much nothing",
      typicalAgeRange: "99-100",
    },
  ];

  const expected = [
    {
      "@type": "VideoObject",
      name: metaVideo[0].name,
      description: metaVideo[0].description,
      thumbnailUrl: metaVideo[0].thumbnailUrl,
      uploadDate: metaVideo[0].uploadDate,
      duration: metaVideo[0].duration,
      contentUrl: metaVideo[0].contentUrl,
      embedUrl: metaVideo[0].embedUrl,
    },

    {
      "@type": "VideoObject",
      name: metaVideo[1].name,
      datePublished: metaVideo[1].datePublished,
      description: metaVideo[1].description,
      caption: metaVideo[1].caption,
      thumbnailUrl: metaVideo[1].thumbnailUrl,

      thumbnail: {
        "@type": "ImageObject",
        url: metaVideo[1].thumbnail.src,
        width: metaVideo[1].thumbnail.width,
        height: metaVideo[1].thumbnail.height,
      },

      duration: metaVideo[1].duration,
      uploadDate: metaVideo[1].uploadDate,
      embedUrl: metaVideo[1].embedUrl,
      contentRating: metaVideo[1].contentRating,
      dateCreated: metaVideo[1].dateCreated,

      author: { "@type": "Person", name: metaVideo[1].author.name },

      dateModified: metaVideo[1].dateModified,
      keywords: metaVideo[1].keywords,
      teaches: metaVideo[1].teaches,
      typicalAgeRange: metaVideo[1].typicalAgeRange,
    },
  ];

  parsedEqual(t, video(metaVideo), expected);
});
