# Week 9 – Backend MongoDB (REST API Design)

## 🔗 GitHub Repository
https://github.com/Aarsh2103/week9-backend-mongodb

---

## 📌 Backend Design Description

This backend is designed for a web application coursework using **Node.js**, **Express**, and **MongoDB**.  
The backend follows a RESTful architecture and is responsible for handling CRUD operations for application data.

MongoDB is used as the database, and **Mongoose** is used as the ODM (Object Data Modeling) library.

---

## 📊 Planned REST API Endpoints

### 1️⃣ Create Data (POST)
**Endpoint:**  
`POST /api/items`

**Description:**  
Creates a new record in the MongoDB database.

**MongoDB Query (Mongoose):**
```js
Item.create(req.body)
