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

1. Authentication
   - POST `/api/v1/auth/sign-up`: Register a new user.
   - POST `/api/v1/auth/sign-in`: Log in a user.
   - POST `/api/v1/auth/sign-out`: Log out a user.
2. Users
   - GET `/api/v1/users`: Get all users (admin only).
   - GET `/api/v1/users/:id`: Get a specific user (requires authorization).
3. Subscriptions
   - POST `/api/v1/subscriptions`: Create a new subscription (requires authorization).
   - GET `/api/v1/subscriptions`: Get all subscriptions.
   - GET `/api/v1/subscriptions/:id`: Get a specific subscription.
   - GET /`api/v1/subscriptions/user/:id`: Get subscriptions for a specific user (requires authorization).
4. Workflows
   - POST `/api/v1/workflows/subscription/reminder`: Trigger subscription renewal reminders.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for creating RESTful APIs.
- **MongoDB**: NoSQL database for storing user and subscription data.
- **Mongoose**: ODM for MongoDB.
- **JWT**: Secure authentication and authorization.
- **Arcjet**: Bot protection and rate limiting.
- **Upstash** Workflow: Workflow automation for subscription reminders.

## Environment Variables

The application uses the following environment variables:
|Variable|Description|
| -------- | ----------- |
| `PORT` | Port number for the server |
| `SERVER_URL` | Base URL of the server |
| `NODE_ENV` | Environment (`development` or `production`) |
| `DB_URI` | MongoDB<vscode_annotation details='%5B%7B%22title%22%3A%22hardcoded-credentials%22%2C%22description%22%3A%22Embedding%20credentials%20in%20source%20code%20risks%20unauthorized%20access%22%7D%5D'> connection</vscode_annotation> URI |
| `JWT_SECRET` | Secret key for JWT |
| `JWT_EXPIRES_IN` | JWT expiration time |
| `ARCJET_KEY` | Arcjet API key |
| `QSTASH_URL` | Upstash Workflow base URL |
| `QSTASH_TOKEN` | Upstash Workflow token |
| `QSTASH_CURRENT_SIGNING_KEY` | Current signing key for Upstash |
| `QSTASH_NEXT_SIGNING_KEY` | Next signing key for Upstash |

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
