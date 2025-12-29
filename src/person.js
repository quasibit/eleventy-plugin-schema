/**
 * Person structured data. See https://schema.org/Person.
 *
 * @param {String|Object|Array} person Person name or object(s).
 * @param {String} person.name Name.
 * @returns {Object|undefined}
 */
const personFn = (person) => {
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
    return person.map(personFn);
  }

  return {
    "@type": "Person",
    name: person.name,
  };
};

export default personFn;