import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'dev') dotenv.config();

type Env = {
  PORT: number;
  JWT_SECRET: string;
  MONGO_URL: string;
};

export function env(): Env {
  return {
    PORT: parseInt(process.env.PORT),
    JWT_SECRET: process.env.JWT_SECRET,
    MONGO_URL: process.env.MONGO_URL,
  };
}
