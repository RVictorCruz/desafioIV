const db = require("../config/database");

class InfoModel {
  static getAll(callback) {
    try {
      const rows = db.prepare("SELECT * FROM info").all();
      callback(null, rows);
    } catch (err) {
      callback(err);
    }
  }

  static getById(id, callback) {
    try {
      const row = db.prepare("SELECT * FROM info WHERE id = ?").get(id);
      callback(null, row);
    } catch (err) {
      callback(err);
    }
  }

  static create(info, callback) {
    const { name, idade, cidade } = info;
    try {
      const info = db
        .prepare("INSERT INTO info (name, idade, cidade) VALUES (?, ?, ?)")
        .run(name, idade, cidade);
      callback(null, info.lastInsertRowid);
    } catch (err) {
      callback(err);
    }
  }

  static update(id, info, callback) {
    const { name, idade, cidade } = info;
    try {
      const info = db
        .prepare("UPDATE info SET name = ?, idade = ?, cidade = ? WHERE id = ?")
        .run(name, idade, cidade, id);
      callback(null, info.changes);
    } catch (err) {
      callback(err);
    }
  }

  static delete(id, callback) {
    try {
      const info = db.prepare("DELETE FROM info WHERE id = ?").run(id);
      callback(null, info.changes);
    } catch (err) {
      callback(err);
    }
  }
}

module.exports = InfoModel;
