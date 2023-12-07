type SessionConfig = {
  secret: string;
  secure: boolean;
  maxAge: number;
  sameSite: boolean | "lax" | "strict" | "none" | undefined;
};

export const config: SessionConfig = {
  secret: resolveSessionSecret("SESSION_SECRET"),
  secure: process.env.NODE_ENV === "production" ? true : false,
  maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
  sameSite: resolveSameSite("SESSION_SAME_SITE"),
};

function resolveSessionSecret(variable: string): string {
  const value = process.env[variable];
  if (!value) {
    throw new Error(`Environment variable ${variable} not found`);
  }
  return value;
}

function resolveSameSite(
  sameSite: string
): boolean | "lax" | "strict" | "none" | undefined {
  if (sameSite === "true") {
    return true;
  }
  if (sameSite === "false") {
    return false;
  }
  return sameSite as "lax" | "strict" | "none" | undefined;
}
