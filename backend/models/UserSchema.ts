import mongoose, { Document, Schema, Model } from "mongoose";

interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  phone?: number;
  photo?: string;
  role: "patient" | "admin";
  gender?: "male" | "female" | "other";
  bloodType?: string;
  appointments: mongoose.Types.ObjectId[];
}

const UserSchema: Schema<IUser> = new mongoose.Schema({
  // ...existing code...
});

const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);
export default User;
