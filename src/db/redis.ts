import { createClient } from "redis";
import { config } from "../config/redis";

const client = createClient({
  url: config.url,
});

export default client;
