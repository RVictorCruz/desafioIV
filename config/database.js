const Database = require("better-sqlite3");
const path = require("path");

// Use o caminho absoluto para garantir que o banco de dados seja encontrado
const dbPath = path.resolve(__dirname, "../data.db");
const db = new Database(dbPath);

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS people (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        idade INTEGER NOT NULL,
        cidade TEXT NOT NULL
    )
`
).run();

module.exports = db;
