
const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'giorgikirvalidzee@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app,${name}. Let me know how you get a long with that app.`,
    })
}
const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'giorgikirvalidzee@gmail.com',
        subject: 'Sorry to see you go',
        text: `goodbye ${name} , come back!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}