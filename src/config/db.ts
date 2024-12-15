import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Category } from "../entities/Category";
import { Item } from "../entities/Item";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: 15808,
  database: "defaultdb",
  entities: [User, Category, Item],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
    ca: process.env.POSTGRES_CA,
  },
});

console.log("PostgreSql database successfully connected.");
