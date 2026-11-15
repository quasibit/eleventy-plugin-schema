import assert from "node:assert/strict";
import test from "node:test";
import offer from "../src/offer.js";

test("offer", () => {
  const data = {
    priceCurrency: "USD",
    price: "20.00",
    priceValidUntil: "01/01/2000",
    availability: "https://schema.org/InStock",
    availabilityStarts: "01/01/2000",
    availabilityEnds: "01/01/2000",
    itemCondition: "https://schema.org/NewCondition",
  };
  const expected = {
    "@type": "Offer",
    priceCurrency: data.priceCurrency,
    price: data.price,
    priceValidUntil: data.priceValidUntil,
    availability: data.availability,
    availabilityStarts: data.availabilityStarts,
    availabilityEnds: data.availabilityEnds,
    itemCondition: data.itemCondition,
  };

  assert.deepStrictEqual(offer(data), expected);
});

test("offer empty", () => {
  assert.strictEqual(offer(), undefined);
});