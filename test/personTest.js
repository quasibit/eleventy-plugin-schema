import test from "ava";
import person from "../src/person.js";
import parsedEqual from "../utils/parsedEqual.js";

test("person string", (t) => {
  const name = "John Doe";
  const expected = {
    "@type": "Person",
    name,
  };

  parsedEqual(t, person(name), expected);
});

test("person object", (t) => {
  const personObject = { name: "John Doe" };
  const expected = {
    "@type": "Person",
    name: personObject.name,
  };

  parsedEqual(t, person(personObject), expected);
});

test("person array", (t) => {
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

  parsedEqual(t, person(collection), expected);
});
test("person empty", (t) => {
  t.is(person(), undefined);
});