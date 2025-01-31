const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    serialNo: Number,
    name: String,
    class: String,
    batch: String,
    paymentDate: {type: String, required: true }, 
    mobile: String,
    payAmount: Number
});

module.exports = mongoose.model('Student', StudentSchema);
