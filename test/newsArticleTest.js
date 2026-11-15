import assert from "node:assert/strict";
import test from "node:test";
import newsArticle from "../src/newsArticle.js";

test("newsArticle", () => {
  const meta = {
    site: {
      url: "https://example.com",
      name: "Example News",

      logo: {
        src: "https://example.com/logo.png",
        width: "2000",
        height: "2000",
      },
    },

    language: "en-US",
    url: "https://example.com/article",
    title: "Breaking News Story",
    description: "Important news description",

    image: {
      src: "https://example.com/image.jpg",
    },

    author: {
      name: "Jane Reporter",
    },

    published: new Date("2020-07-03T06:43:21.123Z"),
    modified: new Date("2020-07-03T08:35:46.289Z"),
    section: "Politics",
  };
  const tags = ["news", "politics"];
  const expected = {
    "@type": "NewsArticle",
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

  assert.deepStrictEqual(newsArticle({ meta, tags }), expected);
});

test("newsArticle_with_print_info", () => {
  const meta = {
    site: {
      url: "https://example.com",
      name: "Example News",

      logo: {
        src: "https://example.com/logo.png",
        width: "2000",
        height: "2000",
      },
    },

    language: "en-US",
    url: "https://example.com/article",
    title: "Breaking News Story",
    description: "Important news description",

    image: {
      src: "https://example.com/image.jpg",
    },

    author: {
      name: "Jane Reporter",
    },

    dateline: "NEW YORK",
    printEdition: "Morning Edition",
    printPage: "A1",
    printSection: "Front Page",
  };

  const result = newsArticle({ meta });

  assert.strictEqual(result.dateline, "NEW YORK");
  assert.strictEqual(result.printEdition, "Morning Edition");
  assert.strictEqual(result.printPage, "A1");
  assert.strictEqual(result.printSection, "Front Page");
});

test("newsArticle_with_wordCount", () => {
  const meta = {
    site: {
      url: "https://example.com",
      name: "Example News",

      logo: {
        src: "https://example.com/logo.png",
        width: "2000",
        height: "2000",
      },
    },

    language: "en-US",
    url: "https://example.com/article",
    title: "Breaking News Story",
    description: "Important news description",

    image: {
      src: "https://example.com/image.jpg",
    },

    author: {
      name: "Jane Reporter",
    },

    wordCount: 2500,
  };

  const result = newsArticle({ meta });

  assert.strictEqual(result.wordCount, 2500);
});
