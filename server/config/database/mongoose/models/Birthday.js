const mongoose = require('mongoose');
const { Schema } = mongoose;
const BirthdaySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    template: {
        type: String,
        ref: 'EmailTemplate'
    }
}, { timestamps: true })

BirthdaySchema.statics.findNonCompleted = function(
    query = {}, 
    ...next
) {
    const q = {
        ...query,
        isCompleted: false
    }
    return this.find(q, ...next);
};

module.exports = mongoose.model('BirthDay', BirthdaySchema);
