"use strict";

const test = require("ava");

const listItem = require("../src/listItem");
const parsedEqual = require("../utils/parsedEqual");

test("product", (t) => {
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

  parsedEqual(t, listItem(item), expected);
});

test("listItem empty", (t) => {
  t.is(listItem(), undefined);
});
