import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD } from './env';
const transporter=nodemailer.createTransport(transporter:{
    service:'gmail',
    auth:{
        user:'fahamijemal1@gmail.com',
        pass:EMAIL_PASSWORD,
    }
})