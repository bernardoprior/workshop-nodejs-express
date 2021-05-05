const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pingSchema = new Schema({
    doneBy: {
        type: Schema.Types.ObjectId,
        ref: "jeKer",
    },

    createdAt: { type: Date, default: Date.now },
});

const Ping = mongoose.model("ping", pingSchema);
module.exports = Ping;
