import test from "ava";
import jobPosting from "../src/jobPosting.js";

test("jobPosting_basic", (t) => {
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

  t.deepEqual(jobPosting({ meta }), expected);
});

test("jobPosting_with_hiringOrganization", (t) => {
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

  t.deepEqual(result.hiringOrganization, {
    "@type": "Organization",
    name: "TechCorp Inc",
    sameAs: "https://techcorp.com",
    logo: "https://techcorp.com/logo.png",
  });
});

test("jobPosting_with_jobLocation", (t) => {
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

  t.deepEqual(result.jobLocation, {
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

test("jobPosting_with_multiple_locations", (t) => {
  const meta = {
    title: "Software Engineer",
    description: "We are looking for a skilled software engineer...",
    jobLocation: [
      { addressLocality: "San Francisco", addressRegion: "CA" },
      { addressLocality: "New York", addressRegion: "NY" },
    ],
  };

  const result = jobPosting({ meta });

  t.is(result.jobLocation.length, 2);
  t.is(result.jobLocation[0].address.addressLocality, "San Francisco");
  t.is(result.jobLocation[1].address.addressLocality, "New York");
});

test("jobPosting_with_baseSalary_range", (t) => {
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

  t.deepEqual(result.baseSalary, {
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

test("jobPosting_with_baseSalary_fixed", (t) => {
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

  t.deepEqual(result.baseSalary, {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: {
      "@type": "QuantitativeValue",
      value: 120000,
      unitText: "YEAR",
    },
  });
});

test("jobPosting_with_identifier", (t) => {
  const meta = {
    title: "Software Engineer",
    description: "We are looking for a skilled software engineer...",
    identifier: "JOB-12345",
    hiringOrganization: {
      name: "TechCorp",
    },
  };

  const result = jobPosting({ meta });

  t.deepEqual(result.identifier, {
    "@type": "PropertyValue",
    name: "TechCorp",
    value: "JOB-12345",
  });
});

test("jobPosting_with_remote_work", (t) => {
  const meta = {
    title: "Remote Software Engineer",
    description: "Work from anywhere...",
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: "United States",
  };

  const result = jobPosting({ meta });

  t.is(result.jobLocationType, "TELECOMMUTE");
  t.deepEqual(result.applicantLocationRequirements, {
    "@type": "Country",
    name: "United States",
  });
});

test("jobPosting_returns_undefined_without_required_fields", (t) => {
  const meta = {
    title: "Software Engineer",
    // missing description
  };

  const result = jobPosting({ meta });

  t.is(result, undefined);
});
