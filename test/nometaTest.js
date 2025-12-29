import test from "ava";
import script from "../src/script.js";
import parsedEqual from "../utils/parsedEqual.js";

test("no meta", (t) => {
  const meta = undefined;

  const expected = "";

  parsedEqual(t, script({ meta }), expected);
});