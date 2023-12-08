import cors from "cors";
import EnvironmentError from "../error/environment";

const urls = process.env.CORS_WHITELIST;

if (!isSet(urls)) {
  throw new EnvironmentError("CORS_WHITELIST is not set");
}

const whitelist = new Set(explode(urls));

const corsOptions = {
  origin: function (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) {
    if (whitelist.has(origin!)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
  credentials: true
};

export default cors(corsOptions);

function explode(urls: string) {
  return urls.split(",").map((url) => url.trim());
}

function isSet(value: string | undefined): value is string {
  return value !== undefined;
}