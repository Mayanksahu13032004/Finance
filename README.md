# Finance Data Processing & Access Control Backend

## 📌 Overview

This project is a backend system for a finance dashboard that manages users, financial records, and role-based access control (RBAC).

It enables different user roles (Admin, Analyst, Viewer) to interact with financial data based on their permissions.

The system is designed with a clean architecture, proper API design, and scalable backend practices.

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Swagger (API Documentation)
* Deployment: Render

---

## 🌐 Live API

Base URL:
👉 https://finance-4o2n.onrender.com/api

---

## 🔐 Roles & Permissions

| Role    | Permissions                               |
| ------- | ----------------------------------------- |
| Admin   | Full access (users + records management)  |
| Analyst | View records + access dashboard analytics |
| Viewer  | Limited read-only access                  |

---

## 📁 Project Structure

```
src/
├── config/        # Database configuration
├── models/        # Mongoose schemas
├── controllers/   # API request handling
├── routes/        # API routes
├── middleware/    # Authentication & RBAC
├── services/      # Business logic layer
├── docs/          # Swagger configuration
└── app.js
server.js
```

---

## 🔑 Authentication

* JWT-based authentication
* Include token in headers:

```
Authorization: Bearer <TOKEN>
```

---

# 🧪 🔥 API TESTING FLOW (IMPORTANT)

Follow these steps using Postman to test the system end-to-end:

---

## 1️⃣ Register Admin

POST /auth/register

```
{
  "name": "Admin",
  "email": "admin@gmail.com",
  "password": "123456",
  "role": "admin"
}
```

---

## 2️⃣ Login Admin

POST /auth/login

```
{
  "email": "admin@gmail.com",
  "password": "123456"
}
```

👉 Copy the token for further requests

---

## 3️⃣ Register Users

### Analyst:

```
{
  "name": "Analyst",
  "email": "analyst@gmail.com",
  "password": "123456",
  "role": "analyst"
}
```

### Viewer:

```
{
  "name": "Viewer",
  "email": "viewer@gmail.com",
  "password": "123456",
  "role": "viewer"
}
```

---

## 4️⃣ Get All Users (Admin Only)

GET /users
(Header: Authorization required)

---

## 5️⃣ Update User Role

PATCH /users/role/:id

```
{
  "role": "analyst"
}
```

---

## 6️⃣ Create Financial Record (Admin Only)

POST /records

```
{
  "amount": 5000,
  "type": "income",
  "category": "salary",
  "date": "2026-04-03",
  "note": "Salary credited"
}
```

---

## 7️⃣ Get Records (Admin / Analyst)

GET /records?page=1&limit=5

---

## 8️⃣ Filter Records

GET /records?category=salary

---

## 9️⃣ Dashboard Summary

GET /dashboard/summary

---

## 🔟 RBAC Testing

* Analyst ❌ cannot create records
* Viewer ❌ cannot access restricted APIs
* Admin ✅ full access

---

## ⚠️ Notes

* First request may take a few seconds (Render free tier cold start)
* No database access is required — all functionality is testable via APIs
* Roles can be assigned during registration for easy testing

---

## 📊 Features Implemented

* JWT Authentication
* Role-Based Access Control (RBAC)
* User Management APIs
* Financial Records CRUD
* Pagination & Filtering
* Dashboard Aggregation APIs
* Input Validation & Error Handling
* Clean Modular Architecture

---

## 🚀 Deployment

The backend is deployed on Render with auto-deploy enabled via GitHub integration.

---

## 🧠 Design Decisions

* Default role is "viewer" for security
* Role assignment handled via API (no DB dependency)
* Aggregation used for dashboard insights
* MVC-based clean architecture

---

## 📌 Future Improvements

* Monthly analytics
* Unit testing
* Rate limiting
* Refresh token system

---

## 👨‍💻 Author

**Mayank Sahu**

---

## ⭐ Final Note

This project focuses on backend system design, data handling, and access control, demonstrating real-world backend engineering practices.
1. Register Admin
2. Login Admin
3. Register Analyst + Viewer
4. Admin gets users
5. Admin updates role
6. Analyst login
7. Analyst cannot create record ❌
8. Admin creates record ✅
9. Analyst views records ✅
10. Apply filters + pagination
11. Dashboard summary
12. Update user status
13. Test inactive restriction# Finance
