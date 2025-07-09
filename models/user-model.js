const mongoose = require("mongoose")

const onwerSchema= mongoose.Schema({
    fullname: {
        type : String,
        minLength : 3,
        trim : true
    },
    email : String,
    pasword : String,
    cart :{
        type: Array,
        default: [] 
    },
    isadmin: Boolean,
    orders : {
        type : Array,
        default : [] 
    },
    contact : Number,
    picture : String   

})


module.exports = mongoose.model("owner",onwerSchema)