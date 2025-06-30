# 📦 Subscription Tracker API

A simple and powerful backend API built with Node.js, Express, and MongoDB Atlas to manage user subscriptions — including tracking payments, renewal dates, and user authentication.

## 🚀 Features

- ✅ User registration & login (JWT-based authentication)
- 📡 MongoDB Atlas integration with Mongoose
- 📋 CRUD operations for subscriptions
- 🧠 Validation with Mongoose schema
- 🔐 Secure routes with cookie-based JWT
- ❌ Centralized error handling middleware
- 🌍 Environment-based configuration

## 🛠️ Tech Stack

| Layer          | Technology               |
|----------------|--------------------------|
| Runtime        | Node.js                  |
| Framework      | Express.js               |
| Database       | MongoDB Atlas            |
| ODM            | Mongoose                 |
| Auth           | JSON Web Token (JWT)     |
| Validation     | Mongoose + Regex         |
| Config         | dotenv                   |
| Middleware     | Custom Error Handler     |

## 📁 Folder Structure

```bash
subscription_tracker/
│
├── config/             # Environment variable setup
├── controllers/        # Business logic (optional)
├── database/           # MongoDB connection
├── middlewares/        # Error handling, auth middleware
├── models/             # Mongoose schemas (User, Subscription)
├── routes/             # Express route definitions
├── .env.development.local
├── app.js              # Main application entry point
├── package.json
└── README.md

## 🔐 Environment Variables

Create a file named `.env.development.local` in the root directory and add:

```env
PORT=3000
NODE_ENV=development
DB_URL=mongodb+srv://<username>:<password>@cluster0.xxxxxx.mongodb.net/
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d

## 🚀 Getting Started

Follow these steps to set up the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/fahamijemal/subscription-tracker-api.git
cd subscription-tracker-api

## 📦 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/fahamijemal/subscription-tracker-api.git
cd subscription-tracker-api

## 🛠️ Installation & Configuration

### 2. Install Dependencies
```bash
npm install

## 🔌 API Endpoints

| Method  | Route                      | Description                          | Requires Auth |
|---------|----------------------------|--------------------------------------|---------------|
| `POST`  | `/api/v1/auth/register`     | Register a new user                  | ❌ No         |
| `POST`  | `/api/v1/auth/login`        | Login user                           | ❌ No         |
| `GET`   | `/api/v1/users`             | List all users (admin only)          | ✅ Yes (Admin)|
| `POST`  | `/api/v1/sub/`              | Create new subscription              | ✅ Yes        |
| `GET`   | `/api/v1/sub/`              | List all subscriptions               | ✅ Yes        |
| `GET`   | `/api/v1/sub/:id`           | Get single subscription              | ✅ Yes        |
| `PUT`   | `/api/v1/sub/:id`           | Update subscription                  | ✅ Yes        |
| `DELETE`| `/api/v1/sub/:id`           | Delete subscription                  | ✅ Yes        |
| `GET`   | `/api/v1/sub/user/:id`      | Get subscriptions by user ID         | ✅ Yes        |
| `PUT`   | `/api/v1/sub/:id/cancel`    | Cancel a subscription                | ✅ Yes        |

## 👨‍💻 Author

**Fahami Jemal Harun**  
💻 Full-Stack Developer from Ethiopia 🇪🇹  

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fahamijemal)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/fahamijemal)
[![Telegram](https://img.shields.io/badge/-Telegram-26A5E4?style=flat&logo=telegram&logoColor=white)](https://t.me/fahamijemal)
