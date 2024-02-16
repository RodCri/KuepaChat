const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const createToken = (_id) =>{
  const jwtkey = process.env.JWT_SECRET_KEY;
  return jwt.sign({_id}, jwtkey, {expiresIn: "3d"});
};

const registerUser = async (req, res) =>{
  try{
    const {nameUser, userName, password, rolUser} = req.body;
    let user = await userModel.findOne({ userName });
    
    if(user) 
      return res.status(400).json("UserName already exist...");
  
    if(!nameUser || !userName || !password) 
      return res.status(400).json("All fields are required...");
  
    if(!validator.isStrongPassword(password))
      return res.status(400).json("Password must be a strong...")
  
    user = new userModel({
      nameUser, userName, password, rolUser
    })

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)

    await user.save();
    const token = createToken(user._id)

    res.status(200).json({_id: user._id, nameUser, userName, rolUser, token })
  }catch(error){
    console.log(error);
    res.status(500).json(error);
  }
};

const userLogin = async (req,res) =>{
  const {userName, password} = req.body;
  try {
    let user = await userModel.findOne({ userName });
    
    if(!user) 
      return res.status(400).json("Invalid userName or password");
    
    const isValidPassword = await bcrypt.compare(password, user.password);

    if(!isValidPassword)
      return res.status(400).json("Invalid password");

    const token = createToken(user._id)
    res.status(200).json({_id: user._id, nameUser: user.nameUser, userName, rolUser: user.rolUser, token })
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

const findUser = async (req, res) =>{
  const userId = req.params.userId;
  try {
    const user = await userModel.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

const getUsers = async (req, res) =>{
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

module.exports = {registerUser,userLogin,findUser,getUsers};