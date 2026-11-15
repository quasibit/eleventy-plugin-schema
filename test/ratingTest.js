import assert from "node:assert/strict";
import test from "node:test";
import rating from "../src/rating.js";

test("rating", () => {
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

  assert.deepStrictEqual(rating(data), expected);
});

test("rating empty", () => {
  assert.strictEqual(rating(), undefined);
});
