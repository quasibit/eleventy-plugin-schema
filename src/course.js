import image from "./image.js";
import offer from "./offer.js";
import rating from "./rating.js";

/**
 * Course structured data. See: https://schema.org/Course.
 *
 * @param {Object} param0 Context.
 * @param {Object} param0.meta Meta data.
 * @param {String} param0.meta.name Course name.
 * @param {String} param0.meta.description Course description.
 * @param {String} param0.meta.url Course URL.
 * @param {Object} param0.meta.image Course image.
 * @param {Object} param0.meta.provider Course provider organization.
 * @param {String} param0.meta.courseCode Course code.
 * @param {String} param0.meta.coursePrerequisites Prerequisites.
 * @param {String} param0.meta.educationalLevel Educational level.
 * @param {Array} param0.meta.hasCourseInstance Course instances.
 * @param {Object} param0.meta.offers Course offers.
 * @param {Object} param0.meta.rating Course rating.
 * @param {String} param0.meta.inLanguage Course language.
 * @returns {Object}
 */
export default ({ meta }) => {
  if (!meta?.name || !meta?.description) {
    return;
  }

  const course = {
    "@type": "Course",
    name: meta.name,
    description: meta.description,
  };

  if (meta.url) {
    course.url = meta.url;
  }

  if (meta.image?.src) {
    course.image = image(meta.image);
  }

  if (meta.provider) {
    course.provider = {
      "@type": "Organization",
      name: meta.provider.name,
    };

    if (meta.provider.sameAs) {
      course.provider.sameAs = meta.provider.sameAs;
    }

    if (meta.provider.url) {
      course.provider.url = meta.provider.url;
    }
  }

  if (meta.courseCode) {
    course.courseCode = meta.courseCode;
  }

  if (meta.coursePrerequisites) {
    course.coursePrerequisites = meta.coursePrerequisites;
  }

  if (meta.educationalLevel) {
    course.educationalLevel = meta.educationalLevel;
  }

  if (meta.inLanguage) {
    course.inLanguage = meta.inLanguage;
  }

  if (meta.hasCourseInstance && Array.isArray(meta.hasCourseInstance)) {
    course.hasCourseInstance = meta.hasCourseInstance.map((instance) => {
      const courseInstance = {
        "@type": "CourseInstance",
      };

      if (instance.name) {
        courseInstance.name = instance.name;
      }

      if (instance.description) {
        courseInstance.description = instance.description;
      }

      if (instance.courseMode) {
        courseInstance.courseMode = instance.courseMode;
      }

      if (instance.courseWorkload) {
        courseInstance.courseWorkload = instance.courseWorkload;
      }

      if (instance.startDate) {
        courseInstance.startDate = instance.startDate;
      }

      if (instance.endDate) {
        courseInstance.endDate = instance.endDate;
      }

      if (instance.instructor) {
        if (Array.isArray(instance.instructor)) {
          courseInstance.instructor = instance.instructor.map((i) => ({
            "@type": "Person",
            name: typeof i === "string" ? i : i.name,
          }));
        } else {
          courseInstance.instructor = {
            "@type": "Person",
            name:
              typeof instance.instructor === "string"
                ? instance.instructor
                : instance.instructor.name,
          };
        }
      }

      if (instance.location) {
        if (instance.location.url) {
          courseInstance.location = {
            "@type": "VirtualLocation",
            url: instance.location.url,
          };
        } else {
          courseInstance.location = {
            "@type": "Place",
            name: instance.location.name,
            address: instance.location.address,
          };
        }
      }

      if (instance.offers) {
        courseInstance.offers = offer(instance.offers);
      }

      return courseInstance;
    });
  }

  if (meta.offers) {
    course.offers = offer(meta.offers);
  }

  if (meta.rating) {
    course.aggregateRating = rating(meta.rating);
  }

  if (meta.keywords) {
    course.keywords = Array.isArray(meta.keywords)
      ? meta.keywords.join(",")
      : meta.keywords;
  }

  return course;
};
