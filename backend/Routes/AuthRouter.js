const { signup, login, profile_update } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require("../Middlewares/AuthValidation")
const multer=require("multer")
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer=require("nodemailer");
const usermodel = require("../Models/User")
const ensureAuthenticated = require('../Middlewares/Auth');
const User = require('../Models/User');
// Custom word-based ID generator (adjust words as needed)
const words = ['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa', 'lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega'];
const generatePlayerId = () => {
    return Array.from({ length: 3 }, () => words[Math.floor(Math.random() * words.length)]).join('-');
};

// ------------file-upload----------
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public/images")
    },
    filename:function(req,file,cb){
        cb(null,`${Date.now()}_${file.originalname}`)
    }

});
const uploadimage=multer({storage:storage});

router.put("/update-profile",ensureAuthenticated,profile_update)

// REGISTER USER WITH REFERRAL CODE
// Generate a unique referral code
const generateReferralCode = () => Math.random().toString(36).substring(2, 8).toUpperCase();

router.post("/register", async (req, res) => {
    try {
      const { phone, password, invitationCode } = req.body;
     console.log(req.body)
      // Check if user already exists
      let user = await User.findOne({ phoneNumber:phone});
      if (user) return res.json({ message: "Phone number already registered" });
  
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Generate referral code
      const referralCode = generateReferralCode();
  
      // Check if referredBy code exists in the database
      let referrer = null;
      if (invitationCode) {
        referrer = await User.findOne({ referralCode: invitationCode });
        if (!referrer) return res.json({success:false,message: "Invalid referral code" });
      }
  
      // Save user
      user = new User({
        phoneNumber:phone,
        password: hashedPassword,
        referralCode,
        referredBy: referrer ? invitationCode : null,
      });
  
      await user.save();
  
      // Send response
      res.status(201).json({success:true,message: "Registration successful", referralCode });
    } catch (err) {
        console.log(err)
      res.status(500).json({ message: "Server error", error: err.message });
    }
  });
  
  // LOGIN
  router.post("/login", async (req, res) => {
    try {
      const { phone, password } = req.body;
      console.log(req.body)
  
      // Find user
      const user = await User.findOne({ phoneNumber:phone });
      console.log(user)
      if (!user) return res.json({success:false, message: "User not found" });
  
      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.json({ succeess:false,message: "Invalid password" });
  
      // Generate JWT Token
      const token = jwt.sign({ id: user._id }, "your_secret_key", { expiresIn: "1d" });
  
      res.status(200).json({success:true, message: "Login successful", token, referralCode: user.referralCode,user});
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  });
  
module.exports = router;