import test from "ava";
import techArticle from "../src/techArticle.js";

test("techArticle", (t) => {
  const meta = {
    site: {
      url: "https://example.com",
      name: "Example Docs",

      logo: {
        src: "https://example.com/logo.png",
        width: "2000",
        height: "2000",
      },
    },

    language: "en-US",
    url: "https://example.com/docs/getting-started",
    title: "Getting Started Guide",
    description: "Learn how to set up the project",

    image: {
      src: "https://example.com/image.jpg",
    },

    author: {
      name: "Tech Writer",
    },

    published: new Date("2024-01-15T10:00:00.000Z"),
    modified: new Date("2024-06-20T14:30:00.000Z"),
    section: "Documentation",
  };
  const tags = ["tutorial", "setup"];
  const expected = {
    "@type": "TechArticle",
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

  t.deepEqual(techArticle({ meta, tags }), expected);
});

test("techArticle_with_proficiencyLevel", (t) => {
  const meta = {
    site: {
      url: "https://example.com",
      name: "Example Docs",

      logo: {
        src: "https://example.com/logo.png",
        width: "2000",
        height: "2000",
      },
    },

    language: "en-US",
    url: "https://example.com/docs/advanced",
    title: "Advanced Configuration",
    description: "Advanced setup guide",

    image: {
      src: "https://example.com/image.jpg",
    },

    author: {
      name: "Tech Writer",
    },

    proficiencyLevel: "Expert",
  };

  const result = techArticle({ meta });

  t.is(result.proficiencyLevel, "Expert");
});

test("techArticle_with_dependencies", (t) => {
  const meta = {
    site: {
      url: "https://example.com",
      name: "Example Docs",

      logo: {
        src: "https://example.com/logo.png",
        width: "2000",
        height: "2000",
      },
    },

    language: "en-US",
    url: "https://example.com/docs/api",
    title: "API Reference",
    description: "Complete API documentation",

    image: {
      src: "https://example.com/image.jpg",
    },

    author: {
      name: "Tech Writer",
    },

    dependencies: "Node.js 18+, npm 9+",
  };

  const result = techArticle({ meta });

  t.is(result.dependencies, "Node.js 18+, npm 9+");
});

test("techArticle_with_array_dependencies", (t) => {
  const meta = {
    site: {
      url: "https://example.com",
      name: "Example Docs",

      logo: {
        src: "https://example.com/logo.png",
        width: "2000",
        height: "2000",
      },
    },

    language: "en-US",
    url: "https://example.com/docs/api",
    title: "API Reference",
    description: "Complete API documentation",

    image: {
      src: "https://example.com/image.jpg",
    },

    author: {
      name: "Tech Writer",
    },

    dependencies: ["Node.js 18+", "npm 9+", "Git"],
  };

  const result = techArticle({ meta });

  t.deepEqual(result.dependencies, ["Node.js 18+", "npm 9+", "Git"]);
});
