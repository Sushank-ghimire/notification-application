import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
    notifications: [{ type: Schema.Types.ObjectId, ref: "Notification" }],
  },
  { timestamps: true }
);

export const User = models.User || model("User", UserSchema);
