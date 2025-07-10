import mongoose, { models, Schema } from "mongoose";
import { NotificationModel } from "../types";

const NotificationSchema = new Schema<NotificationModel>(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    type: { type: String, enum: ["default", "form_action"], required: true },
    recipient: {
      type: String,
      required: true,
    },
    isRead: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Notification =
  models.Notification || mongoose.model("Notification", NotificationSchema);
