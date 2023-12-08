import cors from "cors";

const corsOptions = {
  origin: resolveOriginUrl(process.env.ORIGIN_URL),
  optionsSuccessStatus: 200,
};

export default cors(corsOptions);

function resolveOriginUrl(url: string | undefined): string {
  if (!url) {
    throw new Error("Origin URL is not defined");
  }

  return url;
}