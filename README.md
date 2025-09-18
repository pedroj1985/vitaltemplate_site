
# 🧩 VitalTemplate Site

Este repositorio es una plantilla base para crear sitios web modernos usando **Next.js**, **Tailwind CSS** y **TypeScript**. Está estructurado con el nuevo **App Router** de Next.js y listo para desplegar en **Vercel**.

---

## 🚀 Tecnologías utilizadas

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vercel](https://vercel.com/) para despliegue

---

## 📦 Instalación

```bash
pnpm install
```

> Asegúrate de tener `pnpm` instalado. Si no lo tienes:
```bash
npm install -g pnpm
```

---

## 🧪 Desarrollo local

```bash
pnpm dev
```

El sitio estará disponible en `http://localhost:3000`

---

## ⚙️ Personalización

- Las rutas están en `src/app/`
- Los componentes reutilizables deben ir en `src/app/components/`
- Estilos globales en `src/app/globals.css`
- Variables de entorno deben configurarse en `.env.local` basado en `.env.example`

---

## 📁 Estructura del proyecto

```
public/               → Archivos estáticos
src/app/              → Rutas y páginas
src/app/components/   → Componentes reutilizables
.env.example          → Variables de entorno de ejemplo
next.config.ts        → Configuración de Next.js
tailwind.config.js    → Configuración de Tailwind
```

---

## ☁️ Despliegue en Vercel

Este proyecto está listo para desplegar en [Vercel](https://vercel.com/):

1. Crea una cuenta en Vercel
2. Importa este repositorio
3. Configura las variables de entorno
4. ¡Despliega!

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente.

---

## ✨ Créditos

Creado por [@pedroj1985](https://github.com/pedroj1985)
