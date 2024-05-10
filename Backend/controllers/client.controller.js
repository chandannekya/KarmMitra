const clientModel = require("../models/client.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
exports.signup = async(req , res)=> {

    
    
    try {
        const client = {
             name : req.body.name,
            mobile_number : req.body.mobile_number,
            password : bcrypt.hashSync(req.body.password , 8),
            
            address : req.body.address,
            email : req.body.email
        }
        await clientModel.create(client)
        res.status(201).send({
            message : "Client registered succesfully"
        })
    } catch (error) {
        console.log("Error while registering the client" , error , req.body)
        res.status(500).send({
            message : "Error while registering the client"
        })
    }
}

exports.signin = async(req , res)=> {
    try {
        const client = await clientModel.findOne({mobile_number : req.body.mobile_number})
        if (!client) {
            return res.status(400).send({
                message: "Mobile number not Found"
            })
        }
        if (!bcrypt.compareSync(req.body.password, client.password)) {
            return res.status(401).send({
                message: "Wrong password"
            })
        }

        const secret = "This is my secret"
        const token = jwt.sign({id : client.id} , secret , {
            expiresIn : 3600 
        })

        res.status(200).send({
            name: client.name,
            email : client.email,
            mobile_number: client.mobile_number,
            token : token
        });


    }catch(err) {
        console.log(err)
        res.status(500).send({
            message : "Error while signing in"
        })
    }
}