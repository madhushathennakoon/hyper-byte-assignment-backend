const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const createToken = require("../helpers/jwt_tokens");
const { signupSchema, signinSchema } = require("../helpers/validation_schema");

//Signup User
const signupUser = async (req, res) => {
  try {
    // validating request body
    const validateBody = await signupSchema.validateAsync(req.body);

    //Password Encrypted
    const salt = await bcrypt.genSalt(12);
    const hashedPass = await bcrypt.hash(validateBody.password, salt);

    //Check email
    const exist = await userModel.findOne({ email: validateBody.email });
    if (exist) {
      return res.status(400).json({
        status: "fail",
        message: "Email already in use",
      });
    }

    //Create user in database
    const user = await userModel.create({
      email: validateBody.email,
      password: hashedPass,
      name: validateBody.name,
    });

    //Create a token
    const token = createToken(user._id);

    res.status(200).json({ email: user.email, token });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//Signin user
const signinUser = async (req, res) => {
  try {
    // validating request body
    const validateBody = await signinSchema.validateAsync(req.body);

    const user = await userModel.findOne({ email: validateBody.email });
    if (!user) {
      return res.status(400).json({
        status: "fail",
        message: "Incorrect email",
      });
    }

    const match = await bcrypt.compare(validateBody.password, user.password);
    if (!match) {
      return res.status(400).json({
        status: "fail",
        message: "Incorrect password",
      });
    }

    //Create a token
    const token = createToken(user._id);

    res.status(200).json({ email: user.email, token });
  } catch (error) {
    logger.error(error);
    res.status(400).json({ message: error });
  }
};

module.exports = { signinUser, signupUser };