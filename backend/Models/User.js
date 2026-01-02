const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    referralCode: {
      type: String,
      unique: true,
    },
    referredBy: {
      type: String, // Stores the referral code of the person who referred this user
      default: null,
    },
    is_admin:{
      type:String,
      default:false
    },
    balance:{
      type:Number,
      default:0
    }
  },
  { timestamps: true }
);
const User=mongoose.model("User", userSchema);
module.exports = User;
