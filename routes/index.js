const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");
const router= express.Router();


router.get("/", function (req,res){
    // error message if someone is not logged in and try to access the logged in content or page
    let error = req.flash("error") 
    let success = req.flash("success") 
    res.render("index",{error,success,loggedIn:false})
})


router.get("/shop", isLoggedIn , async(req, res) => {
    const sortOrder = req.query.sortby === "asc" ? 1 : -1;

    let products = await productModel.find().sort({ createdAt: sortOrder });

    let success = req.flash("success");
    
    res.render("shop", { products, success, sortOrder });
});


router.get("/cart",isLoggedIn, async (req,res)=>{


    let user = await userModel.findOne({email : req.user.email}).populate("cart")


    console.log(user.cart);

    res.render("mycart",{user})
})


router.get("/addtocart/:id",isLoggedIn,async (req,res)=>{

   
    let user= await userModel.findOne({email: req.user.email})
    user.cart.push(req.params.id);
    user.save()
    req.flash("success"," Added to Cart ")
    res.redirect("/shop")
    

})


// adding remove to cart myself

router.get("/removefromcart/:id",isLoggedIn, async(req,res)=>{

    let user= await userModel.findOne({email : req.user.email})

    user.cart.splice(user.cart.indexOf(req.params.id),1)
    user.save();
    res.redirect("/cart")
})


//sortby also adding myself

// router.post("/shop",isLoggedIn,async(req,res)=>{

//     const sortOrder = req.query.sortby === "asc" ? 1 : -1;

//     let products=await productModel.find().sort({createdAt: sortOrder }).populate("cart");

//     res.render("shop",{products,sortOrder})

// })


module.exports = router;