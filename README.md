# eleventy-plugin-schema

[![npm](https://img.shields.io/npm/v/@quasibit/eleventy-plugin-schema)](https://www.npmjs.com/package/@quasibit/eleventy-plugin-schema)
[![Test workflow](https://github.com/quasibit/eleventy-plugin-schema/workflows/Test/badge.svg)](https://github.com/quasibit/eleventy-plugin-schema/actions?query=workflow%3ATest)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Eleventy](https://www.11ty.dev/) plugin to generate JSON-LD [structured data](https://schema.org/).

- [Installation](#installation)
- [Introduction](#introduction)
- [Usage](#usage)
- [Related plugins](#related-plugins)
- [Maintainers](#maintainers)
- [License](#license)

## Installation

Install the package:

```sh
npm install --save @quasibit/eleventy-plugin-schema
```

Add the plugin to your Eleventy configuration.

**ESM (Eleventy 2.0+):**

```js
// eleventy.config.js
import schema from "@quasibit/eleventy-plugin-schema";

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(schema);
}
```

**CommonJS:**

```js
// .eleventy.js
const schema = require("@quasibit/eleventy-plugin-schema");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(schema);
};
```

## Introduction

The plugin adds two shortcodes to generate the JSON-LD script:
  - `jsonLdScript` (includes the `<script>` tag)
  - `jsonLd` (just JSON-LD without the `<script>` tag)

The shortcodes support the following schema types:

- [WebSite](https://schema.org/WebSite).
- [BlogPosting](https://schema.org/BlogPosting).
- [WebPage](https://schema.org/WebPage).
- [Product](https://schema.org/Product) (thanks [@christopherpickering](https://github.com/christopherpickering)).
- [Organization](https://schema.org/Organization) (thanks [@christopherpickering](https://github.com/christopherpickering)).
- [Breadcrumbs](https://schema.org/BreadcrumbList) (thanks [@christopherpickering](https://github.com/christopherpickering)).
- [SearchAction](https://schema.org/SearchAction) (thanks [@christopherpickering](https://github.com/christopherpickering)).
- [FAQPage](https://schema.org/FAQPage) (thanks [@christopherpickering](https://github.com/christopherpickering)).
- [Videos](https://schema.org/VideoObject) (thanks [@christopherpickering](https://github.com/christopherpickering)).
- [Article](https://schema.org/Article) - Generic article type.
- [NewsArticle](https://schema.org/NewsArticle) - News content with print info.
- [LocalBusiness](https://schema.org/LocalBusiness) - Local business with address, hours, geo.
- [Event](https://schema.org/Event) - Conferences, webinars, concerts.
- [HowTo](https://schema.org/HowTo) - Tutorial/guide with steps.
- [Recipe](https://schema.org/Recipe) - Food/cooking content with ingredients.
- [JobPosting](https://schema.org/JobPosting) - Career pages and job boards.
- [Course](https://schema.org/Course) - Educational/online learning content.
- [Book](https://schema.org/Book) - Books with readAction support ([#27](https://github.com/quasibit/eleventy-plugin-schema/issues/27)).

## Usage

Add data/front matter to your pages. Please refer to the files in [demo](./demo).
If you already have the value in other properties, you can use
[computed data](https://www.11ty.dev/docs/data-computed/) to clone them.

Call the shortcode where you want the script to be displayed:

**Nunjucks:**
```njk
{% jsonLdScript meta, type, tags %}
```

**Liquid:**
```liquid
{% jsonLdScript meta type tags %}
```

And if you don't want the `<script>` tag, then use this instead:

**Nunjucks:**
```njk
{% jsonLd meta, type, tags %}
```

**Liquid:**
```liquid
{% jsonLd meta type tags %}
```

### Validation

You can validate the structured data using one of the following tools:

- [Google's Rich Results Test](https://search.google.com/test/rich-results).
- [Schema.org Validator](https://validator.schema.org/).
- [JSON-LD Playground](https://json-ld.org/playground/).
- [JSON Schema Validator](https://www.jsonschemavalidator.net/).

## Related plugins

- [@quasibit/eleventy-plugin-sitemap](https://github.com/quasibit/eleventy-plugin-sitemap): generate a sitemap.

## Maintainers

- [@nunof07](https://github.com/nunof07)

Special thanks to [@christopherpickering](https://github.com/christopherpickering).

## License

MIT. See [LICENSE](./LICENSE).
