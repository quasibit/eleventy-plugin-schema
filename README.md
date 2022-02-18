# eleventy-plugin-schema

[![npm](https://img.shields.io/npm/v/@quasibit/eleventy-plugin-schema)](https://www.npmjs.com/package/@quasibit/eleventy-plugin-schema)
[![Release workflow](https://github.com/quasibit/eleventy-plugin-schema/workflows/Release/badge.svg)](https://github.com/quasibit/eleventy-plugin-schema/actions?query=workflow%3ARelease)
[![Test workflow](https://github.com/quasibit/eleventy-plugin-schema/workflows/Test/badge.svg)](https://github.com/quasibit/eleventy-plugin-schema/actions?query=workflow%3ATest)
[![codecov](https://codecov.io/gh/quasibit/eleventy-plugin-schema/branch/master/graph/badge.svg)](https://codecov.io/gh/quasibit/eleventy-plugin-schema)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
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

Add the plugin to your [Eleventy configuration](https://www.11ty.dev/docs/config/)
(usually `.eleventy.js`):

```js
const schema = require("@quasibit/eleventy-plugin-schema");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(schema);
};
```

## Introduction

The plugin adds a shortcode to generate the JSON-LD script (including the `<script>` tag).

The shortcode supports the following schema types:

- [WebSite](https://schema.org/WebSite).
- [BlogPosting](https://schema.org/BlogPosting).
- [WebPage](https://schema.org/WebPage).
- [Product](https://schema.org/Product) (thanks [@christopherpickering](https://github.com/christopherpickering)).
- [Organization](https://schema.org/Organization) (thanks [@christopherpickering](https://github.com/christopherpickering)).
- [Breadcrumbs](https://schema.org/BreadcrumbList) (thanks [@christopherpickering](https://github.com/christopherpickering)).
- [SearchAction](https://schema.org/SearchAction) (thanks [@christopherpickering](https://github.com/christopherpickering)).
- [FAQPage](https://schema.org/FAQPage) (thanks [@christopherpickering](https://github.com/christopherpickering)).
- [Videos](https://schema.org/VideoObject) (thanks [@christopherpickering](https://github.com/christopherpickering)).

## Usage

Add data/front matter to your pages. Please refer to the files in [demo](./demo).
If you already have the value in other properties, you can use
[computed data](https://www.11ty.dev/docs/data-computed/) to clone them.

Call the shortcode where you want the script to be displayed:

```njk
{% jsonLdScript meta, type, tags %}
```

### Validation

You can validate the structured data using one of the following tools:

- [Google's Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/u/0/).
- [JSON-LD Playground](https://json-ld.org/playground/).
- [JSON Schema Validator](https://www.jsonschemavalidator.net/).

## Related plugins

- [@quasibit/eleventy-plugin-sitemap](https://github.com/quasibit/eleventy-plugin-sitemap): generate a sitemap.

## Maintainers

- [@nunof07](https://github.com/nunof07)

Special thanks to [@christopherpickering](https://github.com/christopherpickering).

## License

MIT. See [LICENSE](./LICENSE).
