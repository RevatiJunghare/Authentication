const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { usersCreds_model } = require("../model/userCredentials.model");

const userLogRoute = express.Router();

userLogRoute.post("/register", async (req, res) => {
  const { name, email, pass } = req.body;
  try {
    bcrypt.hash(pass, 4, async (err, hash) => {
      const usersDetails = new usersCreds_model({ name, email, pass: hash });
      await usersDetails.save();
      res.send(`Successfully register`);
    });
  } catch (Err) {
    console.log("Error:", Err);
    res.send({ Msg: Err.message });
  }
});

userLogRoute.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await usersCreds_model.find({ email });
    if (user.length > 0) {
      bcrypt.compare(pass, user[0].pass).then(async (result) => {
        if (result) {
          const token = jwt.sign({ userId: user[0]._id }, "BabyCoder");
          res.send({
            Msg: "Successfully Login",
            user: user[0].name,
            token: token,
          });
        } else {
          res.send(`Wrong Credentials`);
        }
      });
    } else {
      res.send(`user not found`);
    }
  } catch (err) {
    res.send({ err: "somethings went wrong try again", Msg: err.message });
  }
});

module.exports = { userLogRoute };
