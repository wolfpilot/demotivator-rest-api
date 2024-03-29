import { PoolConfig } from "pg"

const {
  RENDER,
  PG_USER,
  PG_HOST,
  PG_DATABASE,
  PG_DATABASE_URL,
  PG_PASSWORD,
  PG_PORT,
} = process.env

const isRender = !!RENDER

export const config: PoolConfig = isRender
  ? {
      connectionString: PG_DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    }
  : {
      user: PG_USER,
      host: PG_HOST,
      database: PG_DATABASE,
      password: PG_PASSWORD,
      port: (PG_PORT && parseInt(PG_PORT, 10)) || 5432,
    }
