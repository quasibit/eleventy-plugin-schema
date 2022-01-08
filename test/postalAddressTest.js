"use strict";

const test = require("ava");

const postalAddress = require("../src/postalAddress");
const parsedEqual = require("../utils/parsedEqual");

test("postalAddress", (t) => {
  const address = {
    streetAddress: "900 Linton Blvd Suite 104",
    addressLocality: "Delray Beach",
    addressRegion: "FL",
    postalCode: "33444",
    addressCountry: "USA",
  };
  const expected = {
    "@type": "PostalAddress",
    streetAddress: address.streetAddress,
    addressLocality: address.addressLocality,
    addressRegion: address.addressRegion,
    postalCode: address.postalCode,
    addressCountry: address.addressCountry,
  };

  parsedEqual(t, postalAddress(address), expected);
});

test("postalAddress empty", (t) => {
  t.is(postalAddress(), undefined);
});
