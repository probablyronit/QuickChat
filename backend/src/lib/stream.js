import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("Stream API key or Secret is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUsers([userData]);
    return userData;
  } catch (error) {
    console.error("Error upserting Stream user:", error);
  }
};

export const generateStreamToken = (userId) => {
  try {
    if (!apiKey || !apiSecret) {
      console.error("Stream API key or Secret is missing");
      return null;
    }

    // ensure userId is a string
    const userIdStr = userId.toString();
    console.log("Generating token for user ID:", userIdStr);
    
    const token = streamClient.createToken(userIdStr);
    console.log("Token generated successfully");
    return token;
  } catch (error) {
    console.error("Error generating Stream token:", error);
    return null;
  }
};
