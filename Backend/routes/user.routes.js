const labourController = require("../controllers/labour.controller")
const clientController = require("../controllers/client.controller")
module.exports = (app) =>{
    app.post("/karmMitra/labour/signup" , labourController.signup)
    app.post("/karmMitra/labour/signin" , labourController.signin)
    app.post("/karmMitra/client/signup" , clientController.signup)
    app.post("/karmMitra/client/signin" , clientController.signin)

}