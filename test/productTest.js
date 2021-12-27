"use strict";

const test = require("ava");

const product = require("../src/product");

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

    author: {
      name: "First Last",
    },

    published: new Date("2020-07-03T06:43:21.123Z"),
    modified: new Date("2020-07-03T08:35:46.289Z"),

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
    category: "cars"

    offers: {
      price: "100"
    }
    rating: {
      ratingValue: "4.2"
    }
  };
  const tags = ["tag1", "tag2"];
  const expected = {
    "@type": "Product",
    keywords: tags.join(","),
    datePublished: meta.published,
    dateModified: meta.modified,

    offers: {
      "@type": "Offer"
      price: meta.offer.price
    },

    aggregateRating: {
      "@type": "AggregateRating"
      ratingValue: meta.rating.ratingValue
    },

    author: {
      "@type": "Person",
      name: meta.author.name,
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
    brand: meta.brand,
    manufacturer: meta.manufacturer,
    material: meta.material,
    productID: meta.productID,
    category: meta.category,

    url: meta.url,

    isPartOf: {
      "@id": `${meta.site.url}#website`,
    },

    headline: meta.title,
    description: meta.description,
    image: meta.image.src,
    inLanguage: meta.language,

    publisher: {
      "@type": "Organization",
      name: meta.site.name,
      url: meta.site.url,

      logo: {
        "@type": "ImageObject",
        url: meta.site.logo.src,
        width: meta.site.logo.width,
        height: meta.site.logo.height,
      },
    },
  };

  t.deepEqual(product({ meta, tags }), expected);
});
