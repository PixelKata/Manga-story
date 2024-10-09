const AbstractRepository = require("./AbstractRepository");

class MangaRepository extends AbstractRepository {
  constructor() {
    super({ table: "manga" });
  }

  async create(manga) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title, summary, publication_date, cover_image, author_id, genre_id) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        manga.title,
        manga.summary,
        manga.publication_date,
        manga.cover_image,
        manga.author_id,
        manga.genre_id,
      ]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE manga_id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async update(id, manga) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET title = ?, summary = ?, publication_date = ?, cover_image = ?, author_id = ?, genre_id = ? WHERE manga_id = ?`,
      [
        manga.title,
        manga.summary,
        manga.publication_date,
        manga.cover_image,
        manga.author_id,
        manga.genre_id,
        id,
      ]
    );
    return result.affectedRows;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE manga_id = ?`,
      [id]
    );
    return result.affectedRows;
  }
}

module.exports = MangaRepository;
