import { AppDataSource } from "../config/db";
import { User } from "../entities/User";
import { MongoClient } from "mongodb";
import cron from "node-cron";
import dotenv from "dotenv";

dotenv.config();

const mongoUri = process.env.MONGO_URI || "";
const client = new MongoClient(mongoUri);
const dbName = "restaurantDB";

const syncData = async () => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const userCollection = db.collection("users");

    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();

    await userCollection.deleteMany({});
    await userCollection.insertMany(users);

    console.log("PostgreSQL users synced to MongoDB");
  } catch (error) {
    console.error("Error syncing data:", error);
  } finally {
    await client.close();
  }
};

// Schedule to run every 10 minutes
cron.schedule("*/10 * * * *", syncData);
