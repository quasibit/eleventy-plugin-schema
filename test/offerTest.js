"use strict";

const test = require("ava");

const offer = require("../src/offer");

test("offer", (t) => {
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

  t.deepEqual(offer(data), expected);
});

test("offer empty", (t) => {
  t.is(offer(), undefined);
});
