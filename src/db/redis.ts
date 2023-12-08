import { createClient } from "redis";
import { config } from "../config/redis";

const client = createClient({
  url: config.url,
});

client.connect().catch((error) => {
  console.error(error);
});

client.on("error", (error) => {
  console.error(error);
});
console.log("Redis client created");

client.on("connect", () => {
  console.log("Redis client connected");
});

export default client;
