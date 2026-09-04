# Mani Electricals & Electronics — Business Website

A full-stack business website developed for **Mani Electricals & Electronics** to showcase electrical products, services, and company information while providing an admin panel for product management and customer enquiry handling.

## 🚀 Features

* Responsive business website built with React.js
* Product catalogue with product details and categories
* Admin dashboard for managing products
* Secure admin authentication using JWT
* Password hashing with bcrypt
* Forgot-password flow with email OTP
* Product image upload and cloud storage using Cloudinary
* Product create, update, and delete functionality
* Customer enquiry form with email notifications
* MongoDB database for users and product data
* RESTful APIs using Node.js and Express.js

## 🏗️ Architecture

```text
React Frontend
      │
      │ REST API
      ▼
Node.js + Express Backend
      │
      ├── Authentication
      │     └── JWT + bcrypt
      │
      ├── Product Management
      │
      ├── Enquiry Management
      │     └── Nodemailer
      │
      ├── MongoDB
      │
      └── Cloudinary
             └── Product Images
```

## 🔐 Authentication

The admin panel uses JWT-based authentication.

```text
Admin Login
     │
     ▼
Email + Password
     │
     ▼
bcrypt Password Verification
     │
     ▼
JWT Token
     │
     ▼
Protected Admin Routes
```

The application also provides:

* Secure password hashing with bcrypt
* JWT token validation middleware
* Password change functionality
* Forgot password using OTP
* OTP expiration after 10 minutes

## 📦 Product Management

The admin can:

* Add new products
* Upload product images
* Edit product information
* Replace product images
* Delete products
* Manage product categories and details

Product images are uploaded to **Cloudinary**, while product metadata is stored in MongoDB.

## 📩 Customer Enquiries

Customers can submit enquiries through the website with:

* Name
* Company
* Email
* Phone
* Requirement

The backend validates the enquiry and sends the submitted information through **Nodemailer** email integration.

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Axios
* Tailwind CSS
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* Nodemailer
* Multer
* Cloudinary

### Deployment / Services

* Render
* MongoDB
* Cloudinary
* Gmail SMTP

## 📁 Project Structure

```text
Mani-Electricals/
│
├── client/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── assets/
│       └── utils/
│
└── server/
    ├── config/
    ├── controllers/
    ├── middlewares/
    ├── model/
    ├── router/
    └── server.js
```

## 🔄 Product Management Flow

```text
Admin
 │
 ▼
Admin Dashboard
 │
 ▼
Create / Update Product
 │
 ▼
Express API
 │
 ├── Upload Image → Cloudinary
 │
 └── Product Data → MongoDB
 │
 ▼
Updated Product Catalogue
```

## 🎯 Highlights

* Built a complete production-style business website from frontend to backend.
* Implemented an admin CMS-style workflow for product management.
* Integrated authentication, cloud image storage, database persistence, and email communication.
* Designed REST APIs for authentication, products, and customer enquiries.
