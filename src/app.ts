import express from "express";
import authRoutes from "./routes/auth.routes";
import menuRoutes from "./routes/menu.routes";
import fileRoutes from "./routes/file.routes";
import { AppDataSource } from "./config/db";
import "./services/sync.service"; // Import the sync service to initialize the cron job
import dotenv from "dotenv";
import "reflect-metadata";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3400;

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/files", fileRoutes);

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error("Error connecting to the database", error));
