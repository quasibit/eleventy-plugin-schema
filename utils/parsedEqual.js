import assert from "node:assert/strict";

export default (first, second) =>
  assert.deepStrictEqual(JSON.parse(JSON.stringify(first)), second);
