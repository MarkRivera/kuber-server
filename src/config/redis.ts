type RedisConfig = {
  url: string;
};

export const config: RedisConfig = {
  url: process.env.REDIS_URL || "redis://localhost:6379",
};
