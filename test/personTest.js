import assert from "node:assert/strict";
import test from "node:test";
import person from "../src/person.js";
import parsedEqual from "../utils/parsedEqual.js";

test("person string", () => {
  const name = "John Doe";
  const expected = {
    "@type": "Person",
    name,
  };

  parsedEqual(person(name), expected);
});

test("person object", () => {
  const personObject = { name: "John Doe" };
  const expected = {
    "@type": "Person",
    name: personObject.name,
  };

  parsedEqual(person(personObject), expected);
});

test("person array", () => {
  const collection = [{ name: "Patrick Coombe" }, { name: "you" }];
  const expected = [
    {
      "@type": "Person",
      name: collection[0].name,
    },

    {
      "@type": "Person",
      name: collection[1].name,
    },
  ];

  parsedEqual(person(collection), expected);
});
test("person empty", () => {
  assert.strictEqual(person(), undefined);
});