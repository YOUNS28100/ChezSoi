// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  const {
    terms = null,
    city = null,
    country = null,
    surface = null,
    prix = null,
    type = null,
  } = req.query;
  const orderby = null;
  const limit = 20;
  try {
    // Fetch all offers from the database
    const offers = await tables.offer.readAll(
      terms,
      city,
      country,
      surface,
      prix,
      type,
      orderby,
      limit
    );

    // Respond with the offers in JSON format
    if (offers !== null) {
      console.info("offers in ctrller", offers);
      res.status(200).json(offers);
    } else {
      res.send(401).json({ message: "Recherche non aboutie" });
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  const { id } = req.params;
  try {
    // Fetch a specific offer from the database based on the provided ID
    const result = await tables.offer.read(Number(id));
    // If the offer is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the offer in JSON format
    if (result == null) {
      res.sendStatus(404);
    } else {
      res.json(result);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const item = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.offer.create(item);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
