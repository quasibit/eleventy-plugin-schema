/**
 * JobPosting structured data. See: https://schema.org/JobPosting.
 *
 * @param {Object} param0 Context.
 * @param {Object} param0.meta Meta data.
 * @param {String} param0.meta.title Job title.
 * @param {String} param0.meta.description Job description.
 * @param {Date|String} param0.meta.datePosted Date posted.
 * @param {Date|String} param0.meta.validThrough Application deadline.
 * @param {String} param0.meta.employmentType Employment type (e.g. "FULL_TIME").
 * @param {Object} param0.meta.hiringOrganization Hiring organization.
 * @param {Object} param0.meta.jobLocation Job location.
 * @param {Object} param0.meta.baseSalary Base salary.
 * @param {String} param0.meta.identifier Unique job identifier.
 * @param {Boolean} param0.meta.directApply Whether direct apply is available.
 * @param {String} param0.meta.educationRequirements Education requirements.
 * @param {String} param0.meta.experienceRequirements Experience requirements.
 * @param {String} param0.meta.qualifications Qualifications.
 * @param {String} param0.meta.responsibilities Responsibilities.
 * @param {String} param0.meta.skills Skills required.
 * @param {String} param0.meta.workHours Work hours.
 * @param {String} param0.meta.jobLocationType Location type (e.g. "TELECOMMUTE").
 * @returns {Object}
 */
export default ({ meta }) => {
  if (!meta?.title || !meta?.description) {
    return;
  }

  const job = {
    "@type": "JobPosting",
    title: meta.title,
    description: meta.description,
  };

  if (meta.datePosted) {
    job.datePosted = meta.datePosted;
  }

  if (meta.validThrough) {
    job.validThrough = meta.validThrough;
  }

  if (meta.employmentType) {
    job.employmentType = meta.employmentType;
  }

  if (meta.hiringOrganization) {
    job.hiringOrganization = {
      "@type": "Organization",
      name: meta.hiringOrganization.name,
    };

    if (meta.hiringOrganization.sameAs) {
      job.hiringOrganization.sameAs = meta.hiringOrganization.sameAs;
    }

    if (meta.hiringOrganization.logo) {
      job.hiringOrganization.logo = meta.hiringOrganization.logo;
    }
  }

  if (meta.jobLocation) {
    if (Array.isArray(meta.jobLocation)) {
      job.jobLocation = meta.jobLocation.map((loc) => ({
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: loc.streetAddress,
          addressLocality: loc.addressLocality,
          addressRegion: loc.addressRegion,
          postalCode: loc.postalCode,
          addressCountry: loc.addressCountry,
        },
      }));
    } else {
      job.jobLocation = {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: meta.jobLocation.streetAddress,
          addressLocality: meta.jobLocation.addressLocality,
          addressRegion: meta.jobLocation.addressRegion,
          postalCode: meta.jobLocation.postalCode,
          addressCountry: meta.jobLocation.addressCountry,
        },
      };
    }
  }

  if (meta.baseSalary) {
    job.baseSalary = {
      "@type": "MonetaryAmount",
      currency: meta.baseSalary.currency || "USD",
      value: {
        "@type": "QuantitativeValue",
        value: meta.baseSalary.value,
        unitText: meta.baseSalary.unitText || "YEAR",
      },
    };

    if (meta.baseSalary.minValue && meta.baseSalary.maxValue) {
      job.baseSalary.value.minValue = meta.baseSalary.minValue;
      job.baseSalary.value.maxValue = meta.baseSalary.maxValue;
      delete job.baseSalary.value.value;
    }
  }

  if (meta.identifier) {
    job.identifier = {
      "@type": "PropertyValue",
      name: meta.hiringOrganization?.name || "Job ID",
      value: meta.identifier,
    };
  }

  if (meta.directApply !== undefined) {
    job.directApply = meta.directApply;
  }

  if (meta.educationRequirements) {
    job.educationRequirements = meta.educationRequirements;
  }

  if (meta.experienceRequirements) {
    job.experienceRequirements = meta.experienceRequirements;
  }

  if (meta.qualifications) {
    job.qualifications = meta.qualifications;
  }

  if (meta.responsibilities) {
    job.responsibilities = meta.responsibilities;
  }

  if (meta.skills) {
    job.skills = meta.skills;
  }

  if (meta.workHours) {
    job.workHours = meta.workHours;
  }

  if (meta.jobLocationType) {
    job.jobLocationType = meta.jobLocationType;
  }

  if (meta.applicantLocationRequirements) {
    job.applicantLocationRequirements = {
      "@type": "Country",
      name: meta.applicantLocationRequirements,
    };
  }

  return job;
};
