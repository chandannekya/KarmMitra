const labourModel = require("../models/labour.model")
const clientModel = require("../models/client.model")
const jwt = require("jsonwebtoken")



const verifyToken = (req, res, next) => {
    const token = req.headers["access-token"];

    if (!token) {
        return res.status(403).send({
            message: "No token found: Unauthorized"
        });
    }

    jwt.verify(token, "This is my secret", async (err, decoded) => {
        if (err) {
            console.error("Token verification error:", err);
            return res.status(401).send({
                message: "Unauthorized"
            });
        }

        try {
            const labour = await labourModel.findById(decoded.id);
            const client = await clientModel.findById(decoded.id);

            if (!labour && !client) {
                return res.status(401).json({ message: 'Unauthorized' });
            }

            
            next();
        } catch (error) {
            console.error("Database error:", error);
            return res.status(500).send({
                message: "Internal Server Error"
            });
        }
    });
};

module.exports = {
    verifyToken : verifyToken
}