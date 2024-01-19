const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://0.0.0.0:27017/login");



connect.then(() => {
    console.log("Database connected Successfully!");
}).catch((error) => {
    console.error("Database connection failed:", error.message);
});

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;