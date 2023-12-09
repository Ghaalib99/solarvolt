import { readFile } from "fs/promises";

const nodemailer = require("nodemailer");

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // e.g., 'gmail' or use your SMTP settings
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Function to send an email

// ...

export const sendEmail = async (formData) => {
  // Check if formData.file is present
  const fileAttachment = formData.file
    ? {
        filename: "user-file.png", // Change the filename as needed
        content: await readFile(formData.file.name, { encoding: "base64" }),
        encoding: "base64",
      }
    : null;

  // Email configuration
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "olaolajide10@gmail.com",
    subject: "New Form Submission",
    html: `
      <p>You have a new form submission:</p>
      <ul>
        <li>First Name: ${formData.firstname}</li>
        <li>Last Name: ${formData.lastname}</li>
        <li>Email: ${formData.email}</li>
        <li>Phone Number: ${formData.phoneNumber}</li>
        <li>Occupation: ${formData.occupation}</li>
        <li>Income: ${formData.income}</li>
        <li>Gender: ${formData.gender}</li>
        <li>Date of Birth: ${formData.dateOfBirth}</li>
        <li>Address: ${formData.address}</li>
        <li>State: ${formData.city}</li>
      </ul>
    `,
    attachments: fileAttachment ? [fileAttachment] : [],
  };

  try {
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);
  } catch (error) {
    console.error("Error sending email: ", error);
    throw error;
  }
};

// sendEmail(formData);
