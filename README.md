# Simple Backend CRUD API

A simple REST API built using **Node.js** and **Express.js** that performs basic CRUD (Create, Read, Update, Delete) operations without using a database. Data is stored temporarily in memory using JavaScript arrays.

## 🚀 Features

* Create a new user
* Get all users
* Get a user by ID
* Update user details
* Delete a user
* Input validation
* Duplicate email checking
* RESTful API design
* CORS support

## 🛠️ Tech Stack

* Node.js
* Express.js
* CORS

## 📁 Project Structure

```text
simple-api/
│
├── server.js 
└──package.json
```

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/shivji2138/TASK-2-SHIVAAKASH
cd simple-api
```

Install dependencies:

```bash
npm install
```

## ▶️ Running the Application

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

Server runs at:

```text
http://localhost:5000
```

## 📌 API Endpoints

### Home Route

#### GET /

Returns API status.

Response:

```json
{
  "success": true,
  "message": "Backend API is running successfully"
}
```

---

### Get All Users

#### GET /api/users

Response:

```json
{
  "success": true,
  "count": 2,
  "data": [...]
}
```

---

### Get User By ID

#### GET /api/users/:id

Example:

```http
GET /api/users/1
```

---

### Create User

#### POST /api/users

Request Body:

```json
{
  "name": "Shiva",
  "email": "shiva@gmail.com"
}
```

Response:

```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": 1,
    "name": "Shiva",
    "email": "shiva@gmail.com"
  }
}
```

---

### Update User

#### PUT /api/users/:id

Request Body:

```json
{
  "name": "Shiva Akash",
  "email": "akash@gmail.com"
}
```

---

### Delete User

#### DELETE /api/users/:id

Response:

```json
{
  "success": true,
  "message": "User deleted successfully"
}
```

## ✅ Validation Implemented

* Name is required
* Email is required
* Duplicate email prevention
* User existence validation for update and delete operations

## 🧪 Testing

You can test the API using:

* Postman
* Thunder Client
* Insomnia
* cURL

<img width="1093" height="873" alt="Screenshot 2026-06-11 150202" src="https://github.com/user-attachments/assets/7142c03d-0ffd-43cd-a546-6aa085631d4d" />

<img width="1082" height="952" alt="Screenshot 2026-06-11 151411" src="https://github.com/user-attachments/assets/1899ab7a-8298-4f93-9899-e7e4308aa54b" />

<img width="1092" height="781" alt="Screenshot 2026-06-11 151455" src="https://github.com/user-attachments/assets/870fe508-a4bd-4010-a663-ff6430c3e23e" />

<img width="1084" height="697" alt="Screenshot 2026-06-11 151823" src="https://github.com/user-attachments/assets/93c77d68-d68e-44a9-8b9f-88ed78387d20" />

<img width="1080" height="501" alt="Screenshot 2026-06-11 152315" src="https://github.com/user-attachments/assets/a667b542-e028-4354-aade-464d36a8d5fb" />

<img width="1079" height="791" alt="Screenshot 2026-06-11 152422" src="https://github.com/user-attachments/assets/03b907d9-1212-462b-b9a1-118bf100ba0f" />

<img width="1093" height="463" alt="Screenshot 2026-06-11 152446" src="https://github.com/user-attachments/assets/31303f41-3ddf-4f05-ac59-3db016c6e2fb" />








## 📚 Learning Outcomes

This project demonstrates:

* Backend API development
* REST API concepts
* Express.js routing
* Middleware usage
* Request and response handling
* CRUD operations
* Input validation
* Server-side application logic

## 👨‍💻 Author

Shiva Akash

Built as a backend development practice project to understand API creation and server-side logic using Node.js and Express.js.
