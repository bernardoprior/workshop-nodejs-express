const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jeKerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    age: {
        type: Number,
        required: true,
    },

    deparment: {
        type: String,
        enum: ["Tech", "Inov", "Interno"],
        required: true,
        default: "Tech",
    },
});

const jeKer = mongoose.model("jeKer", jeKerSchema);
module.exports = jeKer;
