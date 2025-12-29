import test from "ava";
import event from "../src/event.js";

test("event_basic", (t) => {
  const meta = {
    name: "Tech Conference 2024",
    description: "Annual technology conference",
    url: "https://example.com/event",
    startDate: "2024-06-15T09:00:00",
    endDate: "2024-06-17T18:00:00",
  };

  const expected = {
    "@type": "Event",
    name: meta.name,
    description: meta.description,
    url: meta.url,
    startDate: meta.startDate,
    endDate: meta.endDate,
  };

  t.deepEqual(event({ meta }), expected);
});

test("event_with_physical_location", (t) => {
  const meta = {
    name: "Tech Conference 2024",
    startDate: "2024-06-15T09:00:00",
    location: {
      name: "Convention Center",
      address: {
        streetAddress: "123 Main St",
        addressLocality: "San Francisco",
        addressRegion: "CA",
        postalCode: "94102",
        addressCountry: "US",
      },
    },
  };

  const result = event({ meta });

  t.deepEqual(result.location, {
    "@type": "Place",
    name: "Convention Center",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main St",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94102",
      addressCountry: "US",
    },
  });
});

test("event_with_virtual_location", (t) => {
  const meta = {
    name: "Online Webinar",
    startDate: "2024-06-15T09:00:00",
    location: {
      url: "https://example.com/webinar",
    },
  };

  const result = event({ meta });

  t.deepEqual(result.location, {
    "@type": "VirtualLocation",
    url: "https://example.com/webinar",
  });
});

test("event_with_organizer_and_performer", (t) => {
  const meta = {
    name: "Concert",
    startDate: "2024-06-15T20:00:00",
    organizer: {
      name: "Music Productions Inc",
      url: "https://example.com/organizer",
    },
    performer: {
      name: "Famous Artist",
      type: "Person",
    },
  };

  const result = event({ meta });

  t.deepEqual(result.organizer, {
    "@type": "Organization",
    name: "Music Productions Inc",
    url: "https://example.com/organizer",
  });

  t.deepEqual(result.performer, {
    "@type": "Person",
    name: "Famous Artist",
  });
});

test("event_with_offers", (t) => {
  const meta = {
    name: "Concert",
    startDate: "2024-06-15T20:00:00",
    offers: {
      price: "50",
      priceCurrency: "USD",
      url: "https://example.com/tickets",
      availability: "InStock",
    },
  };

  const result = event({ meta });

  t.deepEqual(result.offers, {
    "@type": "Offer",
    price: "50",
    priceCurrency: "USD",
    url: "https://example.com/tickets",
    availability: "InStock",
  });
});

test("event_with_status", (t) => {
  const meta = {
    name: "Tech Conference 2024",
    startDate: "2024-06-15T09:00:00",
    eventStatus: "EventScheduled",
    eventAttendanceMode: "OfflineEventAttendanceMode",
  };

  const result = event({ meta });

  t.is(result.eventStatus, "https://schema.org/EventScheduled");
  t.is(
    result.eventAttendanceMode,
    "https://schema.org/OfflineEventAttendanceMode",
  );
});

test("event_returns_undefined_without_required_fields", (t) => {
  const meta = {
    description: "An event without name and startDate",
  };

  const result = event({ meta });

  t.is(result, undefined);
});
