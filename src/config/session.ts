type SessionConfig = {
  secret: string;
  secure: boolean;
  maxAge: number;
  sessionName: string;
};

export const config: SessionConfig = {
  secret: resolveSessionSecret("SESSION_SECRET"),
  secure: process.env.NODE_ENV === "production" ? true : false,
  maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
  sessionName: process.env.SESSION_NAME || "sid",
};

function resolveSessionSecret(variable: string): string {
  const value = process.env[variable];
  if (!value) {
    throw new Error(`Environment variable ${variable} not found`);
  }
  return value;
}
