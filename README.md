# Mani Electricals & Electronics — Business Website

🌐 **Live Website:** [manielectricals.com](https://manielectricals.com)

A **production-ready full-stack business website** developed for Mani Electricals & Electronics and deployed on a custom `.com` domain.

The platform provides a professional product catalogue, company information, customer enquiry system, and a secure admin panel for managing products and content.

## 🚀 Live Deployment

* **Frontend:** React.js + Vite
* **Backend:** Node.js + Express.js
* **Database:** MongoDB
* **Image Storage:** Cloudinary
* **Authentication:** JWT
* **Email Service:** Nodemailer
* **Domain:** Custom `.com` domain
* **Deployment:** Production deployment with live frontend and backend

## ✨ Key Features

* Responsive and production-ready business website
* Product catalogue and product details
* Secure admin dashboard
* JWT-based admin authentication
* Product CRUD operations
* Cloudinary-based product image management
* Customer enquiry form
* Email notifications using Nodemailer
* Forgot-password flow with email OTP
* MongoDB-based persistent data storage
* RESTful backend APIs

## 🏗️ System Architecture

```text
                    Custom .com Domain
                           │
                           ▼
                    React Frontend
                           │
                     REST API Calls
                           │
                           ▼
                 Node.js + Express API
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
      MongoDB          Cloudinary       Nodemailer
     Product/Data      Image Storage     Email/Enquiry
          │
          ▼
      Admin System
          │
     JWT Authentication
```

## 🔐 Authentication

The admin panel uses JWT-based authentication with bcrypt password hashing.

```text
Admin Login
     │
     ▼
Email + Password
     │
     ▼
bcrypt Verification
     │
     ▼
JWT Token
     │
     ▼
Protected Admin APIs
```

The system also includes password recovery through **email OTP with expiration**.

## 📦 Admin Product Management

The admin can:

* Add products
* Update products
* Delete products
* Upload product images
* Replace product images
* Manage product information

Product images are stored on Cloudinary, while product data is persisted in MongoDB.

## 📩 Customer Enquiry System

Customers can submit business enquiries through the website.

The backend processes the enquiry and uses **Nodemailer** to send the enquiry details through email.

## 🛠️ Tech Stack

**Frontend**

* React.js
* Vite
* React Router
* Axios
* Tailwind CSS

**Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Nodemailer
* Multer
* Cloudinary

**Deployment & Services**

* Custom `.com` Domain
* Production Deployment
* MongoDB
* Cloudinary
* Gmail SMTP
