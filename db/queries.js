const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * From messages");
  return rows;
}

async function insertMessage(text, user, added) {
  try {
    await pool.query(
      `INSERT INTO messages (text, "user", added) VALUES ($1, $2, NOW())`,
      [text, user]
    );
    console.log("Message added successfully");
  } catch (err) {
    console.error("Error inserting message:", err.stack);
  }
}

async function deleteAllMessages() {
  await pool.query("TRUNCATE TABLE messages");
}

module.exports = {
  getAllMessages,
  insertMessage,
  deleteAllMessages,
};
