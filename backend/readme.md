# Backend

## Project Structure

```
ts-node-backend/
├── app/                   # Source code directory
│   └── controllers/       # Controllers of notification
│   └── models/            # Data models
│   └── services/          # Socket io configuration
│   └── routes/            # API path configuration
│   └── types/             # Types declaration for typescript
│   └── utils/             # Helper functions
│   └── index.ts           # Main entry point
│   └── app.ts             # Server instance
├── dist/                  # Compiled JavaScript output (after build)
├── node_modules/          # Dependencies
├── .gitignore             # Git ignore file
├── package.json           # Project metadata and scripts
├── README.md              # Project documentation (this file)
├── tsconfig.json          # TypeScript configuration
└── nodemon.json           # Nodemon configuration (optional)
```

## 📡 Notification API – Documentation

> Base URL:

```ts
// In frontend:
const BASE_URL = "https://kdbvglw2-3000.asse.devtunnels.ms/api/v1/users";
```

---

## 🔔 Routes Summary

### 1. **Get All Notifications**

Fetch all notifications for a specific user.

```
GET /notification/get/:id
```

**Params:**

- `:id` – user ID

**Response:**

```json
{
  "success": true,
  "message": "Notifications fetched",
  "data": [ ...notificationList ]
}
```

---

### 2. **Mark Notification as Read**

Marks a single notification as **read**.

```
PATCH /notification/:id/read
```

**Params:**

- `:id` – notification ID

**Response:**

```json
{
  "success": true,
  "message": "Notification marked as read",
  "data": { ...notification }
}
```

---

### 3. **Mark Notification as Unread**

Marks a notification as **unread**.

```
PATCH /notification/:id/unread
```

**Params:**

- `:id` – notification ID

**Response:**

```json
{
  "success": true,
  "message": "Unread notifications fetched",
  "data": { ...notification }
}
```

---

### 4. **Create a New Notification**

Creates a new notification (can be triggered from backend/admin).

```
POST /notification/add
```

**Body Example:**

```json
{
  "recipient": "user_id",
  "title": "Action Required",
  "body": "Please complete the onboarding",
  "type": "form_action"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Notification created",
  "data": { ...notification }
}
```

---

## ⚠️ Note

In the frontend, due to local development limitations, a **port-forwarded backend URL** has been used via **DevTunnel**:

```ts
// const BASE_URL = process.env.EXPO_PUBLIC_BACKEND_URL || 'https://kdbvglw2-3000.asse.devtunnels.ms/api/v1/users';
const BASE_URL = "https://kdbvglw2-3000.asse.devtunnels.ms/api/v1/users";
```

For production deployment, update this to your actual backend domain or a secure environment variable.

---
