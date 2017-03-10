// The hjson-loader module on npm is using an old version of hjson. As such, I
// felt the better option was to just use a custom loader that does the same
// thing, only with an up-to-date version of hjson.

// eslint-disable-next-line import/no-extraneous-dependencies
const Hjson = require('hjson');

module.exports = function hjsonLoader(content) {
  return `module.exports = ${JSON.stringify(Hjson.parse(content.toString()))}`;
};
