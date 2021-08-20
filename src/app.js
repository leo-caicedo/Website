const expres = require("express");

const createApp = () => {
  const app = expres();
  return app;
};

module.exports = createApp;
