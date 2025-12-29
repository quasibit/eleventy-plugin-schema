/**
 * Author structured data. See https://schema.org/Person.
 *
 * @param {Object|String} author Author properties.
 * @param {String} author.name Author name.
 * @returns {Object|undefined}
 */
export default (author) => {
  if (!author) {
    return;
  }

  const isAuthorObject = typeof author === "object" && "name" in author;

  return {
    "@type": "Person",
    name: isAuthorObject ? author.name : author,
  };
};