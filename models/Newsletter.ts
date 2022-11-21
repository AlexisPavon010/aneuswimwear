import mongoose, { model, Schema } from "mongoose";

const NewsletterSchema = new Schema({
  description: { type: String },
  firstTitle: { type: String },
  images: [{ type: String }],
  secondTitle: { type: String },
  subtitle: { type: String },
})

const Newsletter = mongoose.models.Newsletter || model('Newsletter', NewsletterSchema);

export default Newsletter;