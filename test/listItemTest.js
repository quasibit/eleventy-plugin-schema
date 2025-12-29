import test from "ava";
import listItem from "../src/listItem.js";
import parsedEqual from "../utils/parsedEqual.js";

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