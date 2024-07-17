import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  ENVIRONMENT: z.enum(["dev", "production"]).default("dev"),
  PORT: z.coerce.number().int().positive()
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  throw new TypeError("Invalid .env variables.");
}

const env = _env.data;

export default env;
