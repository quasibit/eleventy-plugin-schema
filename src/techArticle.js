import page from "./page.js";
import author from "./author.js";

/**
 * TechArticle structured data. See: https://schema.org/TechArticle.
 * For technical documentation, tutorials, and how-to guides.
 *
 * @param {Object} param0 Context.
 * @param {Object} param0.meta Meta data.
 * @param {Object} param0.meta.site Site properties.
 * @param {String} param0.meta.site.name Site name.
 * @param {String} param0.meta.site.url Site home URL.
 * @param {Object} param0.meta.site.logo Site logo image properties.
 * @param {String} param0.meta.url Page URL.
 * @param {String} param0.meta.title Title.
 * @param {String} param0.meta.description Description.
 * @param {String} param0.meta.language Language code (e.g. "en-US" or "en").
 * @param {Object} param0.meta.image Meta image properties.
 * @param {Object|String} param0.meta.author Author properties.
 * @param {Date} param0.meta.published Published date.
 * @param {Date} param0.meta.modified Modified date.
 * @param {String} param0.meta.section Article section.
 * @param {String} param0.meta.proficiencyLevel Required proficiency (e.g. "Beginner", "Expert").
 * @param {String|Array} param0.meta.dependencies Technical prerequisites.
 * @param {String[]} param0.tags (Optional) Tags.
 * @returns {Object}
 */
export default ({ meta, tags = [] }) => {
  const base = page({ meta });
  const techArticle = {
    "@type": "TechArticle",
    author: author(meta.author),
    keywords: meta.keywords ? meta.keywords.join(",") : tags.join(","),
  };

  if (meta.published) {
    techArticle.datePublished = meta.published;
  }

  if (meta.modified) {
    techArticle.dateModified = meta.modified;
  }

  if (meta.section) {
    techArticle.articleSection = meta.section;
  }

  if (meta.wordCount) {
    techArticle.wordCount = meta.wordCount;
  }

  if (meta.proficiencyLevel) {
    techArticle.proficiencyLevel = meta.proficiencyLevel;
  }

  if (meta.dependencies) {
    techArticle.dependencies = meta.dependencies;
  }

  return { ...base, ...techArticle };
};
