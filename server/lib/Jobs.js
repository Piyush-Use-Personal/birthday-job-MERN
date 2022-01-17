const schedule = require("node-schedule");
const Birthday = require("../config/database/mongoose/models/Birthday");
const EmailTemplate = require("../config/database/mongoose/models/EmailTemplate");
const MailService = require('./MailService')

const sendEmail = async (person) => {
    const { template, email, name, dob } = person
    const templateObject = await EmailTemplate.findOne({
        _id: template
    }).lean()
    const content = MailService.convertToLodash(templateObject.content, { name })
    const output = await MailService.send({
        to: [email],
        subject: 'Happy Birthday',
        text: content.message,
        html: content.message
    })
}

const runSchedular = () => {
  schedule.scheduleJob("* * * * *", async () => {
      __logger.info(`job is running at ${new Date()}`)
      const promisers = []
      const birthdays = await Birthday.findNonCompleted().lean()
      for (let i = 0; i < birthdays.length; i++) {
          const person = birthdays[i];
          promisers.push(sendEmail(person))
          // run some method
      }
      const output = await Promise.all(promisers)
  });
}

module.exports = {
    runSchedular
}