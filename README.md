# 🚀 Subscription Tracker API

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.16+-blue.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green.svg)](https://www.mongodb.com/atlas)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.txt)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black.svg)](https://github.com/fahamijemal/subscription-tracker)
[![Security](https://img.shields.io/badge/Security-Arcjet-red.svg)](https://arcjet.com/)
[![Email](https://img.shields.io/badge/Email-Nodemailer-orange.svg)](https://nodemailer.com/)
[![Workflow](https://img.shields.io/badge/Workflow-QStash-purple.svg)](https://upstash.com/)

A **production-ready** subscription management API built with Node.js, Express, and MongoDB Atlas. Features advanced security, automated email notifications, and background workflow processing for comprehensive subscription lifecycle management.

## ✨ Key Features

### 🔐 **Advanced Security**
- **JWT Authentication** with bcrypt password hashing
- **Arcjet Protection** with bot detection and rate limiting
- **Role-based Access Control** for different user types
- **Secure Cookie Management** for session handling

### 📧 **Automated Email System**
- **Smart Reminders** at 7, 5, 2, and 1 days before renewal
- **Professional Templates** with dynamic content injection
- **Gmail SMTP Integration** for reliable delivery
- **Customizable Email Content** for different scenarios

### ⚙️ **Workflow Automation**
- **Background Task Processing** with QStash
- **Automated Reminder Scheduling** based on renewal dates
- **Scalable Workflow Management** for enterprise use
- **Real-time Task Monitoring** and status tracking

### 📊 **Data Management**
- **MongoDB Atlas Integration** with Mongoose ODM
- **Comprehensive CRUD Operations** for all entities
- **Advanced Data Validation** with Mongoose schemas
- **Relationship Management** between users and subscriptions

## 🛠️ Technology Stack

| Component | Technology | Version | Purpose |
|-----------|------------|---------|---------|
| **Runtime** | Node.js | 18+ | JavaScript runtime environment |
| **Framework** | Express.js | 4.16+ | Web application framework |
| **Database** | MongoDB Atlas | Cloud | Cloud database service |
| **ODM** | Mongoose | 8.16+ | MongoDB object modeling |
| **Authentication** | JWT + bcryptjs | Latest | Secure user authentication |
| **Security** | Arcjet | 1.0.0-beta.8 | Rate limiting & bot protection |
| **Email** | Nodemailer | 7.0.5 | Email notification system |
| **Workflow** | QStash | 0.2.14 | Background task processing |
| **Date Handling** | dayjs | 1.11.13 | Lightweight date manipulation |
| **Environment** | dotenv | 17.0.0 | Environment configuration |

## 📁 Project Architecture

```
subscription_tracker/
├── 📁 config/                    # Configuration Management
│   ├── env.js                   # Environment variables setup
│   ├── arcjet.js                # Security configuration
│   ├── nodemailer.js            # Email service setup
│   └── upstash.js               # Workflow configuration
├── 📁 controllers/              # Business Logic Layer
│   ├── auth.controller.js       # Authentication operations
│   ├── subscription.controller.js # Subscription management
│   ├── user.controller.js       # User operations
│   └── workflow.controller.js   # Background task processing
├── 📁 database/                 # Database Layer
│   └── mongodb.js               # MongoDB connection & setup
├── 📁 middlewares/              # Express Middlewares
│   ├── arcjet.middleware.js     # Security & rate limiting
│   ├── auth.middleware.js       # JWT authentication
│   └── error.middleware.js      # Global error handling
├── 📁 models/                   # Data Models
│   ├── subscription.model.js    # Subscription schema
│   └── user.model.js            # User schema
├── 📁 routes/                   # API Routes
│   ├── auth.routes.js           # Authentication endpoints
│   ├── subscription.routes.js   # Subscription endpoints
│   ├── user.routes.js           # User management endpoints
│   └── workflow.routes.js       # Workflow endpoints
├── 📁 utils/                    # Utility Functions
│   ├── email.template.js        # Email template system
│   └── send.email.js            # Email sending utilities
├── 📄 app.js                    # Application entry point
├── 📄 package.json              # Dependencies & scripts
├── 📄 LICENSE.txt               # MIT License
└── 📄 README.md                 # Project documentation
```

## 🔐 Environment Configuration

### Development Environment (`.env.development.local`)
```env
# Server Configuration
PORT=3060
NODE_ENV=development

# Database Configuration
DB_URL=mongodb+srv://<username>:<password>@cluster0.xxxxxx.mongodb.net/

# Authentication
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRATION=7d

# Security (Arcjet)
ARCJECT_KEY=your_arcjet_key_here
ARCJECT_ENV=development

# Workflow Management (QStash)
QSTASH_URL=https://qstash.upstash.io
QSTASH_TOKEN=your_qstash_token_here

# Email Configuration
EMAIL_PASSWORD=your_gmail_app_password_here
```

### Production Environment (`.env.production.local`)
```env
# Server Configuration
PORT=3000
NODE_ENV=production

# Database Configuration
DB_URL=mongodb+srv://<username>:<password>@cluster0.xxxxxx.mongodb.net/

# Authentication
JWT_SECRET=your_secure_jwt_secret_here
JWT_EXPIRATION=7d

# Security (Arcjet)
ARCJECT_KEY=your_arcjet_key_here
ARCJECT_ENV=production

# Workflow Management (QStash)
QSTASH_URL=https://qstash.upstash.io
QSTASH_TOKEN=your_qstash_token_here

# Email Configuration
EMAIL_PASSWORD=your_gmail_app_password_here
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18 or higher
- **MongoDB Atlas** account
- **Gmail** account (for email notifications)
- **Arcjet** account (for security)
- **Upstash** account (for workflows)

### 1. Clone Repository
```bash
git clone https://github.com/fahamijemal/subscription-tracker.git
cd subscription-tracker
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
```bash
# Copy environment template
cp .env.development.local.example .env.development.local

# Edit with your actual values
nano .env.development.local
```

### 4. Start Development Server
```bash
npm run dev
```

🎉 **Server running at:** `http://localhost:3060`

## 🔌 API Reference

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required | Request Body |
|--------|----------|-------------|---------------|--------------|
| `POST` | `/api/v1/auth/sign-up` | Register new user |  ✅ Yes| 
| `POST` | `/api/v1/auth/sign-in` | User login | ✅ Yes |
| `POST` | `/api/v1/auth/sign-out` | User logout | ✅ Yes |
### User Management

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/api/v1/users` | List all users | ✅ Yes (Admin) |
| `GET` | `/api/v1/users/:id` | Get user by ID | ✅ Yes |
| `PUT` | `/api/v1/users/:id` | Update user profile | ✅ Yes |

### Subscription Management

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/v1/subscriptions` | Create subscription | ✅ Yes |
| `GET` | `/api/v1/subscriptions` | List all subscriptions | ✅ Yes |
| `GET` | `/api/v1/subscriptions/:id` | Get subscription | ✅ Yes |
| `PUT` | `/api/v1/subscriptions/:id` | Update subscription | ✅ Yes |
| `DELETE` | `/api/v1/subscriptions/:id` | Delete subscription | ✅ Yes |
| `GET` | `/api/v1/subscriptions/user/:id` | User subscriptions | ✅ Yes |
| `PUT` | `/api/v1/subscriptions/:id/cancel` | Cancel subscription | ✅ Yes |
| `GET` | `/api/v1/subscriptions/upcoming-renewals` | Upcoming renewals | ✅ Yes |

### Workflow Management

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/v1/workflow/subscription/reminder` | Send reminders | ✅ Yes |

## 📧 Email System

### Automated Reminder Schedule
- **7 days before renewal** - Early notification
- **5 days before renewal** - Follow-up reminder
- **2 days before renewal** - Urgent reminder
- **1 day before renewal** - Final notification

### Email Templates
The system includes professional HTML email templates with:
- **Dynamic Content** - Personalized user information
- **Subscription Details** - Plan, price, payment method
- **Action Links** - Account settings, support contact
- **Branding** - Consistent SubDub branding
- **Responsive Design** - Mobile-friendly layout

### Template Features
```javascript
// Example email template usage
const emailData = {
  userName: "John Doe",
  subscriptionName: "Premium Plan",
  renewalDate: "2024-01-15",
  planName: "Premium Monthly",
  price: "$29.99/month",
  paymentMethod: "Visa ending in 1234",
  daysLeft: 7
};
```

## 🔒 Security Features

### Arcjet Protection
- **Rate Limiting**: 5 requests per 10 seconds per IP
- **Bot Detection**: Automatic bot identification and blocking
- **IP Tracking**: Comprehensive request tracking
- **Whitelist Support**: Allow search engines and development IPs

### Authentication Security
- **JWT Tokens**: Secure token-based authentication
- **Password Hashing**: bcrypt encryption for passwords
- **Cookie Security**: HTTP-only, secure cookies
- **Token Expiration**: Configurable token lifetime

### Security Headers
```javascript
// Automatic security headers
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
```

## ⚙️ Workflow System

### Background Task Processing
The workflow system handles automated subscription reminders:

```javascript
// Workflow configuration
const REMINDERS = [7, 5, 2, 1]; // Days before renewal

// Automated reminder process
1. Fetch subscription details
2. Calculate reminder dates
3. Schedule email notifications
4. Execute background tasks
5. Monitor task completion
```

### QStash Integration
- **Reliable Task Scheduling** - Persistent task queue
- **Automatic Retries** - Failed task recovery
- **Scalable Processing** - Handle high-volume workflows
- **Real-time Monitoring** - Task status tracking

## 📊 Data Models

### User Schema
```javascript
{
  name: String,           // User's full name
  email: String,          // Unique email address
  password: String,       // Hashed password
  role: String,           // User role (user/admin)
  createdAt: Date,        // Account creation date
  updatedAt: Date         // Last update timestamp
}
```

### Subscription Schema
```javascript
{
  user: ObjectId,         // Reference to user
  name: String,           // Subscription name
  price: Number,          // Subscription price
  currency: String,       // Price currency
  frequency: String,      // Billing frequency
  renewalDate: Date,      // Next renewal date
  status: String,         // Active/Cancelled/Paused
  paymentMethod: String,  // Payment method details
  createdAt: Date,        // Subscription creation
  updatedAt: Date         // Last update timestamp
}
```

## 🧪 Testing Examples

### Authentication Testing
```bash
# Test user registration
curl -X POST http://localhost:3060/api/v1/auth/sign-up \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }'

# Test user login
curl -X POST http://localhost:3060/api/v1/auth/sign-in \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'

# Test with JWT token
curl -X GET http://localhost:3060/api/v1/users \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Subscription Testing
```bash
# Create subscription (requires auth)
curl -X POST http://localhost:3060/api/v1/subscriptions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "name": "Premium Plan",
    "price": 29.99,
    "currency": "USD",
    "frequency": "monthly",
    "renewalDate": "2024-02-15",
    "paymentMethod": "Visa ending in 1234"
  }'

# Get user subscriptions
curl -X GET http://localhost:3060/api/v1/subscriptions/user/USER_ID \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Workflow Testing
```bash
# Test workflow reminder
curl -X POST http://localhost:3060/api/v1/workflow/subscription/reminder \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "subscriptionId": "SUBSCRIPTION_ID"
  }'
```

## 🚀 Deployment

### Production Setup
```bash
# Set production environment
export NODE_ENV=production

# Install production dependencies
npm ci --only=production

# Start production server
npm start
```

### Environment Checklist
- [ ] MongoDB Atlas connection configured
- [ ] Gmail app password set for email notifications
- [ ] Arcjet security keys configured
- [ ] Upstash QStash tokens set up
- [ ] JWT secrets configured
- [ ] SSL certificates installed (for HTTPS)

### Docker Deployment (Optional)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## 📈 Monitoring & Logging

### Application Logs
- **API Requests**: All incoming requests logged
- **Database Operations**: Query performance tracking
- **Email Status**: Delivery confirmation logging
- **Security Events**: Rate limiting and bot detection
- **Error Tracking**: Comprehensive error logging

### Performance Metrics
- **Response Times**: API endpoint performance
- **Database Queries**: Query optimization insights
- **Email Delivery**: Success/failure rates
- **Security Events**: Threat detection metrics

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow **conventional commits** format
- Write **comprehensive tests** for new features
- Update **documentation** for API changes
- Ensure **security best practices** are followed

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE.txt](LICENSE.txt) file for details.

## 👨‍💻 Author

**Fahami Jemal Harun**  
💻 Full-Stack Developer from Ethiopia 🇪🇹

[![LinkedIn][linkedin-icon]][linkedin] [![GitHub][github-icon]][github] [![Telegram][telegram-icon]][telegram]

[linkedin-icon]: https://img.shields.io/badge/-LinkedIn-0077B5?logo=linkedin
[github-icon]: https://img.shields.io/badge/-GitHub-181717?logo=github
[telegram-icon]: https://img.shields.io/badge/-Telegram-26A5E4?logo=telegram
[linkedin]: https://linkedin.com/in/fahamijemal
[github]: https://github.com/fahamijemal
[telegram]: https://t.me/fahamijemal

## 🙏 Acknowledgments

- **MongoDB Atlas** for reliable cloud database hosting
- **Arcjet** for advanced security and rate limiting
- **Upstash** for scalable workflow management
- **Nodemailer** for robust email functionality
- **Express.js** community for the excellent framework
- **Open Source Community** for continuous inspiration

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

**Made with ❤️ by Fahami Jemal Harun**

</div>
