import test from "ava";
import service from "../src/service.js";
import parsedEqual from "../utils/parsedEqual.js";

test("service_basic", (t) => {
  const meta = {
    name: "Managed WordPress Hosting",
    description: "Fast and secure hosting for WordPress websites",
    url: "https://example.com/services/wordpress-hosting",
    serviceType: "Web Hosting",
  };

  const expected = {
    "@type": "Service",
    name: meta.name,
    description: meta.description,
    url: meta.url,
    serviceType: meta.serviceType,
  };

  parsedEqual(t, service({ meta }), expected);
});

test("service_with_offers_rating_reviews", (t) => {
  const meta = {
    name: "SEO Consulting",
    areaServed: ["US", "CA"],
    offers: {
      price: "299",
      priceCurrency: "USD",
    },
    rating: {
      ratingValue: "4.9",
      ratingCount: "127",
    },
    reviews: [
      {
        name: "Outstanding results",
        review: "Traffic increased significantly in three months.",
        rating: 5,
        author: "Jane Doe",
      },
    ],
  };

  const expected = {
    '@type': 'Service',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingCount: '127',
      ratingValue: '4.9',
    },
    areaServed: [
      'US',
      'CA',
    ],
    name: 'SEO Consulting',
    offers: {
      '@type': 'Offer',
      price: '299',
      priceCurrency: 'USD',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Jane Doe',
        },
        name: 'Outstanding results',
        reviewBody: 'Traffic increased significantly in three months.',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: 5,
        },
      },
    ]
  };

  parsedEqual(t, service({ meta }), expected);
});
