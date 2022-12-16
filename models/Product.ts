import mongoose, { Schema } from 'mongoose'

import { ReviewSchema } from './Review';

const ProductSchema = new Schema({
  reviews: [ReviewSchema],
  rating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },
  description: { type: String, required: true },
  images: [{ type: String }],
  inStock: { type: Number, required: true, default: 0 },
  price: { type: Number, required: true, default: 0 },
  colors: [{ type: Number, required: true, default: 0 }],
  sizes: [{ type: String, enum: { values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'], message: '{VALUE} sizes is not a valid value' } }],
  slug: { type: String, required: true, unique: true },
  tags: [{ type: String }],
  title: { type: String, required: true },
  type: { type: String, enum: { values: ['shirts', 'pants', 'hoodies', 'hats', 'top', 'bottom', 'one-pices', 'new', 'new-bottom', 'best_sellers', 'all-swim', 'sale', 'one-pieces', 'set'], message: '{VALUE} is not a valid type' } },
  gender: { type: String, enum: { values: ['men', 'women', 'kid', 'unisex', 'top', 'new', 'news', 'new-bottom', 'best_sellers', 'sale'], message: '{VALUE} is not a valid gender' } },
}, {
  timestamps: true,
})

ProductSchema.index({ title: 'text', tags: 'text' })

const Product = mongoose.models.Products || mongoose.model('Products', ProductSchema);

export default Product;
