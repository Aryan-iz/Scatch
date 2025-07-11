const bcrypt = require("bcrypt");
const userModel = require("../models/user-model");
const generateToken = require("../utils/generateToken");

module.exports.registeredUser = async (req,res)=>{
    try {

    //Checking if User already exists
    let user= await userModel.findOne({email : req.body.email} )

    if (user ){
        console.log({user})
        return res.status(400).send("User Already Exists")
    }

    let {fullname, email, password}=req.body;

    // i will validate the data at the end of project via JOI package for now assume everything works fine
    
        bcrypt.genSalt(10,(error, salt)=>{

        bcrypt.hash(password,salt, async (error,hash)=>{
        
        if(error) return res.send(err)

        let createdUser= await userModel.create({
        fullname,
        email,
        password: hash
    })

        //Generate the Token
        const token = generateToken(createdUser);
        res.cookie("token",token)
        // res.send("User is Created Succesfully ")
        
        
        })

        req.flash("success","Account is Created Succecfully")
        res.redirect("/")
    })
    
    } catch (error) {
        console.log(error.message)
        req.flash("error", "Something went wrong. Please try again.");
    res.redirect("/");
    }


}


module.exports.loginUser = async function  (req , res){

    try{
        let {email,password}= req.body;

        let user = await userModel.findOne({email}) 

        if(!user){
            req.flash("error","Email or Password is Wrong ")
            res.redirect("/");
        }

        bcrypt.compare(password, user.password, (error, reuslt)=>{
            if (reuslt){
                let token = generateToken(user);
                res.cookie("token",token)
                // res.send("Yes you can login ")
                res.redirect("/shop")
            } else {
                req.flash("error","Email or Password is Wrong ")
                res.redirect("/");
                // return res.send("Email or Password is Wrong (compare)")
            }
             


        })
    }catch(error){
            console.log(error.message)}
            



}


module.exports.logout = function (req,res){
    res.cookie("token","");
    res.redirect("/")
}