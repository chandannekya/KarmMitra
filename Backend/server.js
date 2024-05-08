const express = require('express')
const mongoose = require("mongoose")
const app = express()
const port = 3000

app.use(express.json());

const url = "mongodb://127.0.0.1:27017/KarmMitra"

mongoose.connect(url)

const db = mongoose.connection

db.on("error" , () =>{
    console.log("Error while connecting to the mongo DB")
})
db.once("open" , ()=>{
    console.log("Connect to MongoDB")
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})


require("./routes/user.routes")(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})