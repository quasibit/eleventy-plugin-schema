"use strict";

const test = require("ava");

const author = require("../src/author");

const authorName = "First Last";
const expected = {
  "@type": "Person",
  name: "First Last",
};

test("author object", (t) => {
  const data = { name: authorName };

  t.deepEqual(author(data), expected);
});

test("author string", (t) => {
  t.deepEqual(author(authorName), expected);
});
