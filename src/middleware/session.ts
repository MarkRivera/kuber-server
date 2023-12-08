import session from "express-session";
import RedisStore from "connect-redis";
import redisClient from "../db/redis";
import { config } from "../config/session";

const store = new RedisStore({
  client: redisClient,
  prefix: "node-express-session:",
});

export default session({
  secret: config.secret,
  saveUninitialized: false,
  resave: false,
  name: config.sessionName,
  cookie: {
    httpOnly: true,
    secure: config.secure,
    maxAge: config.maxAge,
    sameSite: "lax",
  },
  store,
});
