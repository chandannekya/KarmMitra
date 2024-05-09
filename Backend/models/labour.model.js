const mongoose = require("mongoose");

const labourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile_number: {
        type: Number,
        required: true,
        unique : true
    },

    password : {
        type: String,
        required : true
    },
    address: {
        address1 : {
            type : String,
            required : true
        },
        district: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        pincode: {
            type: Number,
            required: true
        }
    },
    trade: {
        type: String,
        required: true
    },
    photo: {
        data: Buffer,
        contentType: String 
    },
    aadhaar_no: {
        type: Number
    },
    account_details: {
        account_num : {
            type : Number,
        } ,
        ifsc : {
            type: String
        }
    },
    reviews: {
        upvote: {
            type: [String],
            default: []
        },
        feedback: {
            type: [{client:String , comment: String }],
            default: []
        }
    }
} , {timestamps : true , versionKey : false});

module.exports = mongoose.model("Labour", labourSchema);
