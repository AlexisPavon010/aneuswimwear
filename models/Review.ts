import mongoose, { Schema } from 'mongoose'

export const ReviewSchema = new Schema({
  name: { type: String, required: true, },
  comment: { type: String, required: true, },
  rating: { type: Number, required: true, },
  user: { type: Schema.Types.ObjectId, ref: 'User', }
}, {
  timestamps: true
})

const Reviews = mongoose.models.Products || mongoose.model('Review', ReviewSchema);

export default Reviews;