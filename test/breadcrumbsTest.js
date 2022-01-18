"use strict";

const test = require("ava");

const breadcrumb = require("../src/breadcrumbs");
const parsedEqual = require("../utils/parsedEqual");

test("breadcrumb single", (t) => {
  const meta = {
    breadcrumbs: [
      {
        name: "Home",
        url: "https://schema.org",
        position: 1,
        image: "https://example.com/path/to/image.png",
      },
      {
        name: "Contact",
        url: "https://schema.org/contact",
      },
      {
        name: "About",
        url: "https://schema.org/About",
      },
    ],
  };

  const expected = {
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: meta.breadcrumbs[0].position,

        item: {
          "@id": meta.breadcrumbs[0].url,
          name: meta.breadcrumbs[0].name,
          image: meta.breadcrumbs[0].image,
        },
      },

      {
        "@type": "ListItem",

        item: {
          "@id": meta.breadcrumbs[1].url,
          name: meta.breadcrumbs[1].name,
        },
      },

      {
        "@type": "ListItem",

        item: {
          // eslint-disable-next-line no-magic-numbers
          "@id": meta.breadcrumbs[2].url,
          // eslint-disable-next-line no-magic-numbers
          name: meta.breadcrumbs[2].name,
        },
      },
    ],
  };

  parsedEqual(t, breadcrumb({ meta }), expected);
});
