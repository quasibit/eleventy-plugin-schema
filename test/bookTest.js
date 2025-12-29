import test from "ava";
import book from "../src/book.js";

test("book_basic", (t) => {
  const meta = {
    name: "The Great Gatsby",
    description: "A classic American novel",
    url: "https://example.com/book/gatsby",
    isbn: "978-0743273565",
    datePublished: "1925-04-10",
  };

  const result = book({ meta });

  t.is(result["@type"], "Book");
  t.is(result.name, "The Great Gatsby");
  t.is(result.description, "A classic American novel");
  t.is(result.url, "https://example.com/book/gatsby");
  t.is(result.isbn, "978-0743273565");
  t.is(result.datePublished, "1925-04-10");
});

test("book_with_author", (t) => {
  const meta = {
    name: "The Great Gatsby",
    author: {
      name: "F. Scott Fitzgerald",
    },
  };

  const result = book({ meta });

  t.deepEqual(result.author, {
    "@type": "Person",
    name: "F. Scott Fitzgerald",
  });
});

test("book_with_publisher", (t) => {
  const meta = {
    name: "The Great Gatsby",
    publisher: "Scribner",
  };

  const result = book({ meta });

  t.deepEqual(result.publisher, {
    "@type": "Organization",
    name: "Scribner",
  });
});

test("book_with_format_and_edition", (t) => {
  const meta = {
    name: "The Great Gatsby",
    bookFormat: "Hardcover",
    bookEdition: "First Edition",
    numberOfPages: 180,
    inLanguage: "en",
    genre: "Fiction",
  };

  const result = book({ meta });

  t.is(result.bookFormat, "https://schema.org/Hardcover");
  t.is(result.bookEdition, "First Edition");
  t.is(result.numberOfPages, 180);
  t.is(result.inLanguage, "en");
  t.is(result.genre, "Fiction");
});

test("book_with_rating", (t) => {
  const meta = {
    name: "The Great Gatsby",
    rating: {
      ratingValue: "4.5",
      ratingCount: "10000",
    },
  };

  const result = book({ meta });

  t.deepEqual(result.aggregateRating, {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    bestRating: undefined,
    worstRating: undefined,
    ratingCount: "10000",
    reviewCount: undefined,
  });
});

test("book_with_offers", (t) => {
  const meta = {
    name: "The Great Gatsby",
    offers: {
      price: "12.99",
      priceCurrency: "USD",
      availability: "InStock",
    },
  };

  const result = book({ meta });

  t.deepEqual(result.offers, {
    "@type": "Offer",
    price: "12.99",
    priceCurrency: "USD",
    availability: "InStock",
  });
});

test("book_with_readAction", (t) => {
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

  t.is(result.potentialAction.length, 1);
  t.is(result.potentialAction[0]["@type"], "ReadAction");
  t.is(
    result.potentialAction[0].target.urlTemplate,
    "https://example.com/read/gatsby",
  );
  t.deepEqual(result.potentialAction[0].expectsAcceptanceOf, {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    eligibleRegion: "US",
  });
});

test("book_returns_undefined_without_name", (t) => {
  const meta = {
    description: "A book without a name",
  };

  const result = book({ meta });

  t.is(result, undefined);
});
