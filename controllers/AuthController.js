const bcrypt = require("bcrypt");
const UserModel = require("../models/UserModel");

const signup = async (req, res) =>{
    try{

        const {name, email, passowrd} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            res.status(409).
            json({message: "user is already exist", success: false});
        }

        const userModel = await UserModel({name, email, passowrd});
        userModel.passowrd = await bcrypt.hash(passowrd, 10);
         await userModel.save();
         res.status(201).
         json({
            message: "successfully logedin",
            success: true
         })


    }
    catch(error){
        res.status(500).
        json({
           message: "internal server error",
           success: false
        })
    }
}

module.exports = {
    signup
}