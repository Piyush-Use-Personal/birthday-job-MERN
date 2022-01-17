require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SEND_GRID_API_KEY)
const _ = require('lodash')

// set compiled type for lodash
_.templateSettings.interpolate = /{{([\s\S]+?)}}/g;

// const transporter = NodeMailer.createTransport({
//     service: 'gmail',
//     // host: 'mail.gmail.com',
//     auth: {
//         user: process.env.MAIL_SERVICE_ID,
//         password: process.env.MAIL_SERVICE_PASSWORD
//     },
//     // port: 465,
//     // secure: true, // use SSL
// });

class MailService {

    convertToLodash = (content, data) => {
        const compiled = _.template(content);
        const message = compiled(data);
        return {
            raw: message,
            message: decodeURI(message).trim(),
        }
    }

    send = ({ to, subject, text, html }) => {
        return new Promise(async (resolve, reject) => {
            if (!to.length) reject('To cannot be empty!')
            const options = {
                from: process.env.MAIL_SERVICE_ID,
                to: to.join(),
                subject,
                text,
                html
            }
            try {
                const info = await sgMail
                    .send(options)
                resolve(info)
            } catch (error) {
                reject(error)
            }
        })
    }
}

module.exports = new MailService()
