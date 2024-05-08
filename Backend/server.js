const express = require('express')
const mongoose = require("mongoose")
const app = express()
const port = 3000

const url = "mongodb+srv://mohammadsahil4343:HnU8UIRiVAqwbEhf@karmmitra.i7jrwwy.mongodb.net/?retryWrites=true&w=majority&appName=KarmMitra"

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