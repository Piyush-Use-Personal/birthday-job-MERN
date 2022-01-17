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

EmailTemplateSchema.statics.insertUniqueMany = async function(
    list,
    key, 
    ...next
) {

    let existingData = await this.find({
        [key]: {
            $in: [...list.map(l => l[key])]
        }
    }).lean()
    existingData = existingData.map(i => i[key])
    const newList = []
    list.forEach((item) => {
        if(!existingData.includes(item[key])){
            newList.push(item)
        }
    })

    return this.insertMany(newList, ...next);
};

module.exports = mongoose.model('EmailTemplate', EmailTemplateSchema);
