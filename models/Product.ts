import mongoose, { Schema } from 'mongoose'

const ProductSchema = new Schema({
  description: { type: String, required: true },
  images: [{ type: String }],
  inStock: { type: Number, required: true, default: 0 },
  price: { type: Number, required: true, default: 0 },
  colors: [{ type: Number, required: true, default: 0 }],
  sizes: [{ type: String, enum: { values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'], message: '{VALUE} sizes is not a valid value' } }],
  slug: { type: String, required: true, unique: true },
  tags: [{ type: String }],
  title: { type: String, required: true },
  type: { type: String, enum: { values: ['shirts', 'pants', 'hoodies', 'hats', 'top'], message: '{VALUE} is not a valid type' } },
  gender: { type: String, enum: { values: ['men', 'women', 'kid', 'unisex', 'top', 'new', 'new-bottom', 'best_sellers'], message: '{VALUE} is not a valid gender' } },
}, {
  timestamps: true,
})

ProductSchema.index({ title: 'text', tags: 'text' })

const Product = mongoose.models.Products || mongoose.model('Products', ProductSchema);

export default Product;
