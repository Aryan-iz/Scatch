const userModel = require("../models/user-model");
const jwt = require("jsonwebtoken"); // Make sure this is required

module.exports = async function (req, res, next) {
    if (!req.cookies.token) {
        req.flash("error", "You need to login first!");
        return res.redirect("/");
    }

    try {
        // Verify the token
        let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);

       
        let user = await userModel.findOne({ email: decoded.email }).select("-password");

        if (!user) {
            req.flash("error", "User not found");
            return res.redirect("/");
        }

        req.user = user; // Attach user to request
        next();
    } catch (error) {
        console.error("Auth middleware error:", error.message);
        req.flash("error", "Something went wrong");
        res.redirect("/");
    }
};
