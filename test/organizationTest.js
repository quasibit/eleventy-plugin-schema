"use strict";

const test = require("ava");

const organization = require("../src/organization");
const parsedEqual = require("../utils/parsedEqual");

test("organization", (t) => {
  const meta = {
    organization: {
      name: "Elite Strategies",
      legalName: "Elite Strategies Llc",
      url: "http://www.elite-strategies.com",
      logo: "http://cdn.elite-strategies.com/wp-content/uploads/2013/04/elitestrategies.png",
      description: "Mailjet SAS is an all-in-one Email Services Provider",
      foundingDate: "2009",
      founders: [{ name: "Patrick Coombe" }, { name: "you" }],

      address: {
        streetAddress: "900 Linton Blvd Suite 104",
        addressLocality: "Delray Beach",
        addressRegion: "FL",
        postalCode: "33444",
        addressCountry: "USA",
      },

      contactPoint: [
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
        {
          telephone: "+1-888-888-9997",
          contactType: "technical support",
          contactOption: "TollFree",
          areaServed: "US",
          availableLanguage: ["English", "French"],
        },
        {
          telephone: "+1-888-888-9997",
          contactType: "bill payment",
          contactOption: "TollFree",
          areaServed: ["US", "GB"],
        },
      ],

      sameAs: [
        "http://www.freebase.com/m/0_h96pq",
        "http://www.facebook.com/elitestrategies",
        "http://www.twitter.com/delraybeachseo",
        "http://pinterest.com/elitestrategies/",
        "http://elitestrategies.tumblr.com/",
        "http://www.linkedin.com/company/elite-strategies",
        "https://plus.google.com/106661773120082093538",
      ],
    },
  };
  const expected = {
    "@type": "Organization",
    "@id": `${meta.organization.url}#organization`,
    name: meta.organization.name,
    legalName: meta.organization.legalName,
    url: meta.organization.url,
    logo: meta.organization.logo,
    description: meta.organization.description,
    foundingDate: meta.organization.foundingDate,

    founders: [
      {
        "@type": "Person",
        name: meta.organization.founders[0].name,
      },

      {
        "@type": "Person",
        name: meta.organization.founders[1].name,
      },
    ],

    address: {
      "@type": "PostalAddress",
      streetAddress: meta.organization.address.streetAddress,
      addressLocality: meta.organization.address.addressLocality,
      addressRegion: meta.organization.address.addressRegion,
      postalCode: meta.organization.address.postalCode,
      addressCountry: meta.organization.address.addressCountry,
    },

    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: meta.organization.contactPoint[0].telephone,
        contactType: meta.organization.contactPoint[0].contactType,
        contactOption: meta.organization.contactPoint[0].contactOption,
        areaServed: meta.organization.contactPoint[0].areaServed,
      },
      {
        "@type": "ContactPoint",
        telephone: meta.organization.contactPoint[1].telephone,
        contactType: meta.organization.contactPoint[1].contactType,
      },
      {
        "@type": "ContactPoint",
        // eslint-disable-next-line no-magic-numbers
        telephone: meta.organization.contactPoint[2].telephone,
        // eslint-disable-next-line no-magic-numbers
        contactType: meta.organization.contactPoint[2].contactType,
        // eslint-disable-next-line no-magic-numbers
        contactOption: meta.organization.contactPoint[2].contactOption,
        // eslint-disable-next-line no-magic-numbers
        areaServed: meta.organization.contactPoint[2].areaServed,
        // eslint-disable-next-line no-magic-numbers
        availableLanguage: meta.organization.contactPoint[2].availableLanguage,
      },
      {
        "@type": "ContactPoint",
        // eslint-disable-next-line no-magic-numbers
        telephone: meta.organization.contactPoint[3].telephone,
        // eslint-disable-next-line no-magic-numbers
        contactType: meta.organization.contactPoint[3].contactType,
        // eslint-disable-next-line no-magic-numbers
        contactOption: meta.organization.contactPoint[3].contactOption,
        // eslint-disable-next-line no-magic-numbers
        areaServed: meta.organization.contactPoint[3].areaServed,
      },
    ],

    sameAs: meta.organization.sameAs,
  };

  parsedEqual(t, organization({ meta }), expected);
});

test("small_organization", (t) => {
  const meta = {
    organization: {
      name: "Elite Strategies",
      legalName: "Elite Strategies Llc",
      url: "http://www.elite-strategies.com",
      logo: "http://cdn.elite-strategies.com/wp-content/uploads/2013/04/elitestrategies.png",
      description: "Mailjet SAS is an all-in-one Email Services Provider",

      address: {
        streetAddress: "900 Linton Blvd Suite 104",
        addressLocality: "Delray Beach",
        addressRegion: "FL",
        postalCode: "33444",
        addressCountry: "USA",
      },

      contactPoint: [
        {
          telephone: "+1-888-888-9999",
          contactType: "customer service",
          contactOption: "TollFree",
          areaServed: "US",
        },
      ],

      sameAs: "http://www.freebase.com/m/0_h96pq",
    },
  };
  const expected = {
    "@type": "Organization",
    "@id": `${meta.organization.url}#organization`,
    name: meta.organization.name,
    legalName: meta.organization.legalName,
    url: meta.organization.url,
    logo: meta.organization.logo,
    description: meta.organization.description,

    address: {
      "@type": "PostalAddress",
      streetAddress: meta.organization.address.streetAddress,
      addressLocality: meta.organization.address.addressLocality,
      addressRegion: meta.organization.address.addressRegion,
      postalCode: meta.organization.address.postalCode,
      addressCountry: meta.organization.address.addressCountry,
    },

    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: meta.organization.contactPoint[0].telephone,
        contactType: meta.organization.contactPoint[0].contactType,
        contactOption: meta.organization.contactPoint[0].contactOption,
        areaServed: meta.organization.contactPoint[0].areaServed,
      },
    ],

    sameAs: meta.organization.sameAs,
  };

  parsedEqual(t, organization({ meta }), expected);
});
