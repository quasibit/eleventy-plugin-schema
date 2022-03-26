"use strict";

const test = require("ava");

const post = require("../src/post");

test("post", (t) => {
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

    author: {
      name: "First Last",
    },

    published: new Date("2020-07-03T06:43:21.123Z"),
    modified: new Date("2020-07-03T08:35:46.289Z"),
    section: "Something",
  };
  const tags = ["tag1", "tag2"];
  const expected = {
    "@type": "BlogPosting",
    keywords: tags.join(","),
    datePublished: meta.published,
    dateModified: meta.modified,
    articleSection: meta.section,

    author: {
      "@type": "Person",
      name: meta.author.name,
    },

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

  t.deepEqual(post({ meta, tags }), expected);
});

test("post_keywords", (t) => {
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

    keywords: ["something", "something else"],

    language: "en-US",
    url: "https://example.com/page",
    title: "Page",
    description: "Description",

    image: {
      src: "https://example.com/image.jpg",
    },

    author: {
      name: "First Last",
    },

    published: new Date("2020-07-03T06:43:21.123Z"),
    modified: new Date("2020-07-03T08:35:46.289Z"),
    section: "Something",
  };
  const expected = {
    "@type": "BlogPosting",
    keywords: meta.keywords.join(","),
    datePublished: meta.published,
    dateModified: meta.modified,
    articleSection: meta.section,

    author: {
      "@type": "Person",
      name: meta.author.name,
    },

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

  t.deepEqual(post({ meta }), expected);
});
