import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { DotenvConfig } from './env.config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: DotenvConfig.DB_HOST,
  port: +DotenvConfig.DB_PORT,
  username: DotenvConfig.DB_USER,
  password: DotenvConfig.DB_PASSWORD,
  database: DotenvConfig.DB_NAME,
  synchronize: true,
  // dropSchema: true,
  logging: false,
  entities: [__dirname + '/../entities/**/*.entity{.ts,.js}'],
});
