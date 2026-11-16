import assert from "node:assert/strict";
import test from "node:test";
import course from "../src/course.js";

test("course_basic", () => {
  const meta = {
    name: "Introduction to Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript",
    url: "https://example.com/course",
  };

  const expected = {
    "@type": "Course",
    name: meta.name,
    description: meta.description,
    url: meta.url,
  };

  assert.deepStrictEqual(course({ meta }), expected);
});

test("course_with_provider", () => {
  const meta = {
    name: "Introduction to Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript",
    provider: {
      name: "Example University",
      sameAs: "https://example.edu",
      url: "https://example.edu",
    },
  };

  const result = course({ meta });

  assert.deepStrictEqual(result.provider, {
    "@type": "Organization",
    name: "Example University",
    sameAs: "https://example.edu",
    url: "https://example.edu",
  });
});

test("course_with_courseCode_and_prerequisites", () => {
  const meta = {
    name: "Advanced JavaScript",
    description: "Master advanced JS concepts",
    courseCode: "CS201",
    coursePrerequisites: "Introduction to Programming",
    educationalLevel: "Intermediate",
    inLanguage: "en",
  };

  const result = course({ meta });

  assert.strictEqual(result.courseCode, "CS201");
  assert.strictEqual(result.coursePrerequisites, "Introduction to Programming");
  assert.strictEqual(result.educationalLevel, "Intermediate");
  assert.strictEqual(result.inLanguage, "en");
});

test("course_with_courseInstance", () => {
  const meta = {
    name: "Introduction to Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript",
    hasCourseInstance: [
      {
        name: "Spring 2024 Session",
        courseMode: "online",
        courseWorkload: "PT10H",
        startDate: "2024-03-01",
        endDate: "2024-05-31",
        instructor: "Prof. Smith",
      },
    ],
  };

  const result = course({ meta });

  assert.strictEqual(result.hasCourseInstance.length, 1);
  assert.strictEqual(result.hasCourseInstance[0]["@type"], "CourseInstance");
  assert.strictEqual(result.hasCourseInstance[0].name, "Spring 2024 Session");
  assert.strictEqual(result.hasCourseInstance[0].courseMode, "online");
  assert.strictEqual(result.hasCourseInstance[0].courseWorkload, "PT10H");
  assert.deepStrictEqual(result.hasCourseInstance[0].instructor, {
    "@type": "Person",
    name: "Prof. Smith",
  });
});

test("course_with_multiple_instructors", () => {
  const meta = {
    name: "Team-Taught Course",
    description: "Collaborative course",
    hasCourseInstance: [
      {
        instructor: ["Prof. Smith", "Prof. Jones"],
      },
    ],
  };

  const result = course({ meta });

  assert.deepStrictEqual(result.hasCourseInstance[0].instructor, [
    { "@type": "Person", name: "Prof. Smith" },
    { "@type": "Person", name: "Prof. Jones" },
  ]);
});

test("course_with_virtual_location", () => {
  const meta = {
    name: "Online Course",
    description: "Virtual learning",
    hasCourseInstance: [
      {
        location: {
          url: "https://example.com/classroom",
        },
      },
    ],
  };

  const result = course({ meta });

  assert.deepStrictEqual(result.hasCourseInstance[0].location, {
    "@type": "VirtualLocation",
    url: "https://example.com/classroom",
  });
});

test("course_with_physical_location", () => {
  const meta = {
    name: "In-Person Course",
    description: "Classroom learning",
    hasCourseInstance: [
      {
        location: {
          name: "Main Campus",
          address: "123 University Ave",
        },
      },
    ],
  };

  const result = course({ meta });

  assert.deepStrictEqual(result.hasCourseInstance[0].location, {
    "@type": "Place",
    name: "Main Campus",
    address: "123 University Ave",
  });
});

test("course_with_offers", () => {
  const meta = {
    name: "Premium Course",
    description: "Comprehensive learning",
    offers: {
      price: "299",
      priceCurrency: "USD",
    },
  };

  const result = course({ meta });

  assert.deepStrictEqual(result.offers, {
    "@type": "Offer",
    price: "299",
    priceCurrency: "USD",
  });
});

test("course_with_rating", () => {
  const meta = {
    name: "Popular Course",
    description: "Highly rated course",
    rating: {
      ratingValue: "4.8",
      ratingCount: "1500",
    },
  };

  const result = course({ meta });

  assert.deepStrictEqual(result.aggregateRating, {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    bestRating: undefined,
    worstRating: undefined,
    ratingCount: "1500",
    reviewCount: undefined,
  });
});

test("course_returns_undefined_without_required_fields", () => {
  const meta = {
    name: "Course Name",
    // missing description
  };

  const result = course({ meta });

  assert.strictEqual(result, undefined);
});
