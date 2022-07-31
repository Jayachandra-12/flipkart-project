//create router to handle user api reqs
const exp = require("express");
const userApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");
//import bcryptjs for password hashing
const bcryptjs = require("bcryptjs");
//import jsonwebtoken to create token
const jwt=require("jsonwebtoken")

//to extract body of request object
userApp.use(exp.json());

//USER API Routes

//create route to user login
userApp.post(
  "/login",
  expressAsyncHandler(async (request, response) => {
    //get userCollectionObject
    let userCollectionObject = request.app.get("userCollectionObject");
    //get user credentials obj from client
    let userCredObj=request.body
    //seacrh for user by username
    let userOfDB=await userCollectionObject.findOne({email:userCredObj.email});
    //if username not existed
    if(userOfDB==null || userOfDB.account!=userCredObj.account){
      response.send({message:"Invalid user"})
    }
    //if username existed
    else{
      //compare passwords
      let status=await bcryptjs.compare(userCredObj.password,userOfDB.password);
      //if passwords not matched
      if(status==false){
        response.send({message:"Invalid password"})
      }
      //if passwords are matched
      else{
        //create token
        let token=jwt.sign({username:userOfDB.username},'abcdef',{expiresIn:60})
        //send token
        response.send({message:"success",payload:token,userObj:userOfDB})
      }
    }
  })
);

//create a route to 'create-user'
userApp.post(
  "/create-user",
  expressAsyncHandler(async (request, response) => {
    //get userCollectionObject
    let userCollectionObject = request.app.get("userCollectionObject");
    //get userObj from client
    let newUserObj = request.body;
    //seacrh for user by username
    let userOfDB = await userCollectionObject.findOne({
      email: newUserObj.email,
    });
    //if user existed
    if (userOfDB !== null) {
      response.send({
        message: "email already exists",
      });
    }
    //if user not existed
    else {
      //hash password
      let hashedPassword = await bcryptjs.hash(newUserObj.password, 6);
      //replace plain password with hashed password in newUserObj
      newUserObj.password = hashedPassword;
      //insert newUser
      await userCollectionObject.insertOne({username:newUserObj.username,email:newUserObj.email,password:newUserObj.password,account:newUserObj.account});
      //send response
      response.send({ message: "New User created" });
    }
  })
);

module.exports = userApp;