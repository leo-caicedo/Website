const createApp = require("./app");
const { config } = require("./config");
const app = createApp();
require("./mongo");

app.listen(config.port, (err) => {
  err
    ? console.error(`Error ${err}`)
    : console.log(`Server on port ${config.port}`);
});
