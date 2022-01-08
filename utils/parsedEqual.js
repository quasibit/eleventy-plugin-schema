"use strict";

// eslint-disable-next-line id-length
module.exports = (t, first, second) =>
  t.deepEqual(JSON.parse(JSON.stringify(first)), second);
