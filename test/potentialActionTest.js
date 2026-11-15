import test from "node:test";
import potentialAction from "../src/potentialAction.js";
import parsedEqual from "../utils/parsedEqual.js";

test("potentialAction", () => {
  const meta = {
    potentialAction: {
      type: "SearchAction",
      url: "https://query.example.com/search?q={search_term_string}",
    },
  };
  const expected = {
    "@type": meta.potentialAction.type,

    target: {
      "@type": "EntryPoint",
      urlTemplate: meta.potentialAction.url,
    },

    "query-input": "required name=search_term_string",
  };

  parsedEqual(potentialAction({ meta }), expected);
});