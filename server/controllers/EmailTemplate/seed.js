const EmailTemplate = require("../../config/database/mongoose/models/EmailTemplate")

const templates_17_01 = [{
    name: 'TEMPLATE_ONE',
    content: `hey {{name}}, wishing you a happy birthday. Hope things will be good for you!`
}, {
    name: 'TEMPLATE_TWO',
    content: `hey {{name}}, happy birthday to you. Hope things will be good for you!`
}]

const templates = [...templates_17_01]

const seedTemplates = async () => {
    return await EmailTemplate.insertMany(templates)
}

module.exports = {
    seedTemplates
}