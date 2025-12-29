import page from "./page.js";
import author from "./author.js";

/**
 * NewsArticle structured data. See: https://schema.org/NewsArticle.
 * More info: https://jsonld.com/news-article/.
 *
 * @param {Object} param0 Context.
 * @param {Object} param0.meta Meta data.
 * @param {Object} param0.meta.site Site properties.
 * @param {String} param0.meta.site.name Site name.
 * @param {String} param0.meta.site.url Site home URL.
 * @param {Object} param0.meta.site.logo Site logo image properties.
 * @param {String} param0.meta.site.logo.src Image URI.
 * @param {String} param0.meta.site.logo.width Image width.
 * @param {String} param0.meta.site.logo.height Image height.
 * @param {String} param0.meta.url Page URL.
 * @param {String} param0.meta.title Title.
 * @param {String} param0.meta.description Description.
 * @param {String} param0.meta.language Language code (e.g. "en-US" or "en").
 * @param {Object} param0.meta.image Meta image properties.
 * @param {String} param0.meta.image.src Image URI.
 * @param {Object|String} param0.meta.author Author properties.
 * @param {String} param0.meta.author.name Author name.
 * @param {Date} param0.meta.published Published date.
 * @param {Date} param0.meta.modified Modified date.
 * @param {String} param0.meta.section Article section.
 * @param {String} param0.meta.dateline The location where the news was produced.
 * @param {String} param0.meta.printEdition Edition of the print publication.
 * @param {String} param0.meta.printPage Page number in print publication.
 * @param {String} param0.meta.printSection Section in print publication.
 * @param {String[]} param0.tags (Optional) Tags.
 * @returns {Object}
 */
export default ({ meta, tags = [] }) => {
  const base = page({ meta });
  const newsArticle = {
    "@type": "NewsArticle",
    author: author(meta.author),
    keywords: meta.keywords ? meta.keywords.join(",") : tags.join(","),
  };

  if (meta.published) {
    newsArticle.datePublished = meta.published;
  }

  if (meta.modified) {
    newsArticle.dateModified = meta.modified;
  }

  if (meta.section) {
    newsArticle.articleSection = meta.section;
  }

  if (meta.dateline) {
    newsArticle.dateline = meta.dateline;
  }

  if (meta.printEdition) {
    newsArticle.printEdition = meta.printEdition;
  }

  if (meta.printPage) {
    newsArticle.printPage = meta.printPage;
  }

  if (meta.printSection) {
    newsArticle.printSection = meta.printSection;
  }

  if (meta.wordCount) {
    newsArticle.wordCount = meta.wordCount;
  }

  return { ...base, ...newsArticle };
};
