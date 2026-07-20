export default {
  eleventyComputed: {
    meta: (data) => ({
      site: data.site,
      ...data.meta,
    }),
  },
};
