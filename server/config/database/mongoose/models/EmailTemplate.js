const mongoose = require('mongoose');
const { Schema } = mongoose;
const EmailTemplateSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model('EmailTemplate', EmailTemplateSchema);
