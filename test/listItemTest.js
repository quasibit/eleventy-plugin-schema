import assert from "node:assert/strict";
import test from "node:test";
import listItem from "../src/listItem.js";
import parsedEqual from "../utils/parsedEqual.js";

test("product", () => {
  const item = {
    name: "Home",
    url: "https://schema.org",
    position: 1,
    image: "/path/to/image.png",
  };

  const expected = {
    "@type": "ListItem",
    position: item.position,

    item: {
      "@id": item.url,
      name: item.name,
      image: item.image,
    },
  };

  parsedEqual(listItem(item), expected);
});

test("listItem empty", () => {
  assert.strictEqual(listItem(), undefined);
});