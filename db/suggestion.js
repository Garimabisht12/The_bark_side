const mongoose = require("mongoose");

const suggestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    suggestion: {
        type: String,
        required: true,
    },
})

const Suggestion = new mongoose.model("Suggestion", suggestSchema);
module.exports = Suggestion;
