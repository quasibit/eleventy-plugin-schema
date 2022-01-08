"use strict";

const test = require("ava");

const image = require("../src/image");

test("image object", (t) => {
  const data = {
    src: "https://example.com/image.jpg",
    width: "2000",
    height: "2000",
  };
  const expected = {
    "@type": "ImageObject",
    url: data.src,
    width: data.width,
    height: data.height,
  };

  t.deepEqual(image(data), expected);
});

test("image string", (t) => {
  const url = "https://example.com/image.jpg";

  t.deepEqual(image(url), url);
});

test("image empty", (t) => {
  t.is(image(), undefined);
});
