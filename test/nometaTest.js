import test from "node:test";
import script from "../src/script.js";
import parsedEqual from "../utils/parsedEqual.js";

test("no meta", () => {
  const meta = undefined;

  const expected = "";

  parsedEqual(script({ meta }), expected);
});