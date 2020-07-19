const express = require("express");
const router = express.Router();
var nameList = require("../controllers/controller");

//Routes

router
  .get("/names", nameList.list_all_names)
  .post("/names", nameList.enter_a_name);
router
  .get("/names/:nameId", nameList.read_a_name)
  .put("/names/:nameId", nameList.update_a_name)
  .delete("/names/:nameId", nameList.delete_a_name);

module.exports = router;
