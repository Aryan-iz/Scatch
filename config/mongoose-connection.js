const mongoose = require("mongoose")
const dbgr = require("debug")("development:mongoose")
const config = require("config")
//benefit of using coofig is that i automaticaly detect the environment (development or production) and use it
// it is much more modular way than .env 


mongoose
        .connect(`${config.get("MONGO_URI")}/scatch`)
        .then( ()=>{
            dbgr("Connected to MongoDB")
        })
        .catch((error)=>{
            dbgr("Error : ",error)
        } )


    
module.exports = mongoose.connection;