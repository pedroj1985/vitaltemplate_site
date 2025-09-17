"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
  form?: string;
};

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
  // Limitar el mensaje a 140 caracteres
  if (name === "message" && value.length > 140) return;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    // Validación de campos obligatorios y longitud
    const newErrors: any = {};
    if (!form.name.trim()) newErrors.name = 'Campo requerido';
    else if (form.name.length > 100) newErrors.name = 'Máximo 100 caracteres';
    if (!form.email.trim()) newErrors.email = 'Campo requerido';
    else if (form.email.length > 100) newErrors.email = 'Máximo 100 caracteres';
    if (!form.message.trim()) newErrors.message = 'Campo requerido';
    else if (form.message.length > 140) newErrors.message = 'Máximo 140 caracteres';
    // Validación de correo electrónico
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (form.email && !emailRegex.test(form.email)) newErrors.email = 'Correo electrónico inválido (debe contener "@")';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      toast.error('Por favor, completa todos los campos requeridos correctamente.');
      return;
    }
    setSending(true);
    try {
  // Forzar la URL sin slash final
  const apiUrl = "/api/contact";
  const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      let data = null;
      try {
        data = await res.json();
      } catch (jsonErr) {
        // Si la respuesta no es JSON válido
        throw new Error('Error inesperado en el servidor (respuesta no JSON)');
      }
      if (!res.ok)
        throw new Error(data?.error || 'Error al enviar');
      toast.success('¡Gracias por tu mensaje! Te responderemos pronto.');
      setForm({ name: '', email: '', message: '' });
      setErrors({});
    } catch (err: any) {
      setErrors({ form: err.message || 'Error inesperado' });
      toast.error(err.message || 'Error inesperado');
    }
    setSending(false);
  };

  return (
    <>
      <form className="max-w-md mx-auto space-y-3" autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="w-full px-3 py-2 rounded bg-[#23272b] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#3270b3]"
            maxLength={100}
            value={form.name}
            onChange={handleChange}
            title={errors.name ? errors.name : ''}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-3 py-2 rounded bg-[#23272b] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#3270b3]"
            maxLength={100}
            value={form.email}
            onChange={handleChange}
            title={errors.email ? errors.email : ''}
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Mensaje (máx. 140 caracteres)"
            rows={3}
            className="w-full px-3 py-2 rounded bg-[#23272b] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#3270b3]"
            maxLength={140}
            value={form.message}
            onChange={handleChange}
            title={errors.message ? errors.message : ''}
          />
        </div>
        <button type="submit" className="w-full bg-[#3270b3] py-2 rounded font-mono hover:bg-[#275b8f] transition-colors" disabled={sending}>{sending ? "Enviando..." : "Enviar Mensaje"}</button>
      </form>
      <ToastContainer position="top-center" autoClose={3500} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
}
