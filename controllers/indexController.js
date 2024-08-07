const db = require("../db/queries");
const { format } = require("date-fns");

const title = "Mini MessageBoard";

async function index(req, res) {
  const messages = await db.getAllMessages();
  const formattedMessages = messages.map((message) => ({
    ...message,
    formattedDate: format(message.added, "p, dd MMM yyyy"),
  }));
  res.render("index", {
    title: title,
    messages: formattedMessages,
  });
}

async function newMessageGet(req, res) {
  res.render("form", { title: title });
}

async function newMessagesPost(req, res) {
  //   messages.push({
  //     text: req.body.userMessage,
  //     user: req.body.userName,
  //     added: new Date(),
  //   });
  await db.insertMessage(req.body.userMessage, req.body.userName);

  res.redirect("/");
}

async function deleteAllMessagesGet(req, res) {
  await db.deleteAllMessages();
  res.redirect("/");
}

module.exports = {
  index,
  newMessageGet,
  newMessagesPost,
  deleteAllMessagesGet,
};
