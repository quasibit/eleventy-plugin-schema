"use strict";

const test = require("ava");

const faq = require("../src/faq");
const parsedEqual = require("../utils/parsedEqual");

test("faq single", (t) => {
  const meta = {
    faq: [
      {
        question: "How old are you?",
        answer: "12",
      },
      {
        question: "What is your name?",
        answer: "<p>Joe</p>",
      },
      {
        question: "What of it?",
        answer: "Not much.",
      },
    ],
  };

  const expected = {
    "@type": "FAQPage",

    mainEntity: [
      {
        "@type": "Question",
        name: meta.faq[0].question,

        acceptedAnswer: {
          "@type": "Answer",
          text: meta.faq[0].answer,
        },
      },

      {
        "@type": "Question",
        name: meta.faq[1].question,

        acceptedAnswer: {
          "@type": "Answer",
          text: meta.faq[1].answer,
        },
      },

      {
        "@type": "Question",
        // eslint-disable-next-line no-magic-numbers
        name: meta.faq[2].question,

        acceptedAnswer: {
          "@type": "Answer",
          // eslint-disable-next-line no-magic-numbers
          text: meta.faq[2].answer,
        },
      },
    ],
  };

  parsedEqual(t, faq({ meta }), expected);
});
