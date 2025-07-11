const express = require("express");
const ownerModel = require("../models/owner-model");
const router = express.Router();

const joi = require("joi")

router.get("/admin",(req,res)=>{
    let success=req.flash("success")
    res.render("createproducts",{success})
})


// router.post("/products/create",createProduct)


// console.log(process.env.NODE_ENV )

if(process.env.NODE_ENV === 'development'){
    router.post("/create", async (req,res)=>{
    
    let onwers = await ownerModel.find();
    
    if(onwers.length > 0){
     return   res.status(500).send("You donot have permisiion to create a new Owner")
    }

    let {fullname, email, password}=req.body;


        console.log({fullname, email, password})

    let createdOwner =  await ownerModel.create({
        fullname,
        email,
        password
    })

    res.status(200).send(createdOwner);


    })
}

module.exports = router;