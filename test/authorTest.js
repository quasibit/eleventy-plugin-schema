import assert from "node:assert/strict";
import test from "node:test";
import author from "../src/author.js";

const authorName = "First Last";
const expected = {
  "@type": "Person",
  name: "First Last",
};

test("author object", () => {
  const data = { name: authorName };

  assert.deepStrictEqual(author(data), expected);
});

test("author string", () => {
  assert.deepStrictEqual(author(authorName), expected);
});