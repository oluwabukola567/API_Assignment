const express = require("express");
const router = express.Router();
const {index, handlepost} = require("../Controllers/indexController");


const {crudOpera} = require("../models/indexModels");
router.get("/", index);

router.post("/", handlepost );

module.exports = router;




