// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import React from 'react';
import ContactEmail from '@/app/components/emails/ContactEmail.jsx';
import { render } from '@react-email/render';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Faltan campos obligatorios.' }, { status: 400 });
  }

  // Configura el transporte de nodemailer usando variables SMTP personalizadas
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    const emailHtml = await render(
      React.createElement(ContactEmail, { name, email, message })
    );
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO || process.env.SMTP_USER,
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
      html: emailHtml,
    });
    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error('Error enviando correo:', error);
    return NextResponse.json({ error: error?.message || String(error) }, { status: 500 });
  }
}
