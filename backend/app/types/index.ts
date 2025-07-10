import { Document, Types } from "mongoose";

export interface NotificationModel extends Document {
  _id: string;
  title: string;
  body: string;
  type: "default" | "form_action";
  recipient: string;
  isRead: boolean;
  createdAt: Date;
}

export interface UserModel extends Document {
  _id: string;
  username: string;
  email: string;
  password: string;
  notifications: Types.ObjectId[];
}
