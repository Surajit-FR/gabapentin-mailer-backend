import { transporter } from "./server.js";

// const transporter = require("../server.js")

export const orderMailer = async (req, res, next) => {
    const {
        address,
        city,
        country,
        date,
        email,
        firstName,
        gender,
        height,
        id,
        lastName,
        phoneNumber,
        price,
        product,
        state,
        weight,
        zip,

    } = req.body;

    const mailToAdmin = {
        from: "Gabapentin <admin@gabapentinshop.com>",
        // to: "admin@gabapentinshop.com, support@gabapentinshop.com",
        to: 'arpan.tarafder@ariprodesigns.com',
        subject: "New Order",
        html:
            `
<table style="max-width:767px; width:100%; margin:0 auto; border:1px solid #ddd; padding:20px;">
    <tr>
        <th style="font-size:22px; color:#000; line-height:28px; text-align:left; width:100%; padding:0 0 5px 0; margin:0; text-decoration:underline;">
        ${firstName} ${lastName} has ordered from Gabapentinshop.com 
        </th>
    </tr>
     <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>Name:</b> ${firstName} ${lastName}</th>
     </tr>
    <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>Email:</b> ${email}</th>
    </tr>
    <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>Phone No:</b> ${phoneNumber}
        </th>
    </tr>
    <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>Product:</b> ${product}
        </th>
    </tr>
    <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>Product Id:</b> ${id}
        </th>
    </tr>
    <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>Price:</b> $${price}
        </th>
    </tr>
   <tr>
        <th style="font-size:22px; color:#000; line-height:28px; text-align:left; width:100%; padding:0 0 5px 0; margin:0; text-decoration:underline;">
        Address Information
        </th>
    </tr>
      <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>Address:</b> ${address}
        </th>
    </tr>
    <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>Country:</b> ${country}
        </th>
    </tr>
    <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>State:</b> ${state}
        </th>
    </tr>
    <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>City:</b> ${city}
        </th>
    </tr>
    <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>ZipCode:</b> ${zip}
        </th>
    </tr>
       <tr>
        <th style="font-size:22px; color:#000; line-height:28px; text-align:left; width:100%; padding:0 0 5px 0; margin:0;text-decoration:underline;">
        Other Information
        </th>
    </tr>
    <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>Gender:</b> ${gender}
        </th>
    </tr>
    <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>D.O.B:</b> ${date}
        </th>
    </tr>
    <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>Height:</b> ${height}
        </th>
    </tr>
    <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>Weight:</b> ${weight}
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
        Thank You for Shopping from Gabapentinshop
        </th>
    </tr>
     <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>Product:</b> ${product}</th>
     </tr>
    <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>Price:</b> $${price}</th>
    </tr>
    <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>Phone No:</b> ${phoneNumber}
        </th>
    </tr>
    <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>Email:</b> ${email}
        </th>
    </tr>
    <tr>
        <th style="font-size:18px; color:#000; line-height:20px; font-weight:400; text-align:left; width:100%; padding:0 0 5px 0; margin:0;">
        <b>Support Email:</b> support@gabapentinshop.com
        </th>
    </tr>
   
</table>
<div>
    <p style="margin:0;">Best Regards</p>
    <p style="margin:0;">
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
