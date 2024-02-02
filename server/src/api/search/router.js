const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import actions
const { browse, read, add } = require("../../controllers/searchActions");

router.get("/", browse);

router.get("/:id", read);

router.post("/", add);

/* ************************************************************************* */

module.exports = router;
