
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, phone, email, message } = await request.json();

        // Validate essential fields
        if (!name || !phone || !message) {
            return NextResponse.json(
                { error: 'Bitte füllen Sie alle Pflichtfelder aus (Name, Telefon, Nachricht).' },
                { status: 400 }
            );
        }

        // Configure Nodemailer transporter (User fills these in .env.local)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.SMTP_FROM || '"G-San Website" <noreply@g-san.ch>',
            to: process.env.SMTP_TO || 'info@g-san.ch',
            subject: `Neue Kontaktanfrage von ${name}`,
            text: `
                Neue Nachricht über das Website-Widget:
                
                Name: ${name}
                Telefon: ${phone}
                Email: ${email || 'Keine Angabe'}
                
                Nachricht:
                ${message}
            `,
            html: `
                <h3>Neue Kontaktanfrage</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Telefon:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email || 'Keine Angabe'}</p>
                <br/>
                <p><strong>Nachricht:</strong></p>
                <p>${message.replace(/\n/g, '<br/>')}</p>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Nachricht erfolgreich gesendet!' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.' },
            { status: 500 }
        );
    }
}
