const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (username, password, email, role) VALUES (?, ?, ?, ?)`,
      [user.username, user.password, user.email, user.role]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async update(id, user) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET username = ?, email = ?, role = ? WHERE id = ?`,
      [user.username, user.email, user.role, id]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result.affectedRows;
  }

  async readByEmail(email) {
    const [result] = await this.database.query(
      `select * from ${this.table} WHERE email = ?`,
      [email]
    );
    return result[0];
  }
}

module.exports = UserRepository;
