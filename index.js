require("dotenv").config()
const app=require("./src/app")

// listen for request
app.listen(process.env.PORT, ()=>{
    console.log("listen on port", process.env.PORT);
})