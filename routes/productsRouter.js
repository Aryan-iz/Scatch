const express = require("express")
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");

router.get("/",(req,res)=>{
    res.send("Products Router Working")
})


router.post("/create",upload.single("image"), async(req,res)=>{
    
    try{

        
        let {name,price,discount,bgcolor,panelcolor,textcolor} = req.body;
        let image = req.file.buffer;
     
      let product = await  productModel.create({
            image,
            name,
            price,
            discount,
            bgcolor,
            panelcolor,
            textcolor
        })
        
        // res.send(product)
        req.flash("success","Product is created Successfully")
        res.redirect("/owners/admin")
    }catch(error){
        res.send(error.message)
    }

}) 


module.exports = router;