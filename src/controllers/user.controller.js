const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const responseHandler = require("../handlers/response.helper");

const signUp = async (req, res) => {
  try {
    const { username, password, displayName } = req.body;
    const checkUser = await userModel.findOne({ username });
    const user = new userModel();
    user.displayName = displayName;
    user.username = username;
  } catch {
    responseHandler.error(res);
  }
};
