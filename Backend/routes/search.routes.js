const searchController = require("../controllers/search.controller")

module.exports = (app)=>{
    app.get("/karmMitra/search/trade" , searchController.searchByTrade)
    app.get("/karmMitra/getAllLabour" , searchController.getAllLabour)
}