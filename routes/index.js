const router = require("express").Router();

//importing api routes from /api/index.js
const apiRoutes = require("./api");

//adding prefix of /api for all api routes from api directory
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("<h1> Route ERROR! </h1>");
});

module.exports = router;
