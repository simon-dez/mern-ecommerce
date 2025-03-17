import mongoose from "mongoose";

const PromoCodeSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  discount: { type: Number, required: true },
});

export default mongoose.model("PromoCode", PromoCodeSchema);
