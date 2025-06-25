/*import nodemailer from 'nodemailer';
import "dotenv/config";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_PASSWORD
    }
})

export const sendEmail = async (to: string, subject: string, text: string) => {
    await transporter.sendMail({
        from: process.env.EMAIL_SENDER,
        to,
        subject,
        text
    });
}; */