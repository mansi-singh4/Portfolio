# Portfolio CMS

A full-stack portfolio platform built with Next.js, Prisma, PostgreSQL, and Auth.js. Designed to showcase projects, experiences, and achievements while providing a custom content management system for managing portfolio content without modifying code.

## Live Demo

🔗 https://portfolio-ten-eta-17.vercel.app/

---

## Features

### Portfolio Website

* Responsive modern UI
* Featured projects showcase
* Detailed project case studies
* About and contact sections
* Resume integration
* Smooth section navigation
* Mobile-friendly design

### Admin Dashboard

* Secure Google Authentication
* Create, edit, and delete projects
* Manage featured projects
* Upload and update project images
* Dynamic project content management
* Update portfolio content without redeployment

### Analytics

* Visitor analytics
* Project view tracking
* User engagement monitoring
* Performance insights with Vercel Speed Insights

---

## Tech Stack

### Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS

### Backend

* Next.js Server Actions
* Prisma ORM
* PostgreSQL (Neon)

### Authentication

* Auth.js
* Google OAuth

### File Storage

* UploadThing

### Analytics

* Vercel Analytics
* Vercel Speed Insights

### Deployment

* Vercel

---

## Why I Built This

Most portfolio websites are static and require code changes whenever new projects, experiences, or achievements need to be added.

I wanted a portfolio that could evolve over time, so I built a custom Portfolio CMS with an admin dashboard that allows content, projects, images, and featured sections to be managed dynamically.

The platform also includes analytics to understand visitor engagement and identify which content attracts the most attention.

---

## What Can Be Managed

The admin dashboard allows:

* Creating, editing, and deleting projects
* Managing featured projects
* Uploading project images
* Updating project descriptions
* Maintaining project case studies
* Customizing portfolio content without touching the codebase

---

## Project Structure

```text
src/
├── app/
├── components/
├── lib/
├── auth.ts

prisma/
├── schema.prisma

public/
├── images/
├── resume/
```

---

## Local Setup

### Clone Repository

```bash
git clone https://github.com/mansi-singh4/Portfolio.git
cd Portfolio
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
DATABASE_URL=

AUTH_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

UPLOADTHING_TOKEN=
```

### Generate Prisma Client

```bash
npx prisma generate
```

### Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Key Learnings

* Building full-stack applications with Next.js
* Authentication and authorization using Auth.js
* Database design with Prisma and PostgreSQL
* File upload workflows with UploadThing
* Analytics and user engagement tracking
* Production deployment using Vercel
* Designing maintainable content management systems
* Working effectively with AI-assisted development tools

---

## Future Improvements

* Drag-and-drop featured project ordering
* Rich text editor for project content
* Dashboard analytics panel
* Project categories and tags
* Blog integration

---

## Author

### Mansi Singh

Computer Science Student • Full-Stack Developer

Building software, exploring AI, and creating products that solve real-world problems.

* LinkedIn: https://www.linkedin.com/in/mansi-singh-90b521333/
* Portfolio: https://portfolio-ten-eta-17.vercel.app/

