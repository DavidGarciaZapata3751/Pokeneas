const express = require("express");
const path = require("path");

const infoRoutes = require("./src/routes/info.routes");
const visualRoutes = require("./src/routes/visual.routes");

const app = express();
const PORT = 80;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", infoRoutes);
app.use("/", visualRoutes);

app.get("/", (req, res) => {
  res.redirect("/visual");
});

app.listen(PORT, () => {
  console.log(`Pokeneas server running on port ${PORT}`);
});