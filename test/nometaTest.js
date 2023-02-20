"use strict";

const test = require("ava");

const script = require("../src/script");
const parsedEqual = require("../utils/parsedEqual");

test("no meta", (t) => {
  const meta = undefined;

  const expected = "";

  parsedEqual(t, script({ meta }), expected);
});
