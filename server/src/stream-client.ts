import { StreamClient } from "@stream-io/node-sdk";

const apiKey=process.env.STREAM_API_KEY;
const apiSecret=process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
    throw new Error("API key and secret must be provided as environment variables.");
  }

export const client=new StreamClient(apiKey,apiSecret);
