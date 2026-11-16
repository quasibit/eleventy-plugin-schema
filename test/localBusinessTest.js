import assert from "node:assert/strict";
import test from "node:test";
import localBusiness from "../src/localBusiness.js";

test("localBusiness_basic", () => {
  const meta = {
    name: "Joe's Pizza",
    description: "Best pizza in town",
    url: "https://example.com",
    telephone: "+1-555-555-5555",
    priceRange: "$$",
  };

  const expected = {
    "@type": "LocalBusiness",
    name: meta.name,
    description: meta.description,
    url: meta.url,
    telephone: meta.telephone,
    priceRange: meta.priceRange,
  };

  assert.deepStrictEqual(localBusiness({ meta }), expected);
});

test("localBusiness_with_address", () => {
  const meta = {
    name: "Joe's Pizza",
    address: {
      streetAddress: "123 Main St",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10001",
      addressCountry: "US",
    },
  };

  const result = localBusiness({ meta });

  assert.deepStrictEqual(result.address, {
    "@type": "PostalAddress",
    streetAddress: "123 Main St",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10001",
    addressCountry: "US",
  });
});

test("localBusiness_with_geo", () => {
  const meta = {
    name: "Joe's Pizza",
    geo: {
      latitude: 40.7128,
      longitude: -74.006,
    },
  };

  const result = localBusiness({ meta });

  assert.deepStrictEqual(result.geo, {
    "@type": "GeoCoordinates",
    latitude: 40.7128,
    longitude: -74.006,
  });
});

test("localBusiness_with_openingHours", () => {
  const meta = {
    name: "Joe's Pizza",
    openingHours: [
      { dayOfWeek: "Monday", opens: "09:00", closes: "17:00" },
      { dayOfWeek: "Tuesday", opens: "09:00", closes: "17:00" },
    ],
  };

  const result = localBusiness({ meta });

  assert.deepStrictEqual(result.openingHoursSpecification, [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Monday",
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Tuesday",
      opens: "09:00",
      closes: "17:00",
    },
  ]);
});

test("localBusiness_with_businessType", () => {
  const meta = {
    name: "Joe's Pizza",
    businessType: "Restaurant",
  };

  const result = localBusiness({ meta });

  assert.strictEqual(result["@type"], "Restaurant");
});

test("localBusiness_returns_undefined_without_name", () => {
  const meta = {
    description: "A business without a name",
  };

  const result = localBusiness({ meta });

  assert.strictEqual(result, undefined);
});
