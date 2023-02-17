import mongoose, { model, Schema } from "mongoose";

const OrderSchema = new Schema({
  discount      : { type: String },
  user          : { type: Schema.Types.ObjectId, ref: 'User', require: true },
  discountCode  : {
    couponNumber: { type: String },
    discount    : { type: Number },
  },
  shipping      : {
    name        : { type: String },
    price       : { type: Number },
  },
  orderItems: [{
    _id         : { type: String },
    title       : { type: String, required: true },
    topSize     : { type: String, required: true },
    bottomSize  : { type: String, required: true },
    quantity    : { type: Number, required: true },
    slug        : { type: String, required: true },
    image       : { type: String, required: true },
    price       : { type: Number, required: true },
    customization: { type: String },
  }],
  shippingAddress: {
    country     : { type: String, required: true },
    firsName    : { type: String, required: true },
    lastName    : { type: String, required: true },
    address     : { type: String, required: true },
    address2    : { type: String },
    zip         : { type: String, required: true },
    city        : { type: String, required: true },
    phone       : { type: String, required: true },
  },
  numberOfItems : { type: Number, required: true },
  subTotal      : { type: Number, required: true },
  total         : { type: Number, required: true },
  tax           : { type: Number, required: true },
  isPaid        : { type: Boolean, required: true, default: false },
  paidAt        : { type: String },
  transactionID : { type: String },
},{
  timestamps: true
}
);

const Order = mongoose.models.Order || model('Order', OrderSchema);

export default Order;