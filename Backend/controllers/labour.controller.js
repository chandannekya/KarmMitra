const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const labourModel = require("../models/labour.model");

exports.signup = async (req, res) => {
    const labour = {
        name: req.body.name,
        mobile_number: req.body.mobile_number,
        password: bcrypt.hashSync(req.body.password, 8),
        address: req.body.address,
        trade: req.body.trade
    };

    try {
        await labourModel.create(labour);
        res.status(201).send({
            message: "Labour registered successfully"
        });
    } catch (error) {
        console.log("Error while registering the labour", error);
        res.status(500).send({
            message: "Error while registering the labour"
        });
    }
};

exports.signin = async (req, res) => {
    try {
        const labour = await labourModel.findOne({ mobile_number: req.body.mobile_number });
        if (!labour) {
            return res.status(400).send({
                message: "Mobile number not found"
            });
        }
        if (!bcrypt.compareSync(req.body.password, labour.password)) {
            return res.status(401).send({
                message: "Wrong password"
            });
        }

        res.status(200).send({
            name: labour.name,
            trade: labour.trade,
            mobile_number: labour.mobile_number

        });

    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: "Error while signing in"
        });
    }
};
