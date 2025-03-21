# Subscription Tracker API

The **Subscription Tracker API** is a backend service designed to manage user subscriptions, send reminders for upcoming renewals, and provide secure authentication and authorization. It is built using **Node.js**, **Express**, and **MongoDB**, with integrations for **Arcjet** and **Upstash Workflow** for advanced features like bot detection, rate limiting, and workflow automation.

## Features

- **User Management**: Sign up, sign in, and manage user accounts securely.
- **Subscription Management**: Create, update, and track subscriptions with details like price, frequency, and renewal dates.
- **Renewal Reminders**: Automatically send reminders for upcoming subscription renewals.
- **Authentication & Authorization**: Secure endpoints using JWT-based authentication.
- **Bot Protection & Rate Limiting**: Protect APIs using Arcjet middleware.
- **Workflow Automation**: Use Upstash Workflow for managing subscription-related workflows.

## Project Structure

. ├── app.js # Main entry point of the application ├── config/ # Configuration files │ ├── arcjet.js # Arcjet configuration for bot protection and rate limiting │ ├── env.js # Environment variable configuration │ └── upstash.js # Upstash Workflow client configuration ├── controllers/ # API controllers │ ├── auth.controller.js # Authentication-related logic │ ├── subscription.controller.js # Subscription-related logic │ ├── user.controller.js # User-related logic │ └── workflow.controller.js # Workflow-related logic ├── database/ # Database connection │ └── mongodb.js # MongoDB connection setup ├── middleware/ # Middleware for request handling │ ├── arcjet.middleware.js # Arcjet middleware for security │ ├── auth.middleware.js # JWT-based authorization middleware │ └── error.middleware.js # Error handling middleware ├── models/ # Mongoose models │ ├── subscription.model.js # Subscription schema │ └── user.model.js # User schema ├── routes/ # API routes │ ├── auth.routes.js # Authentication routes │ ├── subscription.routes.js # Subscription routes │ ├── user.routes.js # User routes │ └── workflow.routes.js # Workflow routes ├── .env.development.local # Development environment variables ├── .env.production.local # Production environment variables ├── package.json # Project dependencies and scripts └── README.md # Project documentation

## Installation

1. Clone the repository:

```console
   git clone [<repository-url>](https://github.com/lizzy-shiejer/subscription-tracker.git)
   cd subscription-tracker
```

2. Install dependencies:

```console
    npm install
```

3. Set up environment variables:

   - Create `.env.development.local` and `.env.production.local` files based on the provided examples.
   - Add your MongoDB URI, JWT secret, Arcjet key, and Upstash credentials.

4. Start the development server:

```console
npm run dev
```

## API Endpoints