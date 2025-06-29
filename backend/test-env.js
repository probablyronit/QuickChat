import "dotenv/config";

console.log("=== Environment Variables Test ===");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("STREAM_API_KEY:", process.env.STREAM_API_KEY ? "✅ Present" : "❌ Missing");
console.log("STREAM_API_SECRET:", process.env.STREAM_API_SECRET ? "✅ Present" : "❌ Missing");
console.log("JWT_SECRET_KEY:", process.env.JWT_SECRET_KEY ? "✅ Present" : "❌ Missing");
console.log("MONGODB_URI:", process.env.MONGODB_URI ? "✅ Present" : "❌ Missing");
console.log("PORT:", process.env.PORT || "3000 (default)");

if (!process.env.STREAM_API_KEY || !process.env.STREAM_API_SECRET) {
  console.error("\n❌ CRITICAL: Stream API credentials are missing!");
  console.error("Please set STREAM_API_KEY and STREAM_API_SECRET in your environment variables.");
} else {
  console.log("\n✅ All required environment variables are present!");
} 