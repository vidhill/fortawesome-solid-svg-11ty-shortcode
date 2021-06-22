const helpers = require('@vidhill/fortawesome-11ty-shortcode-helper');
const solidIcons = require('@fortawesome/free-solid-svg-icons');

const fortawesomeSolidShortcode = helpers.makeFortawesomeShortcode(
    solidIcons,
    'fas'
);

function fortawesomeSolidPlugin(eleventyConfig) {
    eleventyConfig.addShortcode('fortawesomeSolid', fortawesomeSolidShortcode);
}

module.exports = {
    fortawesomeSolidShortcode,
    fortawesomeSolidPlugin,
};
