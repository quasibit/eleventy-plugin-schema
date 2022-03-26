"use strict";

const test = require("ava");

const page = require("../src/page");

test("page", (t) => {
  const meta = {
    site: {
      url: "https://example.com",
      name: "Example",

      logo: {
        src: "https://example.com/logo.png",
        width: "2000",
        height: "2000",
      },
    },

    language: "en-US",
    url: "https://example.com/page",
    title: "Page",
    description: "Description",

    image: {
      src: "https://example.com/image.jpg",
    },
  };
  const expected = {
    "@type": "WebPage",

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": meta.url,
    },

    url: meta.url,

    isPartOf: {
      "@id": `${meta.site.url}#website`,
    },

    headline: meta.title,
    description: meta.description,
    image: meta.image.src,
    inLanguage: meta.language,

    publisher: {
      "@type": "Organization",
      name: meta.site.name,
      url: `${meta.site.url}#organization`,

      logo: {
        "@type": "ImageObject",
        url: meta.site.logo.src,
        width: meta.site.logo.width,
        height: meta.site.logo.height,
      },
    },
  };

  t.deepEqual(page({ meta }), expected);
});
