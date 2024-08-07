const { Pool } = require("pg");
require("dotenv").config();

module.exports = new Pool({
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_HOST,
  ssl: {
    rejectUnauthorized: false, // Set to true for production with valid certificates
  },
});
