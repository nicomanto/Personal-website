# Personal Website

[![Niccolò's Website](https://api.checklyhq.com/v1/badges/checks/99c0d7c3-1787-40fe-a43f-931cf64e00e9?style=social&theme=light)](https://www.niccolomantovani.com/)

Repository of my personal website:  
👉 **https://www.niccolomantovani.com**

---

## 🚀 Introduction

This repository contains the source code of my personal portfolio website, built with modern web technologies and deployed on Vercel.

---

## 🛠 Technology Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Node.js](https://nodejs.org/)
- [ESLint](https://eslint.org/) — Linting tool
- [Nodemailer](https://nodemailer.com/about/) — Email sending service
- [Vercel](https://vercel.com/) — Deployment platform
- [reCAPTCHA](https://www.google.com/recaptcha/about/) — Spam protection

---

## 📁 Project Structure

- **app/** → Application routing and main structure (Next.js App Router)  
- **components/** → Reusable UI components  
- **hooks/** → Custom React hooks  
- **lib/** → Utility functions and shared logic  
- **public/** → Static assets (favicon, images, etc.)  
- **service/** → External API services  

---

## 💻 Run Locally

### Prerequisites
- Node.js installed

### 1️⃣ Clone the repository

```bash
git clone https://github.com/nicomanto/Personal-website.git
cd Personal-website
```

### 2️⃣ Install dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Configure environment variables

Before running the project, configure your environment variables in `.env` file:

- Email credentials for **Nodemailer**

Example:

```
EMAIL_USER=your_email
EMAIL_PASS=your_password
```

### 4️⃣ Start development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:3000
```

---

## 🚀 Deploy to Vercel

### Install Vercel CLI

```bash
npm i -g vercel
```

### Create production deployment

⚠️ Make sure environment variables are configured before deploying.

```bash
vercel --prod
```

---

## 📄 License

This project is for personal portfolio use.