const express = require("express")
const app = express();

const flash = require("connect-flash")
const expressSession = require("express-session")

const db =require("./config/mongoose-connection") 

require("dotenv").config();
// now you can use all the keys stored in the .env file 

const index = require("./routes/index")
const ownersRouter = require("./routes/onwersRouter")
const productsRouter= require("./routes/productsRouter")
const usersRouter  = require("./routes/usersRouter")

const cookieParser = require("cookie-parser")
const path= require("path")

app.set("view engine","ejs")
app.use(cookieParser())
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))

app.use(flash())

app.use(
    expressSession({
        resave:false,
        saveUninitialized:false,
        secret : process.env.EXPRESS_SESSION_SECRET
    })
)



app.use("/",index)
app.use("/owners",ownersRouter)
app.use("/products",productsRouter)
app.use("/users",usersRouter)


app.listen(3000,()=>{
    console.log("Server is up and runing")
});


