import image from "./image.js";
import offer from "./offer.js";

/**
 * Event structured data. See: https://schema.org/Event.
 *
 * @param {Object} param0 Context.
 * @param {Object} param0.meta Meta data.
 * @param {String} param0.meta.name Event name.
 * @param {String} param0.meta.description Event description.
 * @param {String} param0.meta.url Event URL.
 * @param {Object} param0.meta.image Event image.
 * @param {Date|String} param0.meta.startDate Event start date.
 * @param {Date|String} param0.meta.endDate Event end date.
 * @param {String} param0.meta.eventStatus Event status (e.g. "EventScheduled").
 * @param {String} param0.meta.eventAttendanceMode Attendance mode (e.g. "OfflineEventAttendanceMode").
 * @param {Object} param0.meta.location Event location.
 * @param {Object} param0.meta.organizer Event organizer.
 * @param {Object} param0.meta.performer Event performer.
 * @param {Object} param0.meta.offers Event ticket offers.
 * @returns {Object}
 */
export default ({ meta }) => {
  if (!meta?.name || !meta?.startDate) {
    return;
  }

  const event = {
    "@type": "Event",
    name: meta.name,
    startDate: meta.startDate,
  };

  if (meta.description) {
    event.description = meta.description;
  }

  if (meta.url) {
    event.url = meta.url;
  }

  if (meta.image?.src) {
    event.image = image(meta.image);
  }

  if (meta.endDate) {
    event.endDate = meta.endDate;
  }

  if (meta.eventStatus) {
    event.eventStatus = `https://schema.org/${meta.eventStatus}`;
  }

  if (meta.eventAttendanceMode) {
    event.eventAttendanceMode = `https://schema.org/${meta.eventAttendanceMode}`;
  }

  if (meta.location) {
    if (meta.location.url && !meta.location.name) {
      // Virtual location
      event.location = {
        "@type": "VirtualLocation",
        url: meta.location.url,
      };
    } else {
      // Physical location
      event.location = {
        "@type": "Place",
        name: meta.location.name,
      };

      if (meta.location.address) {
        event.location.address = {
          "@type": "PostalAddress",
          streetAddress: meta.location.address.streetAddress,
          addressLocality: meta.location.address.addressLocality,
          addressRegion: meta.location.address.addressRegion,
          postalCode: meta.location.address.postalCode,
          addressCountry: meta.location.address.addressCountry,
        };
      }
    }
  }

  if (meta.organizer) {
    event.organizer = {
      "@type": meta.organizer.type || "Organization",
      name: meta.organizer.name,
    };

    if (meta.organizer.url) {
      event.organizer.url = meta.organizer.url;
    }
  }

  if (meta.performer) {
    event.performer = {
      "@type": meta.performer.type || "Person",
      name: meta.performer.name,
    };
  }

  if (meta.offers) {
    event.offers = offer(meta.offers);
  }

  return event;
};
