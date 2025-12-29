import image from "./image.js";
import author from "./author.js";
import rating from "./rating.js";
import review from "./review.js";
import offer from "./offer.js";

/**
 * Book structured data. See: https://schema.org/Book.
 * More info: https://jsonld.com/book/.
 *
 * @param {Object} param0 Context.
 * @param {Object} param0.meta Meta data.
 * @param {String} param0.meta.name Book title.
 * @param {String} param0.meta.description Book description.
 * @param {String} param0.meta.url Book URL.
 * @param {Object} param0.meta.image Book cover image.
 * @param {Object|String} param0.meta.author Book author.
 * @param {String} param0.meta.isbn ISBN number.
 * @param {String} param0.meta.publisher Publisher name.
 * @param {String} param0.meta.datePublished Publication date.
 * @param {String} param0.meta.bookFormat Format (e.g. "Hardcover", "Paperback", "EBook").
 * @param {String} param0.meta.bookEdition Book edition.
 * @param {Number} param0.meta.numberOfPages Number of pages.
 * @param {String} param0.meta.inLanguage Language code.
 * @param {String} param0.meta.genre Book genre.
 * @param {Object} param0.meta.rating Book rating.
 * @param {Array} param0.meta.reviews Book reviews.
 * @param {Object} param0.meta.offers Book purchase offers.
 * @param {Array} param0.meta.readAction Actions for reading the book.
 * @returns {Object}
 */
export default ({ meta }) => {
  if (!meta?.name) {
    return;
  }

  const book = {
    "@type": "Book",
    name: meta.name,
  };

  if (meta.description) {
    book.description = meta.description;
  }

  if (meta.url) {
    book.url = meta.url;
  }

  if (meta.image?.src) {
    book.image = image(meta.image);
  }

  if (meta.author) {
    book.author = author(meta.author);
  }

  if (meta.isbn) {
    book.isbn = meta.isbn;
  }

  if (meta.publisher) {
    book.publisher = {
      "@type": "Organization",
      name: meta.publisher,
    };
  }

  if (meta.datePublished) {
    book.datePublished = meta.datePublished;
  }

  if (meta.bookFormat) {
    book.bookFormat = `https://schema.org/${meta.bookFormat}`;
  }

  if (meta.bookEdition) {
    book.bookEdition = meta.bookEdition;
  }

  if (meta.numberOfPages) {
    book.numberOfPages = meta.numberOfPages;
  }

  if (meta.inLanguage) {
    book.inLanguage = meta.inLanguage;
  }

  if (meta.genre) {
    book.genre = meta.genre;
  }

  if (meta.rating) {
    book.aggregateRating = rating(meta.rating);
  }

  if (meta.reviews) {
    book.review = review(meta.reviews);
  }

  if (meta.offers) {
    book.offers = offer(meta.offers);
  }

  // ReadAction for where the book can be read (requested in issue #27)
  if (meta.readAction && Array.isArray(meta.readAction)) {
    book.potentialAction = meta.readAction.map((action) => {
      const readAction = {
        "@type": "ReadAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: action.urlTemplate || action.url,
          actionPlatform: action.actionPlatform || [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/AndroidPlatform",
            "http://schema.org/IOSPlatform",
          ],
        },
      };

      if (action.expectsAcceptanceOf) {
        readAction.expectsAcceptanceOf = {
          "@type": "Offer",
          price: action.expectsAcceptanceOf.price,
          priceCurrency: action.expectsAcceptanceOf.priceCurrency,
          eligibleRegion: action.expectsAcceptanceOf.eligibleRegion,
        };
      }

      return readAction;
    });
  }

  return book;
};
