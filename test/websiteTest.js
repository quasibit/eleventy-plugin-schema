import assert from "node:assert/strict";
import test from "node:test";
import website from "../src/website.js";

test("website", () => {
  const meta = {
    site: {
      url: "https://example.com",
      name: "Example",
      description: "Description",
    },

    language: "en-US",
  };
  const expected = {
    "@type": "WebSite",
    "@id": `${meta.site.url}#website`,
    url: meta.site.url,
    name: meta.site.name,
    description: meta.site.description,
    inLanguage: meta.language,
  };

  assert.deepStrictEqual(website({ meta }), expected);
});
