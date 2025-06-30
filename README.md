📦 Subscription Tracker API


A simple and powerful backend API built with Node.js, Express, and MongoDB Atlas to manage user subscriptions — including tracking payments, renewal dates, and user authentication.

🚀 Features

✅ User registration & login (JWT-based authentication)

📡 MongoDB Atlas integration with Mongoose

📋 CRUD operations for subscriptions

🧠 Validation with Mongoose schema

🔐 Secure routes with cookie-based JWT

❌ Centralized error handling middleware

🌍 Environment-based configuration



🛠️ Tech Stack
Layer	Technology
Runtime	Node.js
Framework	Express.js
Database	MongoDB Atlas
ODM	Mongoose
Auth	JSON Web Token (JWT)
Validation	Mongoose + Regex
Config	dotenv
Middleware	Custom Error Handler



📁 Folder Structure
bash
Copy code
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


🔐 Environment Variables
Create a file named .env.development.local and add:

env
Copy code
PORT=3000
NODE_ENV=development
DB_URL=mongodb+srv://<username>:<password>@cluster0.xxxxxx.mongodb.net/
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
📦 Getting Started
1. Clone the Repository
bash
Copy code
git clone https://github.com/fahamijemal/subscription-tracker-api.git
cd subscription-tracker-api
2. Install Dependencies
bash
Copy code
npm install
3. Configure MongoDB Atlas
Go to MongoDB Atlas

Create a cluster

Whitelist your IP and create a user

Replace DB_URL in .env.development.local with your connection string

4. Start the Server
bash
Copy code
npm run dev
Server will run at: http://localhost:3000

🔌 API Endpoints

Method	Route	Description
POST	/api/v1/auth/register	Register a new user
POST	/api/v1/auth/login	Login user
GET	/api/v1/users	List all users (admin)
CRUD	/api/v1/sub/	Manage        subscriptions
GET	/api/v1/sub/user/:id	Subscriptions by user
PUT	/api/v1/sub/:id/cancel	Cancel a subscription

✅ Example Subscription Schema
json
Copy code
{
  "name": "Netflix",
  "price": 15.99,
  "currency": "USD",
  "frequency": "monthly",
  "category": "entertainment",
  "paymentMethod": "credit_card",
  "startDate": "2023-12-01",
  "renewalDate": "2024-01-01"
}


👨‍💻 Author
Fahami Jemal Harun
Full-Stack Developer from Ethiopia 🇪🇹
- [LinkedIn](https://www.linkedin.com/in/fahamijemal)
- [GitHub](https://github.com/fahamijemal)



