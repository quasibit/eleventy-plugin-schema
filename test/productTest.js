"use strict";

const test = require("ava");

const product = require("../src/product");
const parsedEqual = require("../utils/parsedEqual");

test("product", (t) => {
  const meta = {
    site: {
      url: "https://example.com",
      name: "Example",

      logo: {
        src: "https://example.com/logo.png",
        width: "2000",
        height: "2000",
      },
    },

    language: "en-US",
    url: "https://example.com/page",
    title: "Page",
    description: "Description",

    image: {
      src: "https://example.com/image.jpg",
    },

    gtin: "1",
    gtin12: "1",
    gtin13: "1",
    gtin14: "1",
    gtin8: "1",
    sku: "1",
    mpn: "1",
    countryOfOrigin: "USA",
    color: "Red",
    brand: "Pear",
    manufacturer: "Pear",
    material: "Plastic",
    productID: "ISBN:1",
    category: "cars",

    offers: {
      price: "100",
    },

    rating: {
      ratingValue: "4.2",
    },

    name: "something cool",
  };
  const tags = ["tag1", "tag2"];
  const expected = {
    "@type": "Product",
    name: meta.name,

    offers: {
      "@type": "Offer",
      price: meta.offers.price,
    },

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: meta.rating.ratingValue,
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": meta.url,
    },

    gtin: meta.gtin,
    gtin12: meta.gtin12,
    gtin13: meta.gtin13,
    gtin14: meta.gtin14,
    gtin8: meta.gtin8,
    sku: meta.sku,
    mpn: meta.mpn,
    countryOfOrigin: meta.countryOfOrigin,
    color: meta.color,

    brand: {
      "@type": "Brand",
      name: meta.brand,
    },

    manufacturer: {
      "@type": "Organization",
      name: meta.manufacturer,
    },

    material: meta.material,
    productID: meta.productID,
    category: meta.category,

    url: meta.url,

    description: meta.description,
    image: meta.image.src,
  };

  parsedEqual(t, product({ meta, tags }), expected);
});
