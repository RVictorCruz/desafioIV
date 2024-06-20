const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("data.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS info (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        idade INTEGER NOT NULL,
        cidade TEXT NOT NULL
    )`);
});

module.exports = db;
