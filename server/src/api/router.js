const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const searchRouter = require("./search/router");

router.use("/items", itemsRouter);
router.use("/search", searchRouter);

/* ************************************************************************* */

module.exports = router;
