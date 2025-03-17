import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
    lastLogin: { type: Date, default: Date.now },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    isVerified: { type: Boolean, default: false },
    verificationToken: String,
    resetPasswordToken: String,
    resetPasswordExpireAt: Date,
    verificationTokenExpireAt: Date,
  },

  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
