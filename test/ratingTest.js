"use strict";

const test = require("ava");

const rating = require("../src/rating");

test("rating", (t) => {
  const data = {
    ratingValue: "4.2",
    bestRating: "5",
    worstRating: "0",
    ratingCount: "10",
    reviewCount: "10",
  };
  const expected = {
    "@type": "AggregateRating",
    ratingValue: data.ratingValue,
    bestRating: data.bestRating,
    worstRating: data.worstRating,
    ratingCount: data.ratingCount,
    reviewCount: data.reviewCount,
  };

  t.deepEqual(rating(data), expected);
});

test("rating empty", (t) => {
  t.is(rating(), undefined);
});
