const { signupValdiadtion } = require("../Middlewares/AuthValidation");
const express = require("express");
const router = express.Router();
 
router.post("/login",(req, res) => {
    res.send("login success");
})

router.post("/signup", signupValdiadtion)

module.exports = router;