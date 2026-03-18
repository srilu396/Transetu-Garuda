import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { name, email, company, phone, service, location, message } = formData;

    console.log('Sending email for:', name);

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company}
        Phone: ${phone}
        Service: ${service}
        Location: ${location}
        Message: ${message}
      `,
    });

    console.log('Email sent successfully');

    // ALWAYS return 200 with success message
    return new NextResponse(
      JSON.stringify({ 
        success: true, 
        message: 'Message sent successfully!' 
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Error:', error);
    
    return new NextResponse(
      JSON.stringify({ 
        success: false, 
        message: 'Failed to send message' 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}