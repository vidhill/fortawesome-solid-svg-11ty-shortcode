# @vidhill/fortawesome-solid-11ty-shortcode

[![CircleCI](https://circleci.com/gh/vidhill/fortawesome-brands-svg-11ty-shortcode/tree/main.svg?style=shield)](https://circleci.com/gh/vidhill/fortawesome-brands-svg-11ty-shortcode/tree/main)

[Eleventy/11ty](https://www.11ty.dev/) shortcode.

Allows [@fortawesome/free-solid-svg-icons](https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons) to be embedded as inline svg into 11ty templates.

See solid icon names here: [font-awesome-5-solid](https://fortawesome.com/sets/font-awesome-5-solid)

```bash
$ npm install @vidhill/fortawesome-solid-11ty-shortcode --save
```

## Setup

**Option A:** Import as a plugin, shortcodes names are fixed, if you want to name the shortcodes yourself see Option B

```javascript
const {
    fortawesomeSolidPlugin,
} = require('@vidhill/fortawesome-solid-11ty-shortcode');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(fortawesomeSolidPlugin);

    return {
        // normal eleventy config
    };
};
```

**Option B:** import the render function so that a custom shortcode name can be defined

```javascript
const {
    fortawesomeSolidShortcode,
} = require('@vidhill/fortawesome-solid-11ty-shortcode');

module.exports = function (eleventyConfig) {
    eleventyConfig.addShortcode('fortawesomeSolid', fortawesomeSolidShortcode);

    return {
        // normal eleventy config
    };
};
```

## Usage

### Input

```javascript
{% fortawesomeSolid 'bell' %}
```

#### Output

```html
<svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="bell"
    class="svg-inline--fa fa-bell fa-w-14 "
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
>
    <path fill="currentColor" d="M165.9 397.4c0....4-2.3-4-3.3-5.6-2z"></path>
</svg>
```

### Input

Specifying a css class to be added to the `svg` element

```javascript
{% fortawesomeBrand 'github', "social-icon" %}
```

#### Output

```html
<svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fab"
    data-icon="github"
    class="svg-inline--fa fa-github fa-w-16 social-icon"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 496 512"
>
    <path fill="currentColor" d="M165.9 397.4c0....4-2.3-4-3.3-5.6-2z"></path>
</svg>
```

Multiple css class to be added to they svg by passing a comma separated string:

```javascript
{% fortawesomeBrand 'github', "social-icon,unicorn-icon" %}
```

## Development

-   Build: `npm run build`
-   Watch build: `npm run dev`
-   Run tests: `npm run test`
-   Watch tests: `npm run test:watch`
