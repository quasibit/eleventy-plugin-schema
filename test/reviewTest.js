"use strict";

const test = require("ava");

const review = require("../src/review");
const parsedEqual = require("../utils/parsedEqual");

test("review", (t) => {
  const reviews = [
    {
      name: "great product",
      date: "yesterday",
      review: "this product is amazing",
      rating: 5,
      author: "mr president",
      publisher: "the Whitehouse",
    },
    {
      name: "another great product",
      review: "this product is even more amazing",
    },
    {
      name: "great product",
      date: "yesterday",
      rating: 5,
      author: "mr president",
    },
  ];

  const expected = [
    {
      "@type": "Review",

      reviewRating: {
        "@type": "Rating",
        ratingValue: reviews[0].rating,
      },

      name: reviews[0].name,

      author: {
        "@type": "Person",
        name: reviews[0].author,
      },

      datePublished: reviews[0].date,
      reviewBody: reviews[0].review,

      publisher: {
        "@type": "Organization",
        name: reviews[0].publisher,
      },
    },
    {
      "@type": "Review",
      name: reviews[1].name,
      reviewBody: reviews[1].review,
    },
    {
      "@type": "Review",

      reviewRating: {
        "@type": "Rating",
        // eslint-disable-next-line no-magic-numbers
        ratingValue: reviews[2].rating,
      },

      // eslint-disable-next-line no-magic-numbers
      name: reviews[2].name,

      author: {
        "@type": "Person",
        // eslint-disable-next-line no-magic-numbers
        name: reviews[2].author,
      },

      // eslint-disable-next-line no-magic-numbers
      datePublished: reviews[2].date,
    },
  ];

  parsedEqual(t, review(reviews), expected);
});
