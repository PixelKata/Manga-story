const AbstractRepository = require("./AbstractRepository");

class AuthorRepository extends AbstractRepository {
  constructor() {
    super({ table: "author" });
  }

  async create(author) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (last_name, first_name, birth_date, biography) VALUES (?, ?, ?, ?)`,
      [author.last_name, author.first_name, author.birth_date, author.biography]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE author_id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async update(id, author) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET last_name = ?, first_name = ?, birth_date = ?, biography = ? WHERE author_id = ?`,
      [
        author.last_name,
        author.first_name,
        author.birth_date,
        author.biography,
        id,
      ]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE author_id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = AuthorRepository;
