const express = require ("express")
const app = express ()
app.use(express.json())
app.get ("/",(req,res)=>{
    res.send ("hi! server is running")
})
app.listen(3000,()=>{
    console.log ("server is running on port 3000")
})
const logger =require("./middleware/logger");
app.use (logger);

const userRoutes = require("./routes/user");
app.use ("/user",userRoutes);

