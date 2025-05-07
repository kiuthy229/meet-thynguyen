import mongoose, { Document, Schema, Model } from "mongoose";

interface IBooking extends Document {
  doctor: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  ticketPrice: string;
  appointmentDate: Date;
  status: "pending" | "approved" | "cancelled";
  isPaid: boolean;
}

const bookingSchema: Schema<IBooking> = new mongoose.Schema(
  {
    // ...existing code...
  },
  { timestamps: true }
);

const Booking: Model<IBooking> = mongoose.model<IBooking>("Booking", bookingSchema);
export default Booking;
