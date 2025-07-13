# 🔖 Project Cheatsheet: Fullstack In-App Notification System

### 🚀 Features Summary

| Feature                           | Description                                                                          |
| --------------------------------- | ------------------------------------------------------------------------------------ |
| 🔔 Real-time Notifications        | Users receive real-time push/local notifications via WebSocket (Socket.io)           |
| 📩 Form Submission Notification   | Sending a message or submitting a form from frontend triggers a backend notification |
| 🔄 Notification Sync              | Notifications are saved in the database and synced with frontend                     |
| 🔕 Mark as Read / Unread          | Users can toggle notification state                                                  |notifications                                      |
| 📬 Backend Emit Test              | Manually emit a notification from backend to simulate alerts                         |
| 🔁 Auto Refresh / Pull to Refresh | Keeps notification list updated                                                      |
| 📱 Push Notifications             | Delivered using `expo-notifications` on supported devices                            |
| 💬 Clean UI                       | Responsive and animated React Native interface for a native feel                     |
| 🌐 Socket Rooms                   | User-specific notification delivery using `socket.join(userId)`                      |

---

### 🧪 Demo Instructions

#### 🔥 How to Run Locally

**Backend:**

```bash
cd backend
npm install
npm run dev     # For development server (Used Typescript)
npm run build   # For dist folder creation of Javascript
npm start       # For running the server
```

**Frontend (React Native):**

```bash
cd frontend
npx expo install
bun start
```

> ⚠️ Make sure your frontend connects to the backend WebSocket server (check IP + port match)

---

### 📽️ Demo Video (Video and Application Files are located inside the public folder)

<video width="400" height="400" controls>
  <source src="https://github.com/Sushank-ghimire/notification-application/tree/main/public/DemoVido.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

### 📱 Download Android APK

<a href="./public/base.apk" download style="display:inline-block; margin-top: 10px; padding: 10px 16px; background-color: #007bff; color: white; border-radius: 6px; text-decoration: none; font-weight: bold;">
  📦 Download APK
</a>

---

### 📡 Socket.io Events Overview

#### Client → Server

- `join`: Subscribe user to their private notification room
- `notification_read`: Mark a notification as read
- `notification_unread`: Mark a notification as unread

#### Server → Client

- `new_notification`: Send a real-time notification
- `notification_read`: Notify client that a notification was marked read
- `notification_unread`: Notify client that a notification was marked unread

---

### 📦 Notification Object Shape

```json
{
  "recipient": "user123",
  "title": "Message Received",
  "body": "You have a new message from John.",
  "type": "default" or "form_data",
}
```

---

### ✅ Tech Stack

| Layer         | Tech                                             |
| ------------- | ------------------------------------------------ |
| Frontend      | React Native (Expo), Zustand, expo-notifications |
| Backend       | Node.js, Express, Socket.io                      |
| Realtime      | WebSocket using `socket.io`                      |
| DB (optional) | MongoDB / SQLite / JSON (depends on setup)       |

---
