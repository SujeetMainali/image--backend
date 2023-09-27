import dotenv from "dotenv";
import path from "path";
console.log(path.resolve(process.cwd(), ".env"));
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

export const DotenvConfig = {
  APP_NAME: process.env.APP_NAME!,
  PORT: process.env.PORT!,

  BASE_URL: process.env.BASE_URL!,

  PINO_LOG_LEVEL: process.env.PINO_LOG_LEVEL!,
  NODE_ENV: process.env.NODE_ENV!,

  // jwt TOKENS
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET!,
  ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN!,

  // DATABASE
  DB_HOST: process.env.DB_HOST!,
  DB_DRIVER: process.env.DB_DRIVER!,
  DB_PORT: process.env.DB_PORT!,
  DB_NAME: process.env.DB_NAME!,
  DB_USER: process.env.DB_USER!,
  DB_PASSWORD: process.env.DB_PASSWORD!,

  // mail config
  MAIL_HOST: process.env.MAIL_HOST!,
  MAIL_PORT: process.env.MAIL_PORT!,
  MAIL_USERNAME: process.env.MAIL_USERNAME!,
  MAIL_PASSWORD: process.env.MAIL_PASSWORD!,
  MAIL_FROM: process.env.MAIL_FROM!,

  GLOBAL_PUBLIC_PATH: process.env.GLOBAL_PUBLIC_PATH,
  MAX_FILE_UPLOAD: process.env.MAX_FILE_UPLOAD!,
  FILE_UPLOAD_PATH: process.env.FILE_UPLOAD_PATH!,
};
