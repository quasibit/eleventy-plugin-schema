import assert from "node:assert/strict";
import test from "node:test";
import image from "../src/image.js";

test("image object", () => {
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

  assert.deepStrictEqual(image(data), expected);
});

test("image string", () => {
  const url = "https://example.com/image.jpg";

  assert.deepStrictEqual(image(url), url);
});

test("image empty", () => {
  assert.strictEqual(image(), undefined);
});