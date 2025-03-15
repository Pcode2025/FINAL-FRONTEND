import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('⚠️ MONGODB_URI is not defined in .env file');
}

let isConnected = false; // Track the connection status

export const connectDB = async () => {
  if (isConnected) {
    console.log("✅ Using existing database connection");
    return;
  }

  try {
    if (!global._mongooseClientPromise) {
      global._mongooseClientPromise = mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }

    await global._mongooseClientPromise;
    isConnected = mongoose.connection.readyState === 1;
    console.log("🚀 Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection error:", error);
    throw new Error("Database connection failed");
  }
};
