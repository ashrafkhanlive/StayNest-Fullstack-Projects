# 🏨 StayNest - Full Stack Hotel Booking Platform

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-blue)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-4-green)
![Java](https://img.shields.io/badge/Java-21-orange)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## 📖 Overview

StayNest is a **full-stack Airbnb-style hotel booking platform** that enables users to search, book, and manage hotel stays. The platform includes dedicated dashboards for Guests, Hosts, and Admins, secure authentication, online payments, hotel management, booking management, and analytics.

---

# ✨ Features

### 👤 Authentication
- User Registration
- Login
- Forgot Password
- JWT Authentication
- Role-based Authorization (Guest, Host, Admin)

### 🏨 Hotel Management
- Browse Hotels
- Search Hotels
- Filter by Location
- Sort Results
- Hotel Details
- Hotel Gallery
- Google Maps Integration
- Host Hotel CRUD

### 📅 Booking
- Book Hotels
- Booking Confirmation
- Booking History
- Guest Trips
- Host Booking Management

### ❤️ Wishlist
- Save Hotels
- Remove Hotels
- Persistent Wishlist

### 💳 Payments
- Stripe Integration
- Checkout Page
- Payment Success
- Payment Failure

### 📊 Dashboards

#### Guest Dashboard
- Profile
- Wishlist
- Trips

#### Host Dashboard
- Hotel Management
- Room Management
- Booking Management
- Revenue Dashboard

#### Admin Dashboard
- Platform Analytics
- User Management
- Hotel Monitoring

---

# 🛠 Tech Stack

## Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- ShadCN UI
- Radix UI
- Framer Motion
- React Hook Form
- Zod
- Axios
- Zustand
- TanStack Query
- React Hot Toast
- Recharts
- Google Maps API
- Stripe JS

---

## Backend

- Spring Boot 4
- Java 21
- Spring Web
- Spring Security
- Spring Data JPA
- PostgreSQL
- JWT Authentication
- ModelMapper
- Lombok
- SpringDoc OpenAPI (Swagger)
- Stripe Java SDK
- Maven

---

# 📂 Project Structure

```
StayNest
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── features/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── store/
│   │   ├── types/
│   │   ├── constants/
│   │   ├── utils/
│   │   └── lib/
│
├── backend/
│   ├── src/
│   ├── pom.xml
│   └── Dockerfile
│
└── README.md
```

---

# 🚀 Frontend Setup

Clone the repository

```bash
git clone https://github.com/your-username/staynest.git
```

Go to frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Create

```
.env.local
```

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

Run

```bash
npm run dev
```

Frontend runs at

```
http://localhost:3000
```

---

# ☕ Backend Setup

Go to backend

```bash
cd backend
```

Configure

```
application.properties
```

Example

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/staynest
spring.datasource.username=postgres
spring.datasource.password=password

spring.jpa.hibernate.ddl-auto=update

jwt.secret=your_secret_key

stripe.secret.key=your_stripe_secret
```

Run

```bash
./mvnw spring-boot:run
```

or

```bash
mvn spring-boot:run
```

Backend runs at

```
http://localhost:8080
```

---

# 📚 API Documentation

Swagger UI

```
http://localhost:8080/swagger-ui.html
```

or

```
http://localhost:8080/swagger-ui/index.html
```

---

# 📌 Frontend Routes

| Route | Description |
|--------|-------------|
| / | Home |
| /search | Search Hotels |
| /hotels/:id | Hotel Details |
| /booking/:hotelId | Booking |
| /checkout | Payment |
| /payment/success | Payment Success |
| /payment/failed | Payment Failed |
| /login | Login |
| /signup | Register |
| /forgot-password | Forgot Password |
| /wishlist | Wishlist |
| /profile | User Profile |
| /my-trips | Booking History |
| /host/dashboard | Host Dashboard |
| /host/hotels | Manage Hotels |
| /host/rooms | Manage Rooms |
| /host/bookings | Manage Bookings |
| /admin/dashboard | Admin Dashboard |

---

# 🔐 Authentication

- JWT Authentication
- Spring Security
- Protected Routes
- Role-based Access Control
- Token-based API Authentication

---

# 💳 Payment Flow

Guest

↓

Checkout

↓

Stripe

↓

Payment Success

↓

Booking Confirmed

---

# 🗄 Database

PostgreSQL

Main entities include:

- Users
- Hotels
- Rooms
- Bookings
- Payments
- Wishlist
- Reviews

---

# 🧪 Available Commands

## Frontend

```bash
npm install
npm run dev
npm run build
npm run start
npm run lint
```

## Backend

```bash
mvn clean install
mvn spring-boot:run
mvn test
```

---

# 🚀 Deployment

## Frontend

- Vercel
- Netlify

## Backend

- Railway
- Render
- Docker
- AWS EC2

---

# 🐳 Docker

Backend includes a Dockerfile.

Build

```bash
docker build -t staynest-backend .
```

Run

```bash
docker run -p 8080:8080 staynest-backend
```

---

# 📈 Future Improvements

- Email Verification
- Password Reset via Email
- Hotel Reviews
- Ratings
- Notifications
- Chat between Guest & Host
- Coupon System
- Multi-language Support
- AI Recommendations

---

# 👨‍💻 Author

Developed using:

- Next.js
- React
- Spring Boot
- PostgreSQL
- Stripe
- Google Maps API

---

# 📄 License

This project is licensed under the MIT License.

---

⭐ If you like this project, consider giving it a star on GitHub!
````

This README combines the frontend and backend into a single, polished GitHub landing page suitable for a full-stack project.
