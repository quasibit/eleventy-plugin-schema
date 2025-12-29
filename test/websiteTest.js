import test from "ava";
import website from "../src/website.js";

test("website", (t) => {
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

  t.deepEqual(website({ meta }), expected);
});
