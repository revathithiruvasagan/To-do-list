const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "remo&rt",
  host: "localhost",
  port: 5432,
  database: "summerproject",
});

module.exports = pool;
