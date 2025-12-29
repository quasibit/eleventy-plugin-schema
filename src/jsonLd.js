import main from "./main.js";

/**
 * Structured data JSON-LD.
 *
 * @param {Object} param0 Parameters
 * @param {Object} param0.meta Meta data.
 * @param {String} param0.type Type of content ("page" or "post").
 * @param {String[]} param0.tags (Optional) Tags.
 * @returns {String}
 */
export default ({ meta, type, tags = [] }) => {
  if (!meta) {
    return "";
  }

  const json = main({ meta, type, tags });
  const spaces = 2;

  return JSON.stringify(
    json,
    (key, value) =>
      Array.isArray(value)
        ? value.filter((element) => element !== null && element !== undefined)
        : value,
    spaces
  );
};