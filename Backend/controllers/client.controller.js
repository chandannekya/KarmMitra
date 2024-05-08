const clientModel = require("../models/client.model")

exports.signup = async(req , res)=> {

    const client = {
        name : req.body.name,
        mobile_number : req.body.mobile_number,
        password : bcrypt.hashSync(req.body.password , 8),
        address : req.body.address,
        email : req.body.email
    }
    

    try {
        await clientModel.create(client)
        res.status(201).send({
            message : "Client registered succesfully"
        })
    } catch (error) {
        console.log("Error while registering the client" , error)
        res.status(500).send({
            message : "Error while registering the client"
        })
    }
}

exports.signin = async(req , res)=> {
    try {
        const client = await clientModel.findOne({mobile_number : req.body.mobile_number})
        if (!user) {
            return res.status(400).send({
                message: "Mobile number not Found"
            })
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).send({
                message: "Wrong password"
            })
        }

        res.status(200).send({
            name : user.name ,
            userId : user.trade , 
            email : user.mobile_number,
        })


    }catch(err) {
        console.log(err)
        res.status(500).send({
            message : "Error while signing in"
        })
    }
}