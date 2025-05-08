import mongoose, { Document, Schema, Model } from "mongoose";

interface IDoctor extends Document {
  email: string;
  password: string;
  name: string;
  phone?: number;
  photo?: string;
  ticketPrice?: number;
  role: string;
  specialization?: string;
  qualifications?: string[];
  experiences?: string[];
  bio?: string;
  about?: string;
  timeSlots?: string[];
  reviews: mongoose.Types.ObjectId[];
  averageRating: number;
  totalRating: number;
  isApproved: "pending" | "approved" | "cancelled";
  appointments: mongoose.Types.ObjectId[];
}

const DoctorSchema: Schema<IDoctor> = new mongoose.Schema({
  // ...existing code...
});

const Doctor: Model<IDoctor> = mongoose.model<IDoctor>("Doctor", DoctorSchema);
export default Doctor;
