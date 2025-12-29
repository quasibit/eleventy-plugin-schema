# [2.0.0](https://github.com/quasibit/eleventy-plugin-schema/compare/v1.11.1...v2.0.0) (2025-12-XX)


### Features

* modernize codebase with ESM support
* **schema:** add Article schema type (`type: "article"`)
* **schema:** add NewsArticle schema type (`type: "newsArticle"`)
* **schema:** add LocalBusiness schema type (`type: "localBusiness"`)
* **schema:** add Event schema type (`type: "event"`)
* **schema:** add HowTo schema type (`type: "howTo"`)
* **schema:** add Recipe schema type (`type: "recipe"`)
* **schema:** add JobPosting schema type (`type: "jobPosting"`)
* **schema:** add Course schema type (`type: "course"`)
* **schema:** add Book schema type with readAction support (`type: "book"`) closes [#27](https://github.com/quasibit/eleventy-plugin-schema/issues/27)


### BREAKING CHANGES

* **Node.js 18+ required** - Dropped support for Node.js 12-17
* **ESM-first architecture** - Package now uses ES modules as primary format
* CommonJS still supported via `.eleventy.cjs` wrapper with dynamic imports

### What's New

* Full ES modules support with `"type": "module"`
* Dual ESM/CJS exports for maximum compatibility
* Updated to modern tooling:
  - ESLint 9 with flat config
  - AVA 6
  - Prettier 3
  - Eleventy 3 for development
* Simplified dependencies (removed commitizen, husky, semantic-release)
* GitHub Actions updated to test on Node 18, 20, 22, 24

### Migration Guide

**For ESM projects (Eleventy 2.0+):**
```js
import schema from "@quasibit/eleventy-plugin-schema";

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(schema);
}
```

**For CommonJS projects (still works):**
```js
const schema = require("@quasibit/eleventy-plugin-schema");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(schema);
};
```

## [1.11.1](https://github.com/quasibit/eleventy-plugin-schema/compare/v1.11.0...v1.11.1) (2024-07-23)


### Bug Fixes

* add eleventy v2 support ([5163d70](https://github.com/quasibit/eleventy-plugin-schema/commit/5163d70be92e9129b4117bec53b5bbb4c769b7d7))

# [1.11.0](https://github.com/quasibit/eleventy-plugin-schema/compare/v1.10.1...v1.11.0) (2023-02-25)


### Bug Fixes

* js optional chain ([74a1dbc](https://github.com/quasibit/eleventy-plugin-schema/commit/74a1dbc74e3030918909cb849cef3718993673d9))


### Features

* add jsonLd shortocde that outputs without script tag ([792690b](https://github.com/quasibit/eleventy-plugin-schema/commit/792690b7000fe7a2e06b039e3b049c481c64b11d)), closes [#49](https://github.com/quasibit/eleventy-plugin-schema/issues/49)

## [1.10.1](https://github.com/quasibit/eleventy-plugin-schema/compare/v1.10.0...v1.10.1) (2023-02-20)


### Bug Fixes

* removed node version 10, per npm error message ([bdb0e01](https://github.com/quasibit/eleventy-plugin-schema/commit/bdb0e01dab21992acd104f1a927685266596c80c))

# [1.10.0](https://github.com/quasibit/eleventy-plugin-schema/compare/v1.9.1...v1.10.0) (2022-06-12)


### Features

* avoid errors when no data is available ([52be542](https://github.com/quasibit/eleventy-plugin-schema/commit/52be542522edacdb71f976656239b21a6c7b829c))

## [1.9.1](https://github.com/quasibit/eleventy-plugin-schema/compare/v1.9.0...v1.9.1) (2022-03-26)


### Bug Fixes

* **page:** missing #organization in publisher url ([c4a9c54](https://github.com/quasibit/eleventy-plugin-schema/commit/c4a9c54f9adf02b0832c359d16f6ed6e4dd950a5))

# [1.9.0](https://github.com/quasibit/eleventy-plugin-schema/compare/v1.8.0...v1.9.0) (2022-02-26)


### Features

* **updated contactpoint schema:** add url to contact point for chat or other types of contact ([d42823a](https://github.com/quasibit/eleventy-plugin-schema/commit/d42823ace9c9910806a20b4a3b81d2dcb6a273fa)), closes [#23](https://github.com/quasibit/eleventy-plugin-schema/issues/23)

# [1.8.0](https://github.com/quasibit/eleventy-plugin-schema/compare/v1.7.0...v1.8.0) (2022-02-18)


### Features

* **page:** add video schema ([6be6f07](https://github.com/quasibit/eleventy-plugin-schema/commit/6be6f07a660546b6162d47acab9fccc8c04f8798))

# [1.7.0](https://github.com/quasibit/eleventy-plugin-schema/compare/v1.6.0...v1.7.0) (2022-02-12)


### Features

* **product:** add reviews ([a999982](https://github.com/quasibit/eleventy-plugin-schema/commit/a999982325e75f5bb0f1b6e53b8e2fad30f1a1b4))

# [1.6.0](https://github.com/quasibit/eleventy-plugin-schema/compare/v1.5.0...v1.6.0) (2022-01-28)


### Features

* add faq page schema ([db81fad](https://github.com/quasibit/eleventy-plugin-schema/commit/db81fad36d669b590063f14bbcd372e51a0ac0cc))

# [1.5.0](https://github.com/quasibit/eleventy-plugin-schema/compare/v1.4.0...v1.5.0) (2022-01-21)


### Bug Fixes

* null showing when optional schema is missing ([2f6f9e8](https://github.com/quasibit/eleventy-plugin-schema/commit/2f6f9e8d10a36685f1bfe688f313d45d1edddf22)), closes [#14](https://github.com/quasibit/eleventy-plugin-schema/issues/14)


### Features

* add search action schema ([1e6ab16](https://github.com/quasibit/eleventy-plugin-schema/commit/1e6ab1698834f66136dc164389067087a152e6ac))
* **post:** allow custom tags in meta ([ed99a53](https://github.com/quasibit/eleventy-plugin-schema/commit/ed99a53e67f311526ffad3abd9dd8bca3bb7a914)), closes [#16](https://github.com/quasibit/eleventy-plugin-schema/issues/16)

# [1.4.0](https://github.com/quasibit/eleventy-plugin-schema/compare/v1.3.0...v1.4.0) (2022-01-14)


### Bug Fixes

* support for eleventy 1.0.0 ([44935f6](https://github.com/quasibit/eleventy-plugin-schema/commit/44935f6f7bb2e88517a4ed8565936b29c2d7d411))


### Features

* add breadcrumbs schema ([6c97f7a](https://github.com/quasibit/eleventy-plugin-schema/commit/6c97f7a92a17d939492f2a6e1f246286542dc9fd))

# [1.3.0](https://github.com/quasibit/eleventy-plugin-schema/compare/v1.2.0...v1.3.0) (2022-01-08)


### Features

* add organization schema ([d8f99d0](https://github.com/quasibit/eleventy-plugin-schema/commit/d8f99d028e37c9ec6dade3c630e38120c7ae52e5))

# [1.2.0](https://github.com/quasibit/eleventy-plugin-schema/compare/v1.1.0...v1.2.0) (2021-12-30)


### Features

* add support for new eleventy version ([fc7954a](https://github.com/quasibit/eleventy-plugin-schema/commit/fc7954a0eb1390a9f58a8f00247f052b8219ac45))

# [1.1.0](https://github.com/quasibit/eleventy-plugin-schema/compare/v1.0.0...v1.1.0) (2021-12-28)


### Features

* add product schema ([af4876d](https://github.com/quasibit/eleventy-plugin-schema/commit/af4876d3bd39d2891e09b5d12682fe882d143292))

# 1.0.0 (2020-07-03)


### Features

* create plugin ([bc18dd1](https://github.com/quasibit/eleventy-plugin-schema/commit/bc18dd188576b9f601a069b4d11b082257d45de8))
