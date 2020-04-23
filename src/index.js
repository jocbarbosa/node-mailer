const express = require('express');
const app = express();

require('dotenv').config()
const nodemailer = require('nodemailer');

const port = 3000;

const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;


app.get('/', (request, response) => {
    response.send('Hello World');
});

app.get('/send', (request, response) => {

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: { user, pass }
    });

    transporter.sendMail({
        from: process.env.FROM,
        to: process.env.RECIPIENT,
        replyTo: process.env.REPLY_TO,
        subject: 'Hello, you\'re welcome',
        text: 'Olá, muito obrigado por se cadastrar na nossa plataforma!'
    }).then(info => {
        response.send(info);
    }).catch(error => {
        response.send(error);
    });

});

app.listen(port, () => {
    console.log('Server running on port: ' + port);
});