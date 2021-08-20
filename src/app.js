const expres = require("express");
const hbs = require("express-handlebars");

const path = require("path");
const createApp = () => {
  const app = expres();

  // settings
  app.set("views", path.join(__dirname, "views"));
  app.engine(
    ".hbs",
    hbs({
      defaultLayout: "main",
      layoutsDir: path.join(app.get("views"), "layouts"),
      partialsDir: path.join(app.get("views"), "partials"),
      extname: ".hbs",
    })
  );
  app.set("view engine", ".hbs");

  // static files
  app.use(express.static(path.join(__dirname, "public")));

  // routes
  app.use("/", require("./posts/routes/posts.routes"));

  // redirect
  app.get("/", (req, res) => {
    res.redirect("/home");
  });

  return app;
};

module.exports = createApp;
