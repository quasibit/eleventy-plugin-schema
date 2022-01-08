"use strict";

/**
 * Person structured data. See https://schema.org/Person.
 *
 * @param {String|Object|Array} person Person name or object(s).
 * @param {String} person.name Name.
 * @returns {Object|undefined}
 */
module.exports = (person) => {
  if (!person) {
    return;
  }

  if (typeof person === "string") {
    return {
      "@type": "Person",
      name: person,
    };
  }

  if (Array.isArray(person)) {
    return person.map(module.exports);
  }

  return {
    "@type": "Person",
    name: person.name,
  };
};
