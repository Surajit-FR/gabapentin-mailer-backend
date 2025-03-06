import { transporter } from "./server.js";

// const transporter = require("../server.js")

export const orderMailer = async (req, res, next) => {
    const { name, email, phone, message } = req.body;

    const mailToAdmin = {
        from: "Gabapentin <admin@gabapentinshop.com>",
        to: "admin@gabapentinshop.com, support@gabapentinshop.com",
        subject: "Contact form request",
        html: 
        `
<table style="max-width:767px; width:100%; margin:0 auto; border:1px solid #ddd; padding:20px;">
    <tr>
        <th style="font-size:22px; color:#000; line-height:28px; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        ${name} is trying to contact Gabapentinshop 
        </th>
    </tr>
     <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>Name:</b> ${name}</th>
     </tr>
    <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>Email:</b> ${email}</th>
    </tr>
    <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>Phone No:</b> ${phone}
        </th>
    </tr>
    <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>Message:</b> ${message}
        </th>
    </tr>
   
</table>
        `,
    };

    const mailToCustomer = {
        from: "Gabapentin <admin@gabapentinshop.com>",
        to: email,
        subject: "Thank You",
        html: `
<table style="max-width:767px; width:100%; margin:0 auto; border:1px solid #ddd; padding:20px;">
    <tr>
        <th style="font-size:22px; color:#000; line-height:28px; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        Thank You for choosing Gabapentinshop
        </th>
    </tr>
     <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>Name:</b> Gournag Sana</th>
     </tr>
    <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>Email:</b> ${email}</th>
    </tr>
    <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>Phone No:</b> ${phone}
        </th>
    </tr>
    <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>Message:</b> ${message}
        </th>
    </tr>
   
</table>
<div>
    <p style="margin:0; paffing:0;">Best Regards</p>
    <p style="margin:0; paffing:0;">
        <b>Gabapentinshop</b>
    </p>
</div>
        `,
    }
    // res.send({ msg: 'success' })
    const info = await transporter.sendMail(mailToAdmin);
    const infoCust = await transporter.sendMail(mailToCustomer);
    if (info.messageId) {
        res.send({ msg: "success" });
    } else {
        res.send({ msg: "fail" });
    }
};
