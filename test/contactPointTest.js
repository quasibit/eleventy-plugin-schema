"use strict";

const test = require("ava");

const contactPoint = require("../src/contactPoint");
const parsedEqual = require("../utils/parsedEqual");

test("contactPoint single", (t) => {
  const contact = {
    telephone: "+1-888-888-9999",
    contactType: "customer service",
    contactOption: "TollFree",
    areaServed: "US",
    url: "http://mychat",
  };
  const expected = {
    "@type": "ContactPoint",
    telephone: contact.telephone,
    contactType: contact.contactType,
    contactOption: contact.contactOption,
    areaServed: contact.areaServed,
    url: contact.url,
  };

  parsedEqual(t, contactPoint(contact), expected);
});

test("contactPoint array", (t) => {
  const contacts = [
    {
      telephone: "+1-888-888-9999",
      contactType: "customer service",
      contactOption: "TollFree",
      areaServed: "US",
    },
    {
      telephone: "+1-888-888-9998",
      contactType: "Sales",
    },
  ];
  const expected = [
    {
      "@type": "ContactPoint",
      telephone: contacts[0].telephone,
      contactType: contacts[0].contactType,
      contactOption: contacts[0].contactOption,
      areaServed: contacts[0].areaServed,
    },
    {
      "@type": "ContactPoint",
      telephone: contacts[1].telephone,
      contactType: contacts[1].contactType,
    },
  ];

  parsedEqual(t, contactPoint(contacts), expected);
});

test("contactPoint empty", (t) => {
  t.is(contactPoint(), undefined);
});
