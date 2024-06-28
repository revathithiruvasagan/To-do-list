const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres12",
  password: "xYVx7dAfRrOTaYDnO1dt7TskqLdEmFn1",
  host: "dpg-cpv65idumphs73c6br00-a",
  port: 5432,
  database: "todo_75yt",
});

module.exports = pool;
