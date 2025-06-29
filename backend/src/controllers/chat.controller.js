import { generateStreamToken } from "../lib/stream.js";

export async function getStreamToken(req, res) {
  try {
    console.log("Generating Stream token for user:", req.user.id);
    
    const token = generateStreamToken(req.user.id);
    
    if (!token) {
      console.error("Failed to generate Stream token");
      return res.status(500).json({ message: "Failed to generate chat token" });
    }

    console.log("Stream token generated successfully");
    res.status(200).json({ token });
  } catch (error) {
    console.log("Error in getStreamToken controller:", error.message);
    console.error("Full error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
