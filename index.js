const express= require('express');
const dotenv = require("dotenv");
dotenv.config();

const mongoose=require("mongoose");
const userRoutes=require("./routes/user.routes");

//we only make a single server using this express()
const app=express();
app.use(express.json());

const port=process.env.PORT;

//user routes
app.use("/user",userRoutes);


mongoose.connect(`${process.env.DB_URI}`)
.then(()=> console.log("connected to DB at:",process.env.DB_URI))
.catch((e) => console.log("Failed to connect to DB", e));

app.listen(port,()=>{
    console.log("express server is listening on port "+port);
});