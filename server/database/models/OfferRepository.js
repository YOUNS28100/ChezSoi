const AbstractRepository = require("./AbstractRepository");

class ItemRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "item" as configuration
    super({ table: "offer" });
  }

  // The C of CRUD - Create operation

  async create(item) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title) values (?)`,
      [item.title]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll(terms, city, country, surface, prix, type, orderby, limit) {
    // Toute la logique pour pouvoir accumuler les filtres de recherche via un tableau d'objets.
    const initialSql = `SELECT * FROM ${this.table}`;
    const where = [];

    // S'il y a un filtre de présent via les query, j'ajoute un nouvel objet dans le tableau ci-dessus.
    if (terms != null && terms !== "") {
      where.push({
        column: "title",
        value: `%${terms}%`,
        operator: "LIKE",
      });
    }
    if (city != null && city !== "") {
      where.push({
        column: "city",
        value: `%${city}%`,
        operator: "LIKE",
      });
    }
    if (country != null && country !== "") {
      where.push({
        column: "country",
        value: `%${country}%`,
        operator: "LIKE",
      });
    }
    if (surface != null && surface !== "") {
      where.push({
        column: "size",
        value: surface,
        operator: ">=",
      });
    }
    if (prix != null && prix !== "") {
      where.push({
        column: "price",
        value: prix,
        operator: ">=",
      });
    }
    if (type != null && type !== "") {
      where.push({
        column: "type",
        value: type,
        operator: "=",
      });
    }
    console.info("where", where);
    // Je place ma logique dans des constantes pour faciliter le rendu de la requête plus bas.
    const query = where.reduce(
      (sql, { column, operator }, index) =>
        `${sql} ${index === 0 ? "where" : "and"} ${column} ${operator} ? `,
      initialSql
    );
    const orderBySql = ` ORDER BY ${orderby} `;

    const limitSql = `LIMIT ${limit}`;

    const values = where.map(({ value }) => value);

    if (where.length !== 0) {
      // Je fais ma requête SQL préparée avec mon tableau d'objets.
      const [rows] = await this.database.query(
        query + (orderby != null ? orderBySql : "") + limitSql,
        values
      );
      console.info("final query", rows[0]);

      return rows[0];
    }
    return null;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = ItemRepository;
