const express = require('express');
const {getUser, updateUser} = require("../controllers");

const router = express.Router();

router.get("/get-user-data/:id", getUser);
router.put("/update-user-address/:id", updateUser);


module.exports = {
    router
}