import assert from "node:assert/strict";
import test from "node:test";
import book from "../src/book.js";

test("book_basic", () => {
  const meta = {
    name: "The Great Gatsby",
    description: "A classic American novel",
    url: "https://example.com/book/gatsby",
    isbn: "978-0743273565",
    datePublished: "1925-04-10",
  };

  const result = book({ meta });

  assert.strictEqual(result["@type"], "Book");
  assert.strictEqual(result.name, "The Great Gatsby");
  assert.strictEqual(result.description, "A classic American novel");
  assert.strictEqual(result.url, "https://example.com/book/gatsby");
  assert.strictEqual(result.isbn, "978-0743273565");
  assert.strictEqual(result.datePublished, "1925-04-10");
});

test("book_with_author", () => {
  const meta = {
    name: "The Great Gatsby",
    author: {
      name: "F. Scott Fitzgerald",
    },
  };

  const result = book({ meta });

  assert.deepStrictEqual(result.author, {
    "@type": "Person",
    name: "F. Scott Fitzgerald",
  });
});

test("book_with_publisher", () => {
  const meta = {
    name: "The Great Gatsby",
    publisher: "Scribner",
  };

  const result = book({ meta });

  assert.deepStrictEqual(result.publisher, {
    "@type": "Organization",
    name: "Scribner",
  });
});

test("book_with_format_and_edition", () => {
  const meta = {
    name: "The Great Gatsby",
    bookFormat: "Hardcover",
    bookEdition: "First Edition",
    numberOfPages: 180,
    inLanguage: "en",
    genre: "Fiction",
  };

  const result = book({ meta });

  assert.strictEqual(result.bookFormat, "https://schema.org/Hardcover");
  assert.strictEqual(result.bookEdition, "First Edition");
  assert.strictEqual(result.numberOfPages, 180);
  assert.strictEqual(result.inLanguage, "en");
  assert.strictEqual(result.genre, "Fiction");
});

test("book_with_rating", () => {
  const meta = {
    name: "The Great Gatsby",
    rating: {
      ratingValue: "4.5",
      ratingCount: "10000",
    },
  };

  const result = book({ meta });

  assert.deepStrictEqual(result.aggregateRating, {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    bestRating: undefined,
    worstRating: undefined,
    ratingCount: "10000",
    reviewCount: undefined,
  });
});

test("book_with_offers", () => {
  const meta = {
    name: "The Great Gatsby",
    offers: {
      price: "12.99",
      priceCurrency: "USD",
      availability: "InStock",
    },
  };

  const result = book({ meta });

  assert.deepStrictEqual(result.offers, {
    "@type": "Offer",
    price: "12.99",
    priceCurrency: "USD",
    availability: "InStock",
  });
});

test("book_with_readAction", () => {
  const meta = {
    name: "The Great Gatsby",
    readAction: [
      {
        urlTemplate: "https://example.com/read/gatsby",
        expectsAcceptanceOf: {
          price: "0",
          priceCurrency: "USD",
          eligibleRegion: "US",
        },
      },
    ],
  };

  const result = book({ meta });

  assert.strictEqual(result.potentialAction.length, 1);
  assert.strictEqual(result.potentialAction[0]["@type"], "ReadAction");
  assert.strictEqual(
    result.potentialAction[0].target.urlTemplate,
    "https://example.com/read/gatsby",
  );
  assert.deepStrictEqual(result.potentialAction[0].expectsAcceptanceOf, {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    eligibleRegion: "US",
  });
});

test("book_returns_undefined_without_name", () => {
  const meta = {
    description: "A book without a name",
  };

  const result = book({ meta });

  assert.strictEqual(result, undefined);
});
