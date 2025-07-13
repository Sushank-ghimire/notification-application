import { asyncHandler, sendError, sendSuccess } from "../utils";
import { Notification } from "../models/Notification.model";
import { getIO } from "../services/socket";

// GET all notifications
export const getNotifications = asyncHandler(async (req, res) => {
  const { id: userId } = req.params;
  if (!userId) {
    return sendError(
      res,
      "User id must be provided",
      400,
      "User id not provided"
    );
  }
  const notifications = await Notification.find({ recipient: userId });
  return sendSuccess(res, notifications, "Notifications fetched");
});

// MARK notification as read
export const markAsRead = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return sendError(res, "Notification id must be provided", 400);
  }
  const notification = await Notification.findByIdAndUpdate(
    id,
    { isRead: true },
    { new: true }
  );

  // Send real-time update to frontend (notification read)
  const io = getIO();
  io.to(notification.recipient.toString()).emit("notification_read", {
    notificationId: id,
  });
  return sendSuccess(res, notification, "Notification marked as read");
});

// Mark notification as unread
export const unreadNotification = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return sendError(res, "Notification id must be provided", 400);
  }
  const notification = await Notification.findByIdAndUpdate(
    id,
    { isRead: false },
    { new: true }
  );

  // Send real-time update to frontend (notification unread)
  const io = getIO();
  io.to(notification.recipient.toString()).emit("notification_unread", {
    notificationId: id,
  });
  return sendSuccess(res, notification, "Unread notifications fetched");
});

// CREATE notification (called by backend service or admin)
export const createNotification = asyncHandler(async (req, res) => {
  const { recipient, title, body, type } = req.body;
  if ([recipient, title, body, type].some((field) => !field)) {
    return sendError(
      res,
      "All fields are required",
      400,
      "All fields of notification creation are required"
    );
  }
  const newNotification = await Notification.create({
    recipient,
    title,
    body,
    type,
  });
  const io = getIO();
  io.to(recipient).emit("new_notification", newNotification);
  return sendSuccess(res, newNotification, "Notification created");
});
