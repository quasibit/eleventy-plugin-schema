import assert from "node:assert/strict";
import test from "node:test";
import jobPosting from "../src/jobPosting.js";

test("jobPosting_basic", () => {
  const meta = {
    title: "Software Engineer",
    description: "We are looking for a skilled software engineer...",
    datePosted: "2024-01-15",
    validThrough: "2024-03-15",
    employmentType: "FULL_TIME",
  };

  const expected = {
    "@type": "JobPosting",
    title: meta.title,
    description: meta.description,
    datePosted: meta.datePosted,
    validThrough: meta.validThrough,
    employmentType: meta.employmentType,
  };

  assert.deepStrictEqual(jobPosting({ meta }), expected);
});

test("jobPosting_with_hiringOrganization", () => {
  const meta = {
    title: "Software Engineer",
    description: "We are looking for a skilled software engineer...",
    hiringOrganization: {
      name: "TechCorp Inc",
      sameAs: "https://techcorp.com",
      logo: "https://techcorp.com/logo.png",
    },
  };

  const result = jobPosting({ meta });

  assert.deepStrictEqual(result.hiringOrganization, {
    "@type": "Organization",
    name: "TechCorp Inc",
    sameAs: "https://techcorp.com",
    logo: "https://techcorp.com/logo.png",
  });
});

test("jobPosting_with_jobLocation", () => {
  const meta = {
    title: "Software Engineer",
    description: "We are looking for a skilled software engineer...",
    jobLocation: {
      streetAddress: "123 Tech Street",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94102",
      addressCountry: "US",
    },
  };

  const result = jobPosting({ meta });

  assert.deepStrictEqual(result.jobLocation, {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Tech Street",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94102",
      addressCountry: "US",
    },
  });
});

test("jobPosting_with_multiple_locations", () => {
  const meta = {
    title: "Software Engineer",
    description: "We are looking for a skilled software engineer...",
    jobLocation: [
      { addressLocality: "San Francisco", addressRegion: "CA" },
      { addressLocality: "New York", addressRegion: "NY" },
    ],
  };

  const result = jobPosting({ meta });

  assert.strictEqual(result.jobLocation.length, 2);
  assert.strictEqual(result.jobLocation[0].address.addressLocality, "San Francisco");
  assert.strictEqual(result.jobLocation[1].address.addressLocality, "New York");
});

test("jobPosting_with_baseSalary_range", () => {
  const meta = {
    title: "Software Engineer",
    description: "We are looking for a skilled software engineer...",
    baseSalary: {
      currency: "USD",
      minValue: 100000,
      maxValue: 150000,
      unitText: "YEAR",
    },
  };

  const result = jobPosting({ meta });

  assert.deepStrictEqual(result.baseSalary, {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: {
      "@type": "QuantitativeValue",
      minValue: 100000,
      maxValue: 150000,
      unitText: "YEAR",
    },
  });
});

test("jobPosting_with_baseSalary_fixed", () => {
  const meta = {
    title: "Software Engineer",
    description: "We are looking for a skilled software engineer...",
    baseSalary: {
      currency: "USD",
      value: 120000,
      unitText: "YEAR",
    },
  };

  const result = jobPosting({ meta });

  assert.deepStrictEqual(result.baseSalary, {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: {
      "@type": "QuantitativeValue",
      value: 120000,
      unitText: "YEAR",
    },
  });
});

test("jobPosting_with_identifier", () => {
  const meta = {
    title: "Software Engineer",
    description: "We are looking for a skilled software engineer...",
    identifier: "JOB-12345",
    hiringOrganization: {
      name: "TechCorp",
    },
  };

  const result = jobPosting({ meta });

  assert.deepStrictEqual(result.identifier, {
    "@type": "PropertyValue",
    name: "TechCorp",
    value: "JOB-12345",
  });
});

test("jobPosting_with_remote_work", () => {
  const meta = {
    title: "Remote Software Engineer",
    description: "Work from anywhere...",
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: "United States",
  };

  const result = jobPosting({ meta });

  assert.strictEqual(result.jobLocationType, "TELECOMMUTE");
  assert.deepStrictEqual(result.applicantLocationRequirements, {
    "@type": "Country",
    name: "United States",
  });
});

test("jobPosting_returns_undefined_without_required_fields", () => {
  const meta = {
    title: "Software Engineer",
    // missing description
  };

  const result = jobPosting({ meta });

  assert.strictEqual(result, undefined);
});
