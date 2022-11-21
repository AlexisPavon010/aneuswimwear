import mongoose, { model, Schema } from "mongoose";

const BannerSchema = new Schema({
  title: { type: String },
  subtitle: { type: String },
  images: [{ type: String }],
})

const Banner = mongoose.models.Banner || model('Banner', BannerSchema);

export default Banner;