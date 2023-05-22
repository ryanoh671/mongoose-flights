const mongoose = require('mongoose');
// Shortcut variable 
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airling: String,
    airport: { type: String }, 
    flightNo: Number,
    cast: [String],
    nowShowing: Boolean
}, {
    timestamps: true
});