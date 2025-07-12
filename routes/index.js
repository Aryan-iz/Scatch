const express = require("express");
const isLoggedIn = require("../middlewares/isLoggedIn");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");
const upload = require("../config/multer-config");
const router= express.Router();


router.get("/", function (req,res){
    // error message if someone is not logged in and try to access the logged in content or page
    let error = req.flash("error") 
    let success = req.flash("success") 
    res.render("index",{error,success,loggedIn:false})
})


router.get("/shop", isLoggedIn , async(req, res) => {
    const sortOrder = req.query.sortby === "asc" ? 1 : -1;

    const showDiscountOnly = req.query.discount === "true";
    const showNewCollection = req.query.newcollection === "true";


   const filter = {};
    if (showDiscountOnly) {
        filter.discount = { $gt: 0 }; // filter only discounted products
    }


    let products ;
    
    //checking for newcollectoin to be true
    if(showNewCollection){
       products = await productModel.find(filter).sort({ createdAt: sortOrder }).limit(4);
    }else{
        products = await productModel.find(filter).sort({ createdAt: sortOrder })
    }

    

    let success = req.flash("success");

    res.render("shop", { products, success, sortOrder, query:req.query });
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


router.get("/myaccount",isLoggedIn,async(req,res)=>{
    
    let user = await userModel.findOne({email:req.user.email}).populate("cart")
    console.log({user})

    res.render("myaccount",{user})

})


//updating the user info

router.post("/update-profile", upload.single("profileImage"), isLoggedIn, async (req, res) => {
    

        let {fullname,email}=req.body;
        // let profileImage= req.file.buffer;

        

        let user= await userModel.findOneAndUpdate({email : req.user.email},{fullname,email,picture:req.file.buffer})
        user.save();
        res.redirect("/myaccount")
}) 


module.exports = router;