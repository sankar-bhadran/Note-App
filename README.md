# 📝 Notes App (Node.js + Express + TypeScript)

This is a simple backend application for managing notes using REST APIs. It allows you to create, read, update, and delete notes. Built using **Node.js**, **Express**, **TypeScript**, and **MongoDB** (via Mongoose).

---

## 📆 Features

* Create a new note
* Get all notes with pagination
* Update a note by ID
* Delete a note by ID
* Error handling middleware
* Environment-based config support

---

## ✨ Tech Stack

* Node.js
* Express.js
* TypeScript
* MongoDB + Mongoose
* Postman (for testing)

---

## 📁 Project Structure

```
src/
│
├── controllers/         # Controller logic for notes
├── services/            # Service layer for business logic
├── models/              # Mongoose schema for notes
├── routes/              # Express routes
├── middlewares/         # Custom error handler
├── config/              # DB connection setup
└── index.ts             # Entry point
```

---

## ⚙️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/your-username/notes-app.git
cd notes-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure Environment Variables**

Create a `.env` file in the root:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/notes-app
```

4. **Run the server**

For development with hot reload:

```bash
npm run dev
```

For production build:

```bash
npm run build
npm start
```

---

## 📬 API Endpoints

| Method | Endpoint               | Description       |
| ------ | ---------------------- | ----------------- |
| POST   | `/api/addnote`         | Add a new note    |
| GET    | `/api/allnotes`        | Get all notes     |
| PUT    | `/api/updatenotes/:id` | Update note by ID |
| DELETE | `/api/deletenote/:id`  | Delete note by ID |

---

## 📦 Sample Request for Creating a Note

**POST** `/api/addnote`

```json
{
  "title": "Shopping List",
  "content": "Buy milk, eggs, and bread"
}
```

---

## 🔪 Testing with Postman

* Open Postman
* Use `localhost:5000/api` as your base URL (or your configured port)
* Hit the endpoints as listed above

---

## 🛡️ Error Handling

Centralized error middleware is included. Errors will return a JSON with status and message.

```json
{
  "status": 400,
  "message": "Title and content are required"
}
```

---

## 📌 Author

**Sankarbhadran**
*Full Stack Developer*

---
