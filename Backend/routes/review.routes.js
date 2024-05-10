const review = require("../controllers/reviews.controller.js");
const authMw = require("../middlewares/auth.mw")

module.exports = (app) => {
    
    app.post("/karmMitra/review/upvotes",[authMw.verifyToken], review.upvotes);
    app.post("/karmMitra/review/feedback",[authMw.verifyToken], review.feedback);
}
