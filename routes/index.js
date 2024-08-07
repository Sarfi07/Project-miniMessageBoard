var express = require("express");
var router = express.Router();
const { format } = require("date-fns");
const indexController = require("../controllers/indexController");
require("dotenv").config();

/* GET home page. */
router.get("/", indexController.index);

router.get("/new", indexController.newMessageGet);

router.post("/new", indexController.newMessagesPost);

router.get(`/${process.env.DELETER}`, indexController.deleteAllMessagesGet);

module.exports = router;
