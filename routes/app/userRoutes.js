const express=require('express');
const { registeredUser } = require('../../controllers/user/auth');
const routes=express.Router();

routes.route("/signup").post(registeredUser)

module.exports=routes;