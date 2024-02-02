/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
const { fakerFR, faker } = require("@faker-js/faker");

// Import database client
const database = require("../database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Customs variables for seeding
    const password =
      "$argon2id$v=19$m=19456,t=2,p=1$fOujflfWPGrhA1QJivUYwQ$cKlZzL5vBmyGkMYAALYpxZtksjqhtpuDOX4uCUCmHqc";

    const typeOffer = ["sell", "rent"];
    // const coordinates = `POINT(48.873787, 2.295047)`;
    // { x: fakerFR.location.latitude(), y: fakerFR.location.longitude() },

    // Insert fake data with a loop
    for (let i = 0; i < 3; i += 1) {
      queries.push(
        database.query(
          "INSERT INTO agency (name, email, address, coordinates, city, country, contact_number) VALUES (?, ?, ?, ?, ?, ?, ?)",
          [
            fakerFR.company.name(),
            fakerFR.internet.email(),
            fakerFR.location.streetAddress(),
            null,
            fakerFR.location.city(),
            faker.location.country(),
            fakerFR.helpers.fromRegExp(/[0]{1}[1-9]{1}[0-9]{8}/),
          ]
        ),
        database.query(
          `UPDATE agency SET coordinates = POINT(?, ?)`,
          [48.873787, 2.295047]
        ),
        database.query(
          "INSERT INTO user (lastname, firstname, email, password, contact_number) VALUES (?, ?, ?, ?, ?)",
          [
            fakerFR.person.lastName(),
            fakerFR.person.firstName(),
            fakerFR.internet.email(),
            password,
            fakerFR.helpers.fromRegExp(/[0]{1}[1-9]{1}[0-9]{8}/),
          ]
        )
      );
    }
    for (let i = 0; i < 3; i += 1) {
      queries.push(
        database.query(
          "INSERT INTO commercial (lastname, firstname, email, password, avatar, agency_id, contact_number) VALUES (?, ?, ?, ?, ?, ?, ?)",
          [
            fakerFR.person.lastName(),
            fakerFR.person.firstName(),
            fakerFR.internet.email(),
            password,
            fakerFR.internet.avatar(),
            fakerFR.number.int({ min: 1, max: 3 }),
            fakerFR.helpers.fromRegExp(/[0]{1}[1-9]{1}[0-9]{8}/),
          ]
        )
      );
    }
    for (let i = 0; i < 50; i += 1) {
      queries.push(
        database.query(
          "INSERT INTO offer (title, description, size, coordinates, city, country, type, price, commercial_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [
            faker.lorem.sentence({ min: 3, max: 6 }),
            faker.lorem.paragraph({ min: 3, max: 10 }),
            fakerFR.number.int({ min: 20, max: 500 }),
            null,
            fakerFR.location.city(),
            faker.location.country(),
            faker.helpers.arrayElement(typeOffer, 1),
            fakerFR.number.int({ min: 500, max: 5000000 }),
            fakerFR.number.int({ min: 1, max: 3 }),
          ]
        ),
        database.query(
          `UPDATE offer SET coordinates = POINT(?, ?)`,
          [22.22185, -159.421516]
        )
      );
    }
    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
