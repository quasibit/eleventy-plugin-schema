"use strict";

const test = require("ava");

const potentialAction = require("../src/potentialAction");
const parsedEqual = require("../utils/parsedEqual");

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
