// generate a 6 digit otp
const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000);
};
// generate otp expiry time
const otpExpiryTime = () => {
    return Date.now() + 10 * 60 * 1000; // 10 minutes from now
};

// Example: 1781835423456-k8m2x9qp
const generateRandomId = (givendate) =>
  `${Date.now()}-${Math.random().toString(36).substring(2, 10)}+${givendate}`;

module.exports = { generateOtp, otpExpiryTime, generateRandomId };