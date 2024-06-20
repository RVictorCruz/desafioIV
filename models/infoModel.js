const db = require("../config/database");

class InfoModel {
  static getAll(callback) {
    db.all("SELECT * FROM info", [], (err, rows) => {
      callback(err, rows);
    });
  }

  static getById(id, callback) {
    db.get("SELECT * FROM info WHERE id = ?", [id], (err, row) => {
      callback(err, row);
    });
  }

  static create(info, callback) {
    const { name, idade, cidade } = info;
    db.run(
      "INSERT INTO info (name, idade, cidade) VALUES (?, ?, ?)",
      [name, idade, cidade],
      function (err) {
        callback(err, this ? this.lastID : null);
      }
    );
  }

  static update(id, info, callback) {
    const { name, idade, cidade } = info;
    db.run(
      "UPDATE info SET name = ?, idade = ?, cidade = ? WHERE id = ?",
      [name, idade, cidade, id],
      function (err) {
        callback(err, this ? this.changes : 0);
      }
    );
  }

  static delete(id, callback) {
    db.run("DELETE FROM info WHERE id = ?", [id], function (err) {
      callback(err, this ? this.changes : 0);
    });
  }
}

module.exports = InfoModel;
