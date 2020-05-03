const express = require('express');
const routes = express.Router();

const nodemailer = require('nodemailer');

const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

routes.get('/send', (request, response) => {
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

module.exports = routes;