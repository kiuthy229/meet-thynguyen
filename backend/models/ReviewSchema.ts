import mongoose, { Document, Schema, Model } from "mongoose";

interface IReview extends Document {
  doctor: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  reviewText: string;
  rating: number;
}

const reviewSchema: Schema<IReview> = new mongoose.Schema(
  {
    // ...existing code...
  },
  { timestamps: true }
);

const Review: Model<IReview> = mongoose.model<IReview>("Review", reviewSchema);
export default Review;
