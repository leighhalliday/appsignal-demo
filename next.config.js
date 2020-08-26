const withSourceMaps = require("@zeit/next-source-maps");

module.exports = withSourceMaps({
  env: {
    HEROKU_SLUG_COMMIT: process.env.HEROKU_SLUG_COMMIT,
  },
});
