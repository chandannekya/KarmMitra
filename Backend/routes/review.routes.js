const review = require("../controllers/reviews.controller.js");

module.exports = (app) => {
    app.post("/karmMitra/review/upvotes", review.upvotes);
    app.post("/karmMitra/review/feedback", review.feedback);
}
