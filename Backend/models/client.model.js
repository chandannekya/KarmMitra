const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    name: {
        type: String,
         required: true
    },
    mobile_number: {
        type: Number,
        required: true,
        unique : true
    },
    email: {
        type: String,
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
            type: String,
            required: true
        }
    },
    photo: {
        data: Buffer,
        contentType: String 
    },
    history: {
        upvoted: {
            type: [String],
            default: []
        },
        connected_labour: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Labour'
        }
    }
});

module.exports = mongoose.model("Client", clientSchema);
