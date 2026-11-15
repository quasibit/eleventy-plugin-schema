import assert from "node:assert/strict";
import test from "node:test";
import postalAddress from "../src/postalAddress.js";
import parsedEqual from "../utils/parsedEqual.js";

test("postalAddress", () => {
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

  parsedEqual(postalAddress(address), expected);
});

test("postalAddress empty", () => {
  assert.strictEqual(postalAddress(), undefined);
});