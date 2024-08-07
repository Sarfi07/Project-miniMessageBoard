const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  "user" VARCHAR(255) NOT NULL,
  added TIMESTAMP NOT NULL
);

INSERT INTO messages (text, "user", added) VALUES
('Consistency doesn''t guarantee success, but not being consistent guarantee that your won''t be successful.', 'Sarfaroj', NOW()),
('Hello World!', 'Charles', NOW());
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DB.USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOSTNAME}/${DB_DATEBASE}?ssl=true`,
  });

  try {
    await client.connect();
    console.log("connected");
    await client.query(SQL);
    console.log("Data seeded successfully");
  } catch (err) {
    console.error("Error during seeding:", err.stack);
  } finally {
    await client.end();
    console.log("done");
  }
}

main();
