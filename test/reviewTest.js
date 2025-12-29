import test from "ava";
import review from "../src/review.js";
import parsedEqual from "../utils/parsedEqual.js";

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
        ratingValue: reviews[2].rating,
      },

      name: reviews[2].name,

      author: {
        "@type": "Person",
        name: reviews[2].author,
      },

      datePublished: reviews[2].date,
    },
  ];

  parsedEqual(t, review(reviews), expected);
});
