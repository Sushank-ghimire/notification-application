import { Router } from "express";
import {
  getNotifications,
  markAsRead,
  unreadNotification,
  createNotification
} from "../controllers/NotificationControllers";

const notificationRoutes = Router();

// GET all notifications for a user (userId from body)
notificationRoutes.get("/", getNotifications);

// PATCH - Mark a specific notification as read
notificationRoutes.patch("/:id/read", markAsRead);

// PATCH - Mark a specific notification as unread
notificationRoutes.patch("/:id/unread", unreadNotification);

// POST - Create a new notification (backend/admin trigger)
notificationRoutes.post("/add", createNotification);

export default notificationRoutes;
