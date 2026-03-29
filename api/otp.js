import crypto from "crypto";

export default function handler(req, res) {

const SECRET = "SOOKO_HEBAT_2026";
const INTERVAL = 60;

const epoch = Math.floor(Date.now() / 1000 / INTERVAL);

const hash = crypto
.createHash("sha1")
.update(epoch + SECRET)
.digest("hex");

const otp = (parseInt(hash.substring(0,8),16) % 1000000)
.toString()
.padStart(6,"0");

res.status(200).json({
otp: otp,
interval: INTERVAL,
serverTime: Date.now()
});

}
