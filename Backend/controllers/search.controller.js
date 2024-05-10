const labourModel = require("../models/labour.model")
const clientModel = require("../models/client.model")

exports.getAllLabour = async(req ,res) =>{
    try {
        const labour = await labourModel.find()
        if(labour.length == 0) {
            return res.status(500).send({
                message : "No data found"
            })
        }
        const labor = [];
        for (let index = 0; index < labour.length; index++) {
            labor.push({
                id : labour[index].id,
                name : labour[index].name ,
                address : labour[index].address,
                trade : labour[index].trade,
                reviews : labour[index].reviews,
                mobile_number : labour[index].mobile_number
            })
        }
        return res.status(200).send(labor)
    } catch (error) {
        console.log(err)
        return res.status(500).send({
            message : "Error While fetching category"
        })
    }
}

exports.searchByTrade = async(req, res) =>{
    try{
        const labour = await labourModel.find({trade : req.body.trade})
        if(labour.length == 0) {
            return res.status(500).send({
                message : "No data found"
            })
        }
        const labor = [];
        for (let index = 0; index < labour.length; index++) {
            labor.push({
                id : labour[index].id,
                name : labour[index].name ,
                address : labour[index].address,
                trade : labour[index].trade,
                reviews : labour[index].reviews,
                mobile_number : labour[index].mobile_number
            })


            
        }
        return res.status(200).send(labor)
    }catch (err) {
        console.log(err)
        return res.status(500).send({
            message : "Error While fetching category"
        })
    }
}
