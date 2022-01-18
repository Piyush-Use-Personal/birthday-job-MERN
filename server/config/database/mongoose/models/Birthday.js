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

BirthdaySchema.methods.isBirthDayToday = function(){
    const date = new Date(this.dob)
    const today = new Date()
    if(date.getMonth() === today.getMonth() && date.getDate() === today.getDate()){
        return true
    }
    return false
}

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
