var express = require("express");
var router = express.Router();
const { format } = require("date-fns");

const messages = [
  {
    text: "Consistency doesn't guarantee success, but not being consistent guarantee that your won't be successful.",
    user: "Sarfaroj",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const title = "Mini MessageBoard";

/* GET home page. */
router.get("/", function (req, res, next) {
  const formattedMessages = messages.map((message) => ({
    ...message,
    formattedDate: format(message.added, "p, dd MMM yyyy"),
  }));
  res.render("index", { title: title, messages: formattedMessages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: title });
});

router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.userMessage,
    user: req.body.userName,
    added: new Date(),
  });

  res.redirect("/");
});

module.exports = router;
