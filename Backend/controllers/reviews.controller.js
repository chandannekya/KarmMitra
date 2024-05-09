const labourModel = require("../models/labour.model");
const clientModel = require("../models/client.model");

exports.upvotes = async (req, res) => {
    try {
        const labour = await labourModel.findById(req.body.labourId);
        const client = await clientModel.findById(req.body.clientId);

        labour.reviews.upvote.push(client._id);
        labour.save();

        client.history.upvoted.push(labour._id);
        client.save();

        return res.status(200).send({
            message : "Labour upvoted successfully."
        });

    } catch (error) {
        console.log(error); 
        return res.status(400).send({
            message : "Error in upvoting the labour."
        })
    }
}

exports.feedback = async (req, res) => {
    try {
        const labour = await labourModel.findById(req.body.labourId);
        const client = await clientModel.findById(req.body.clientId);
        const feedback = await req.body.comment;
        labour.reviews.feedback.push({client: client._id, comment: feedback});

        labour.save();
} catch(err) {
    console.log(err);
    return res.status(400).send({
        message : "Error in giving feedback."
    });
}

}