# Hakeem Frontend

The frontend application for **Hakeem**, an AI-powered patient-owned medical history organizer and Medical CV generator.

## 📖 Overview

Hakeem helps patients organize scattered medical records into a structured, chronological Medical CV. The frontend provides an intuitive interface for uploading medical documents, reviewing extracted information, interacting with AI, and managing personal medical history.

> **Note:** Hakeem is **not** a diagnostic or treatment system. It only organizes patient-owned medical records.

---

## 🚀 Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Query / TanStack Query
- React Hook Form
- Zod
- Axios
- Framer Motion

---

## 📂 Project Structure

```
src/
├── app/
├── components/
├── features/
├── hooks/
├── lib/
├── services/
├── types/
├── utils/
└── styles/
```

---

## ✨ Features

### Authentication

- User Registration
- Login
- Forgot Password
- Protected Routes

### Dashboard

- Patient Overview
- Recent Documents
- Upcoming Reminders

### Medical Documents

- Upload Documents
- View Documents
- Preview Files
- Delete Documents

### AI Extraction

- View Extracted Data
- Review Low Confidence Fields
- Confirm or Reject Information

### Medical History

- Conditions
- Medications
- Allergies
- Lab Results
- Surgeries
- Visits

### Medical CV

- Generate Medical CV
- View Medical CV
- Download PDF
- Share Medical CV

### AI Chat

- Ask Questions About Medical History
- View Source References
- Patient-specific RAG Responses

### Reminders

- Medication Reminders
- Appointment Reminders
- Follow-up Reminders
- Refill Reminders

### Profile

- Edit Profile
- Privacy Settings
- Account Settings

### Admin (Optional)

- Dashboard
- User Management
- Platform Monitoring

---

## 📦 Installation

```bash
git clone https://github.com/<org>/frontend.git

cd frontend

npm install
```

---

## ▶️ Run Development Server

```bash
npm run dev
```

---

## 🏗️ Build

```bash
npm run build
```

---

## 🧪 Lint

```bash
npm run lint
```

---

## 🌐 Environment Variables

Create a `.env.local` file.

```env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_APP_URL=
```

---

## 🎯 MVP Scope

- Patient Authentication
- Medical Document Upload
- AI-assisted Extraction Review
- Medical History
- Medical CV Generation
- AI Chat
- Reminders
- Patient Profile

---

## 🔒 Security

- JWT Authentication
- HTTPS
- Protected Routes
- Secure API Communication

---

## 📌 Repository

This repository contains only the frontend application.

Backend and Mobile applications are maintained in separate repositories.

---
