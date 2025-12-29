import test from "ava";
import potentialAction from "../src/potentialAction.js";
import parsedEqual from "../utils/parsedEqual.js";

test("potentialAction", (t) => {
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

  parsedEqual(t, potentialAction({ meta }), expected);
});